//import mysql from 'mysql2/promise';

// var mysql = require('mysql');

//import mysql from 'mysql'
//import createConnection from 'mysql'

import Student from '../models/student.js';

// import { config } from 'dotenv';
//
// config();
//
//
// console.log(process.env.DB_PASSWORD);

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
/*
const connection = mysql.createConnection({
    host: '141.144.194.239',
    port: '3306',
    user: 'alkin',
    password: 'alkiner3232'
});*/

/*const connection = mysql.createConnection({
    host: '141.144.194.239',
    port: '3306',
    user: 'alkin',
    password: 'alkiner3232',
    database: 'etumobile'
});*/


// let query = `SELECT * FROM Student WHERE student_ID = 201101013 or student_ID = 201101014`;
//
// fetch(`http://localhost:5173/api?query=${query}`)
//     .then(response => response.json())
//     .then(data => console.log(data))


// get function to get student data by id
export const getStudent = async (id) => {

    await getLecture(id);
    let query = `SELECT * FROM Student WHERE student_ID = ${id}`;

    return await fetch(`http://localhost:5173/api?query=${query}`)
        .then(response => response.json())
        .then(response => response["data"])
        .then(data => data[0][0])
        .then(student => new Student(student["student_ID"],
            student["student_FName"],
            student["student_LName"],
            student["student_Mail"],
            student["student_Department"],
            student["student_Grade"]));

}


// get function to get lecture data by id


export const getTeacher = async (id) => {
    connection.query(
        `SELECT * FROM Teacher WHERE teacher_ID = ${id} `,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            return results;
        }
    )
}



export const getLecture = async (id) => {

    let query = `SELECT * FROM Enrolled_Lectures WHERE enrolled_StudentID = ${id}`;

    return await fetch(`http://localhost:5173/api?query=${query}`)
        .then(response => response.json())
        .then(response => response["data"])
        .then(data => data[0][0])
        .then(student => new Student(student["student_ID"],
            student["student_FName"],
            student["student_LName"],
            student["student_Mail"],
            student["student_Department"],
            student["student_Grade"]));

}

// get function to get class data by id
export const getClass = async (id) => {
    connection.query(
        `SELECT * FROM Class WHERE class_ID = ${id}`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            return results;
        }
    )
}


export const getBranch = async (id) => {
    connection.query(
        `SELECT * FROM Branch WHERE branch_ID = ${id}`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
            }
            return results;
        }
    )
}


// get function to search for student by full name returns array of students
export const searchStudent = async (fullName) => {}

// get function to search for teacher by full name returns array of teachers
export const searchTeacher = async (fullName) => {}




// get function to get student's lectures by id returns array of classes
export const getStudentLectures = async (id) => {
    return [
        "BIL395",
        "BIL481",
        "BIL331",
        "BIL345",
        "UGI315",
        "MAT101",
    ];
}


//get function to get lecture's students by id returns array of students
export const getLectureStudents = async (id) => {
    return [
        "221110085",
        "221110086",
        "221110087",
        "221110088",
        "221110089",
        "221110090",
    ];
}

//get function to get lecture's days by id returns array of days

export const getLectureSchedule = async (id) => {
    let res
    switch (id) {
        case "BIL395": res = [
            {
                day: "Pzt",
                start: "10",
            },
            {
                day: "Pzt",
                start: "11",
            },
            {
                day: "Per",
                start: "10",
            },
            {
                day: "Per",
                start: "11",
            },
        ];
        break;

        case "BIL481": res = [
            {
                day: "Sal",
                start: "14",
            },
            {
                day: "Sal",
                start: "15",
            },
            {
                day: "Per",
                start: "08",
            },
            {
                day: "Per",
                start: "09",
            }
        ];
        break;

        case "BIL331": res = [
            {
                day: "Pzt",
                start: "12",
            },
            {
                day: "Pzt",
                start: "13",
            },
            {
                day: "Per",
                start: "13",
            },
            {
                day: "Per",
                start: "14",
            }
        ];

        break;

        case "BIL345": res = [
            {
                day: "Sal",
                start: "12",
            },
            {
                day: "Sal",
                start: "13",
            },
            {
                day: "Cum",
                start: "13",
            },
            {
                day: "Cum",
                start: "16",
            }
        ];

        break;

        case "UGI315": res = [
            {
                day: "Car",
                start: "14",
            },
            {
                day: "Car",
                start: "15",
            },
            {
                day: "Car",
                start: "16",
            },
        ];

        break;

        case "MAT101": res = [
            {
                day: "Pzt",
                start: "08",
            },
            {
                day: "Pzt",
                start: "09",
            },
            {
                day: "Per",
                start: "14",
            },
            {
                day: "Per",
                start: "15",
            },
            {
                day: "Cum",
                start: "08",
            },
            {
                day: "Cum",
                start: "09",
            }
        ];
    }

    return res
}

export function isStudentNoValid(no) {

    // 9 haneli mi bak
    // Eger oyleyse +server.js'e erisip fetch yapacak.
    return true;
}




//get all students
export const getAllStudents = async () => {}

//get all teachers
export const getAllTeachers = async () => {}

//get all lectures
export const getAllLectures = async () => {}

//get all classes
export const getAllClasses = async () => {}

