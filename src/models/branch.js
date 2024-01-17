import {getScheduleOfLecture, getEnrolledLecturesOfStudent, getLectureClasses, getClassSchedule, getStudent} from "$lib/fetcher.js";

export default class Branch {

    constructor(lecture_Code, lecture_Name, branch_ID, teacher_ID) {
        this.lecture_Code = lecture_Code;
        this.lecture_Name = lecture_Name;
        this.branchID = branch_ID;
        this.teacher_ID = teacher_ID;
        this.students = [];
        this.schedule = Array(6).fill().map(() => Array(14).fill(null));        // ((Mon, 08), Amfi3)
    }


    /*

    getLecture_Code() {
        return this.lecture_Code;
    }

    getLecture_Name() {
        return this.lecture_Name;
    }


    async getList() {
        let students = await getScheduleOfLecture(this.lecture_Code);


        for (let student of students) {
            this.students.push(await getStudent(student));
        }

        return this.students;
    }



    async createSchedule() {
        let classes = await getLectureClasses(this.lecture_Code);

        let days = ['Pzt', 'Sal', 'Car', 'Per', 'Cum', 'Cmt'];
        let hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18","19","20","21"];

        for (let lectureSlot of await getScheduleOfLecture(this.lecture_Code)) {
            let dayIndex = days.indexOf(lectureSlot.day);
            let hourIndex = hours.indexOf(lectureSlot.start);
            this.schedule[dayIndex][hourIndex] = lectureSlot.classCode;
        }

        return this.schedule;
    }
    */

}