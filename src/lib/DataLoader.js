export default class DataLoader {

    constructor(database) {
        this.database = database;
    }

    // A generic method to query the database and return the first result or null
    async _getOne(query, params) {
        return await this.database.query(query, params)
            .then(data => data[0]) || null
    }

    // A generic method to query the database and return all results or null
    async _getAll(query, params) {
        return await this.database.query(query, params) || null
    }



    // Student methods
    async isStudentExist(student_ID) {
        let query = "SELECT * FROM Student WHERE student_ID = ?";
        return await this._getOne(query, [student_ID]) !== null;
    }

    async getStudentByID(student_ID) {
        let query = "SELECT * FROM Student WHERE student_ID = ?";
        return await this._getOne(query, [student_ID]);
    }

    async getStudentByFullName(student_FName, student_LName) {
        let query = "SELECT * FROM Student WHERE student_FName = ? AND student_LName = ?";
        return await this._getOne(query, [student_FName, student_LName]);
    }

    async findStudentsByID(student_ID) {
        let query = "SELECT * FROM Student WHERE student_ID = ?";
        return await this._getAll(query, [student_ID]);
    }

    async findStudentsByFullName(student_FName, student_LName) {
        let query = "SELECT * FROM Student WHERE student_FName = ? AND student_LName = ?";
        return await this._getAll(query, [student_FName, student_LName]);
    }

    async getAllStudents() {
        let query = "SELECT * FROM Student";
        return await this._getAll(query);
    }

    async getAllStudentsSortedByID() {
        let query = "SELECT * FROM Student ORDER BY student_ID";
        return await this._getAll(query);
    }








    // Teacher methods
    isTeacherExist(teacher_ID) {
        let query = "SELECT * FROM Teacher WHERE teacher_ID = ?";
        return this._getOne(query, [teacher_ID]) !== null;
    }

    async getTeacherByID(teacher_ID) {
        let query = "SELECT * FROM Teacher WHERE teacher_ID = ?";
        return await this._getOne(query, [teacher_ID]);
    }

    async getTeacherByFullName(teacher_Name) {
        let query = "SELECT * FROM Teacher WHERE teacher_Name = ?";
        return await this._getOne(query, [teacher_Name]);
    }

    async getTeacherByLectureIDAndBranchID(lecture_ID, branch_ID) {
        let query = "SELECT T.teacher_Name FROM Branch B\n" +
                            "JOIN Teacher T ON B.branch_TeacherID = T.teacher_ID\n" +
                            "WHERE B.branch_LectureID = ? AND B.branch_ID = ?;"
        return await this._getOne(query, [lecture_ID, branch_ID]);
    }

    async findTeachersByID(teacher_ID) {
        let query = "SELECT * FROM Teacher WHERE teacher_ID = ?";
        return await this._getAll(query, [teacher_ID]);
    }

    async findTeachersByFullName(teacher_Name) {
        let query = "SELECT * FROM Teacher WHERE teacher_Name = ?";
        return await this._getAll(query, [teacher_Name]);
    }

    async getAllTeachers() {
        let query = "SELECT * FROM Teacher";
        return await this._getAll(query);
    }

    async getAllTeachersSortedByName() {
        let query = "SELECT * FROM Teacher ORDER BY teacher_Name";
        return await this._getAll(query);
    }





    // Lecture methods

    async isLectureExist(lecture_ID) {
        let query = "SELECT * FROM Lecture WHERE lecture_ID = ?";
        return await this._getOne(query, [lecture_ID]) !== null;
    }

    async getLectureByID(lecture_ID) {
        let query = "SELECT * FROM Lecture WHERE lecture_ID = ?";
        return await this._getOne(query, [lecture_ID]);
    }

    async getLectureByCode(lecture_Code) {
        let query = "SELECT * FROM Lecture WHERE lecture_Code = ?";
        return await this._getOne(query, [lecture_Code]);
    }

    async getLectureByName(lecture_Name) {
        let query = "SELECT * FROM Lecture WHERE lecture_Name = ?";
        return await this._getOne(query, [lecture_Name]);
    }

    async findLecturesByCode(lecture_Code) {
        let query = "SELECT * FROM Lecture WHERE lecture_Code = ?";
        return await this._getAll(query, [lecture_Code]);
    }

    async findLecturesByName(lecture_Name) {
        let query = "SELECT * FROM Lecture WHERE lecture_Name = ?";
        return await this._getAll(query, [lecture_Name]);
    }

    async getAllLectures() {
        let query = "SELECT * FROM Lecture";
        return await this._getAll(query);
    }

    async getAllLecturesSortedByCode() {
        let query = "SELECT * FROM Lecture ORDER BY lecture_Code";
        return await this._getAll(query);
    }

    async getAllLecturesSortedByName() {
        let query = "SELECT * FROM Lecture ORDER BY lecture_Name";
        return await this._getAll(query);
    }





    // Class methods

    async isClassExist(class_ID) {
        let query = "SELECT * FROM Class WHERE class_ID = ?";
        return await this._getOne(query, [class_ID]) !== null;
    }

    async getClassByID(class_ID) {
        let query = "SELECT * FROM Class WHERE class_ID = ?";
        return await this._getOne(query, [class_ID]);
    }

    async getClassByCode(class_Code) {
        let query = "SELECT * FROM Class WHERE class_Code = ?";
        return await this._getOne(query, [class_Code]);
    }

    async findClassesByCode(class_Code) {
        let query = "SELECT * FROM Class WHERE class_Code = ?";
        return await this._getAll(query, [class_Code]);
    }

    async getAllClasses() {
        let query = "SELECT * FROM Class";
        return await this._getAll(query);
    }

    async getAllClassesSortedByCode() {
        let query = "SELECT * FROM Class ORDER BY class_Code";
        return await this._getAll(query);
    }





    //////////////////////

    async getStudentProfile(student_ID) {
        let query = "SELECT * FROM Student WHERE student_ID = ?";
        return await this._getOne(query, [student_ID]);
    }

    async getEnrolledBranchesSchedule(student_ID) {
        let query = "SELECT L.lecture_Code, LS.branch_ID, LS.dayofWeek, LS.startHour\n" +
                            "FROM Enrolled_Lectures EL\n" +
                            "JOIN Lecture_Schedule LS ON LS.branch_ID = EL.enrolled_BranchID AND LS.lecture_ID = EL.enrolled_LectureID \n" +
                            "JOIN Lecture L ON L.lecture_ID =  LS.lecture_ID \n" +
                            "WHERE EL.enrolled_StudentID = ?;\n"
        return await this._getAll(query, [student_ID]);
    }

    async getEnrolledBranchesList(student_ID) {
        let query = "SELECT DISTINCT L.lecture_Code, L.lecture_ID, LS.branch_ID, L.lecture_Name\n" +
                            "FROM Enrolled_Lectures EL\n" +
                            "JOIN Lecture_Schedule LS ON LS.branch_ID = EL.enrolled_BranchID AND LS.lecture_ID = EL.enrolled_LectureID \n" +
                            "JOIN Lecture L ON L.lecture_ID = LS.lecture_ID \n" +
                            "WHERE EL.enrolled_StudentID = ?;"
        return await this._getAll(query, [student_ID]);
    }

    //////////////////////

    async getBranchProfile(lecture_ID, branch_ID) {
        let query = "SELECT L.lecture_Code, B.branch_ID, L.lecture_Name, T.teacher_Name\n" +
                            "FROM Branch B\n" +
                            "JOIN Lecture L ON L.lecture_ID = B.branch_LectureID\n" +
                            "JOIN Teacher T ON T.teacher_ID = B.branch_TeacherID\n" +
                            "WHERE B.branch_LectureID = ? AND B.branch_ID = ?;"
        return await this._getOne(query, [lecture_ID, branch_ID]);
    }

    async getBranchSchedule(lecture_ID, branch_ID) {
        let query = "SELECT LS.lecture_Code, LS.branch_ID, LS.class_ID, LS.dayofWeek, LS.startHour\n" +
                            "FROM Lecture_Schedule LS\n" +
                            "WHERE LS.lecture_ID = ? AND LS.branch_ID = ?;"
        return await this._getAll(query, [lecture_ID, branch_ID]);
    }

    async getStudentsList(lecture_ID, branch_ID) {
        let query = "SELECT S.student_ID, S.student_FName, S.student_LName, S.student_Department\n" +
                            "FROM Enrolled_Lectures EL\n" +
                            "JOIN Student S ON S.student_ID = EL.enrolled_StudentID\n" +
                            "WHERE EL.enrolled_LectureID = ? AND EL.enrolled_BranchID = ?;"
        return await this._getAll(query, [lecture_ID, branch_ID]);
    }

    //////////////////////

    async getClassProfile(class_ID) {
        let query = "SELECT * FROM Class WHERE class_ID = ?"
        return await this._getOne(query, [class_ID]);
    }

    // async getClassSchedule(class_ID) {
    //     let query = "SELECT LS.lecture_Code, LS.lecture_ID, LS.branch_ID, LS.dayofWeek, LS.startHour\n" +
    //                         "FROM Lecture_Schedule LS\n" +
    //                         "WHERE LS.class_ID = ?;"
    //     return await this._getAll(query, [class_ID]);
    // }

    async getBranchesList(class_ID) {
        let query = "SELECT L.lecture_Code, L.lecture_ID, B.branch_ID, L.lecture_Name\n" +
                            "FROM Branch B\n" +
                            "JOIN Lecture L ON L.lecture_ID = B.branch_LectureID\n" +
                            "WHERE B.branch_ClassID = ?;"
        return await this._getAll(query, [class_ID]);
    }


   /*

    //////////////////////////////////////////
     studentProfile(student_ID) -> {student_FName, student_LName, student_mail, student_Department, student_Grade}

     branchesSchedule(student_ID) -> [
         {
             lecture_Code,
             lecture_ID,
             branch_ID,
             class_Code,
             dayofWeek,
             startHour
         },
            ...
     ]

     branchesList(student_ID) -> [
        {
            lecture_Code,
            lecture_ID,
            branch_ID,
            lecture_Name
         },
            ...
     ]
    //////////////////////////////////////////


    //////////////////////////////////////////
     branchProfile(lecture_ID, branch_ID) -> {lecture_Code, branch_ID, lecture_Name, teacher_Name, class_Code}

     branchSchedule(lecture_ID, branch_ID) -> [
         {
             lecture_Code,
             branch_ID,
             class_Code,
             class_ID,
             dayofWeek,
             startHour
         },
            ...
     ]

     studentsList(lecture_ID, branch_ID) -> [
        {
            student_ID,
            student_FName,
            student_LName,
            student_Department
         },
            ...
        }
     ]
     //////////////////////////////////////////


     //////////////////////////////////////////
     classProfile(class_ID) -> {class_Code, class_Name(Maybe)}

     classSchedule(class_ID) -> [
        {
            lecture_Code,
            lecture_ID,
            branch_ID,
            dayofWeek,
            startHour
        },
        ...
     ]

     branchesList(class_ID) -> [
        {
            lecture_Code,
            lecture_ID,
            branch_ID,
            lecture_Name
         },
            ...
     ]
     //////////////////////////////////////////


     //////////////////////////////////////////
     lectureProfile(lecture_ID) -> {lecture_Code, lecture_Name}

     branchesSchedule(lecture_ID) -> [
        {
            lecture_Code,
            branch_ID,
            lecture_ID,
            class_Code,
            dayofWeek,
            startHour
        },
        ...
     ]

     branchesList(lecture_ID) -> [
        {
            lecture_Code,
            lecture_Name,
            branch_ID,
            lecture_ID,
            class_Code
        },
            ...
     ]
     //////////////////////////////////////////
    */



}
