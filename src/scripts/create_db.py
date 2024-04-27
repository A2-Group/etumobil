import json

from database import Database
from api import UBS_Api
from config_loader import Config_Loader

class CreateDatabase:

    def __init__(self):
        self.db = None

    def create_database(self):  # all in one method
        self.db = Database()
        self.db.connect()
        self.create_tables()
        ubs_api = self.connect_api()
        self.insert_all(ubs_api)


    def insert_all(self, ubs_api):
        self.insert_lectures(ubs_api)
        self.insert_teachers(ubs_api)
        self.insert_branches(ubs_api)
        self.insert_class(ubs_api)
        self.insert_schedule(ubs_api)

    def create_tables(self):
        with open('sql_queries.json', 'r') as f:
            data = f.read()

        data = json.loads(data)
        table_queries = data['table_queries']
        print(table_queries)
        for table_query in table_queries:
            query = table_query['query']
            self.db.execute_query(query)

    def connect_api(self):
        username = Config_Loader.get_config()['UBS_USERNAME']
        password = Config_Loader.get_config()['UBS_PASSWORD']
        ubs_api = UBS_Api(username, password)
        ubs_api.login()
        ubs_api.navigate_to_url(ubs_api.DERS_URL)
        return ubs_api

    def insert_lectures(self, ubs_api):
        lectures = ubs_api.get_lectures()
        if Config_Loader.get_config()['INSERT_LECTURE'] == 'True':
            lectureInsertQuery = Config_Loader.get_insertion_query('Insert Lecture')
            self.db.insert_multiple(lectureInsertQuery, lectures)

    def insert_teachers(self, ubs_api):
        teachers = ubs_api.get_teachers()
        if Config_Loader.get_config()['INSERT_TEACHER'] == 'True':
            teacherInsertQuery = Config_Loader.get_insertion_query('Insert Teacher')
            self.db.insert_multiple(teacherInsertQuery, teachers)

    def insert_branches(self, ubs_api):
        branchList, studentList = ubs_api.get_branches()
        if Config_Loader.get_config()['INSERT_BRANCH'] == 'True':
            branchInsertQuery = Config_Loader.get_insertion_query('Insert Branch')
            self.db.insert_multiple(branchInsertQuery, branchList)

        all_students, enrolledLectures = ubs_api.process_student_list(studentList)

        self.insert_students(all_students)
        self.insert_enrolled_lectures(enrolledLectures)

    def insert_students(self, students):
        if Config_Loader.get_config()['INSERT_STUDENT'] == 'True':
            studentInsertQuery = Config_Loader.get_insertion_query('Insert Student')
            self.db.insert_multiple(studentInsertQuery, students)

    def insert_enrolled_lectures(self, enrolledLectures):
        if Config_Loader.get_config()['INSERT_ENROLLED_LECTURE'] == 'True':
            enrolledLectureInsertQuery = Config_Loader.get_insertion_query('Insert Enrolled Lecture')
            self.db.insert_multiple(enrolledLectureInsertQuery, enrolledLectures)


    def insert_class(self, ubs_api):
        classList = ubs_api.get_class()
        if Config_Loader.get_config()['INSERT_CLASS'] == 'True':
            classInsertQuery = Config_Loader.get_insertion_query('Insert Class')
            self.db.insert_multiple(classInsertQuery, classList)

    def insert_schedule(self, ubs_api):
        lecture_schedules, class_schedules = ubs_api.get_schedules()
        if Config_Loader.get_config()['INSERT_SCHEDULE'] == 'True':
            scheduleInsertQuery = Config_Loader.get_insertion_query('Insert Lecture Schedule')
            self.db.insert_multiple(scheduleInsertQuery, lecture_schedules)
        if Config_Loader.get_config()['INSERT_CLASS_SCHEDULE'] == 'True':
            scheduleInsertQuery = Config_Loader.get_insertion_query('Insert Class Schedule')
            self.db.insert_multiple(scheduleInsertQuery, class_schedules)
