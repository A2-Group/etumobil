import {stores} from "$lib/stores.js";
import {getLectureSchedule, getLectureStudents, getStudentLectures} from "$lib/fetcher.js";

export default class Student {
    constructor(student_ID, student_Fname, student_Lname, student_Mail, student_Department) {
        this.student_ID = student_ID;
        this.student_Fname = student_Fname;
        this.student_Lname = student_Lname;
        this.student_Mail = student_Mail;
        this.student_Department = student_Department;
        this.lectures = [];
    }

    getStudent_ID() {
        return this.student_ID;
    }

    getStudent_Fname() {
        return this.student_Fname;
    }

    getStudent_Lname() {
        return this.student_Lname;
    }

    getStudent_Mail() {
        return this.student_Mail;
    }

    getStudent_Department() {
        return this.student_Department;
    }

    setLectures(lectures) {
        this.lectures = lectures;
    }

    async createSchedule() {
        let studentId = this.student_ID;
        let lectures = await getStudentLectures(studentId);

        let days = ['Pzt', 'Sal', 'Car', 'Per', 'Cum', 'Cmt'];
        let hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18","19","20","21"];
        let schedule = Array(6).fill().map(() => Array(14).fill(null));

        for (let lecture of lectures) {
            let lectureSchedule = await getLectureSchedule(lecture);

            for (let lectureSlot of lectureSchedule) {
                let dayIndex = days.indexOf(lectureSlot.day);
                let hourIndex = hours.indexOf(lectureSlot.start);
                schedule[dayIndex][hourIndex] = lecture;
            }
        }
        return schedule;
    }



}