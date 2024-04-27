import json

import requests
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.common.by import By

from database import Database


class RequestError(Exception):
    pass


class ParseError(Exception):
    pass


class Branch:
    def __init__(self, branch_id, branch_teacher, lecture_code, student_list, program):
        self.branch_id = branch_id
        self.branch_teacher = branch_teacher
        self.lecture_code = lecture_code
        self.student_list = student_list
        self.program = program

    def __str__(self):
        return (f"Branch object - Branch_id: {self.branch_id}, Attribute2: {self.branch_teacher}"
                f"Lecture_Code: {self.lecture_code},Student_List: {self.student_list},")


def doesTeacherExist(teachers, teacher_name):
    for teacher in teachers:
        if teacher[1] == teacher_name:
            return teacher[0]
    return None


class UBS_Api:
    HOST_URL = "https://ubs.etu.edu.tr"
    LOGIN_URL = f"{HOST_URL}/login.aspx"
    DERS_URL = f"{HOST_URL}/Ogrenci/Ogr0413/Default.aspx"

    HEADER = {"User-Agent": "insomnia/8.2.0"}
    QUERYSTRING = {"dil": "tr", "oturumNo": ""}

    API_ENDPOINTS = {
        "ogretim_uyeleri_list": f"https://program.etu.edu.tr/DersProgrami/api/ogretimuyesi/getlist/",
        "derslik_list": f"https://program.etu.edu.tr/DersProgrami/api/derslik/getlist/",
        "dersler_list": f"https://program.etu.edu.tr/DersProgrami/api/ders/getlist/",
        "hocanin_ders_programi": f"https://program.etu.edu.tr/DersProgrami/api/ogretimuyesi/get/HOCA_ID/",
        "derslik_programi": f"https://program.etu.edu.tr/DersProgrami/api/dersprogramplan/getderslik/DERSLIK_ID",
        "ders_kodun_programi": f"https://program.etu.edu.tr/DersProgrami/api/dersprogramplan/dersProgram/DERS_ID/0",
        "dersi_secen_ogrenciler": f"https://program.etu.edu.tr/DersProgrami/api/sube/ogrencilist/DERS_ID/0",
        "bos_derslikler": f"https://program.etu.edu.tr/DersProgrami/api/dersprogramplan/bosderslik",
    }

    def __init__(self, username, password):
        self.username = username
        self.password = password

        self.session = requests.Session()
        self.session.headers.update(self.HEADER)

        self.options = webdriver.ChromeOptions()
        self.options.add_argument("--headless=new")
        self.driver = webdriver.Chrome(options=self.options)

        self.connection_obj = None
        self.cursor_obj = None

        self.database = Database()
        self.database.connect()

    def _del_(self):
        self.driver.quit()

    def make_request(self, method, url, querystring={}, payload=""):
        try:
            response = self.session.request(method, url, data=payload, params=querystring)
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            raise RequestError(f"Request failed: {e}")

    def make_requests(self, method, urls, querystring={}, payload=""):
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = {executor.submit(self.make_request, method, url, querystring, payload): url for url in urls}
            results = {}
            for future in concurrent.futures.as_completed(futures):
                url = futures[future]
                try:
                    results[url] = future.result()
                except Exception as exc:
                    print(f'{url} generated an exception: {exc}')
            return results

    def get_cookies(self):
        cookies = self.driver.get_cookies()
        return {c['name']: c['value'] for c in cookies}

    def set_cookies(self, cookies):
        self.session.cookies.update(cookies)

    def navigate_to_url(self, url):
        self.driver.get(url)
        self.current_url = self.driver.current_url

    def get_session_id(self):
        return self.current_url.split("=")[-1][:-2]

    def login(self):
        self.navigate_to_url(self.LOGIN_URL)
        username_field = self.driver.find_element(By.NAME, 'txtLogin')
        password_field = self.driver.find_element(By.NAME, 'txtPassword')
        username_field.send_keys(self.username)
        password_field.send_keys(self.password)
        login_button = self.driver.find_element(By.NAME, 'btnLogin')
        login_button.click()
        self.navigate_to_url(self.DERS_URL)

    def get_LecturesJSON(self):
        queryString = {"dil": "tr", "oturumNo": self.get_session_id()}
        response = self.make_request("GET", self.API_ENDPOINTS['dersler_list'], queryString)
        return response.text

    def get_TeachersJSON(self):
        queryString = {"dil": "tr", "oturumNo": self.get_session_id()}
        response = self.make_request("GET", self.API_ENDPOINTS['ogretim_uyeleri_list'], queryString)
        return response.text

    def get_teachers(self):
        teacher_data = json.loads(self.get_TeachersJSON())
        teachers = []
        for teacher in teacher_data:
            teacher_Name = teacher.get("AdSoyad")
            teacher_ID = teacher.get("OgretimUyesiID")
            teachers.append((teacher_ID, teacher_Name))
        return teachers

    def get_lectures(self):
        lecture_data = json.loads(self.get_LecturesJSON())
        lectures = []
        for lecture in lecture_data:
            lecture_Name = lecture.get("DersAdi").replace("'", "")
            lecture_Code = lecture.get("DersKodu")
            lecture_ID = lecture.get("DersID")
            lectures.append((lecture_ID, lecture_Name, lecture_Code))
        return lectures

    def fetch_branches(self, lectures):

        session_id = self.get_session_id()

        queryString = {"dil": "tr", "oturumNo": session_id}

        urls = [self.API_ENDPOINTS['dersi_secen_ogrenciler'].replace("DERS_ID", str(lecture_id[0])) for lecture_id in
                lectures]
        responses = self.make_requests("GET", urls, queryString)

        index = 0
        branches = []
        for (url, response) in responses.items():
            lecture_Code = self.extract_lecture_Code_From_URL(url)
            print(f"({index}/{len(responses)})")
            data = json.loads(response.text)
            index += 1
            for branch in data:
                branch_id = branch.get("SubeNo")
                branch_lecturer = branch.get("OgretimUyesi")
                studentListOfBranch = branch.get("Ogrenci")
                currentBranch = Branch(branch_id, branch_lecturer, lecture_Code, studentListOfBranch, "")
                branches.append(currentBranch)
        return branches

    def get_branches(self):
        selectLecturesQuery = "SELECT Lecture_ID FROM Lecture;"
        lectures = self.database.execute_read_query(selectLecturesQuery)

        branches = self.fetch_branches(lectures)
        selectTeacherQuery = f"SELECT Teacher_ID, Teacher_Name FROM Teacher;"
        teachers = self.database.execute_read_query(selectTeacherQuery)

        studentList = []
        branchInsertList = []
        for branch in branches:
            studentList.append((branch.branch_id, branch.lecture_code, branch.student_list))
            teacher_id = doesTeacherExist(teachers, branch.branch_teacher)
            branchInsertList.append((branch.branch_id, branch.lecture_code, teacher_id))

        return branchInsertList, studentList

    def process_student_list(self, studentList):
        all_students = []
        enrolledLectures = []
        seen_student_ids = set()
        for unit in studentList:
            currBranch = unit[0]
            currLecture = unit[1]
            for student in unit[2]:
                student_ID = student.get("OgrenciNo")
                student_Name = student.get("Ad")
                student_Surname = student.get("Soyad")
                student_Grade = student.get("Sinif")
                student_Mail = student.get("Mail")
                student_Department = student.get("BirimAdi")
                if student_ID not in seen_student_ids:
                    seen_student_ids.add(student_ID)
                    all_students.append((student_ID, student_Name, student_Surname, student_Mail, student_Department,
                                         student_Grade))
                enrolledLectures.append((currBranch, currLecture, student_ID))

        return all_students, enrolledLectures

    def get_schedules(self):
        selectLecturesQuery = "SELECT Lecture_ID FROM Lecture;"
        lectures = self.database.execute_read_query(selectLecturesQuery)

        lecture_schedules, class_schedules = self.get_lectureClassSchedules(lectures)

        return lecture_schedules, class_schedules

    def get_lectureClassSchedules(self, lectures):
        lecture_schedules = []
        class_schedules = []
        session_id = self.get_session_id()

        queryString = {"dil": "tr", "oturumNo": session_id}
        urls = [self.API_ENDPOINTS['ders_kodun_programi'].replace("DERS_ID", str(lecture_id[0])) for lecture_id in
                lectures]
        schedule_id = 1
        responses = self.make_requests("GET", urls, queryString)
        for (url, response) in responses.items():
            program_Data = json.loads(response.text)
            lecture_Code = self.extract_lecture_Code_From_URL(url)

            for branch in program_Data:
                branch_id = branch.get("SubeNo")
                program_Plan = branch.get("DersProgramPlan")

                for interval in program_Plan:
                    start_Hour = interval.get("BaslangicSaat")[0:2]
                    daily_program = interval.get("OgrenciDersProgram")

                    for day in daily_program:
                        day_ID = day.get("Gun")
                        day_Name = self.int_To_Day(day_ID)
                        classroom_Code = day.get("DersKoduList")[0]

                        if classroom_Code != "-":
                            classroom_ID = self.extract_classID(classroom_Code)
                            lecture_schedules.append((schedule_id, lecture_Code, branch_id, day_Name, start_Hour))
                            class_schedules.append((schedule_id, classroom_ID))
                            schedule_id += 1

        return lecture_schedules, class_schedules

    def get_class(self):
        class_listJSON = json.loads(self.get_classlist())
        class_list = []
        for classroom in class_listJSON:
            classID = classroom.get("DerslikID")
            classCode = classroom.get("Kodu")
            class_list.append((classID, classCode))

        return class_list

    def get_classlist(self):
        session_id = self.get_session_id()
        queryString = {"dil": "tr", "oturumNo": session_id}
        response = self.make_request("GET", self.API_ENDPOINTS['derslik_list'], queryString)
        return response.text

    class_dict = []

    def extract_classID(self, classCode):
        if not self.class_dict:
            self.class_dict = self.database.execute_read_query("SELECT * FROM Class;")

        for classroom in self.class_dict:
            if classroom[1] == classCode:
                return classroom[0]
        if classCode == "TM 220":
            return 2435
        if classCode == "B51":
            return 2409

    def int_To_Day(self, day_ID):
        if day_ID == 1:
            return "Pzt"
        elif day_ID == 2:
            return "Sal"
        elif day_ID == 3:
            return "Çar"
        elif day_ID == 4:
            return "Per"
        elif day_ID == 5:
            return "Cum"
        elif day_ID == 6:
            return "Cmt"
        else:
            return "Error"

    def extract_lecture_Code_From_URL(self, url):
        """
            Returns a lecture id for a given URL
        """
        start_index = 0
        if url.find("ogrencilist") != -1:
            start_index = url.find("ogrencilist") + 12
        elif url.find("dersProgram") != -1:
            start_index = url.find("dersProgram") + 12

        url = url[start_index:]
        end_index = url.find("/")
        lecture_ID = url[:end_index]
        return lecture_ID
