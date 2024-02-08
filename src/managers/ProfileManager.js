import {currentStateID, states, dataLoader} from "./StoreManager.js";

export default class ProfileManager {
    static async createProfile(currentState) {
        switch (currentState) {
            case states.STUDENT:
                return await ProfileManager._createStudentProfile();
            case states.TEACHER:
                return await ProfileManager._createTeacherProfile();
            case states.BRANCH:
                return await ProfileManager._createBranchProfile();
            case states.LECTURE:
                return await ProfileManager._createLectureProfile();
            case states.CLASS:
                return await ProfileManager._createClassProfile();
        }
    }

    static async _createStudentProfile() {
        const properties = [
            {keys: ["student_FName", "student_LName"], label: "İsim", value: ""},
            {key: "student_Department", label: "Bölüm", value: ""},
            {key: "student_ID", label: "Öğrenci No", value: ""},
            {key: "student_Grade", label: "Sınıf", value: ""},
            {key: "student_Mail", label: "Email", value: ""},
        ]

        const data = await dataLoader.getStudentByID(currentStateID)

        for (let property of properties) {
            if (property.keys) {
                property.value = data[property.keys[0]] + " " + data[property.keys[1]]
            } else {
                property.value = data[property.key]
            }
        }
        return properties;
    }
    static async _createBranchProfile() {
        const properties = [
            {key: "lecture_Name", label: "Ders İsimi", value: ""},
            {key: "lecture_Code", label: "Ders Kodu", value: ""},
            {key: "branch_ID", label: "Şube", value: ""},
            // {key: "", label: "Derslik", value: ""},
            {key: "teacher_Name", label: "Hocası", value: ""},
        ]

        const lectureID = currentStateID.split(".")[0]
        const branchID = currentStateID.split(".")[1]

        const data = await dataLoader.getBranchProfile(lectureID, branchID)

        for (let property of properties) {
            property.value = data[property.key]
        }
        return properties;
    }

    static async _createLectureProfile() {

    }

    static async _createClassProfile() {

    }

    static async _createTeacherProfile() {

    }

}