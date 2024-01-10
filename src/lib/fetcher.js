// import mysql from 'mysql2/promise';

import Student  from '../models/student.js';

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

// get function to get student data by id
export const getStudent = async (id) => {
    // connection.query(
    //     `SELECT * FROM Student WHERE student_ID = ${id}`,
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err.message);
    //         }
    //         return results;
    //     }
    // )

    // return {
    //     student_ID: "221110085",
    //     student_Fname: "Archyn",
    //     student_Lname: "Mikhailov",
    //     student_Mail: "amikhailov@etu.edu.tr",
    //     student_Department: "Computer Engineering",
    // };

    return new Student(
        "221110085",
        "Archyn",
        "Mikhailov",
        "amikhailov@etu.edu.tr",
        "Computer Engineering",
    );
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
    // connection.query(
    //     `SELECT * FROM Lecture WHERE lecture_ID = ${id}`,
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err.message);
    //         }
    //         return results;
    //     }
    // )
    let res
    switch (id) {
        case "BIL113": {
            res = {
                lecture_ID: "1",
                lecture_Code: "BIL113",
                lecture_Name: "Introduction to Computer Science",
            }
            break;
        }

        case "BIL211": {
            res = {
                lecture_ID : "2",
                lecture_Code: "BIL211",
                lecture_Name: "Data Structures",

            }
            break;
        }

        case "BIL212": {
            res = {
                lecture_ID : "2",
                lecture_Code: "BIL212",
                lecture_Name: "Algorithms",

            }
            break;
        }

        case "BIL214": {
            res = {
                lecture_ID : "3",
                lecture_Code: "BIL214",
                lecture_Name: "Discrete Mathematics",

            }
            break;
        }

        case "BIL265": {
            res = {
                lecture_ID : "4",
                lecture_Code: "BIL265",
                lecture_Name: "Computer Organization",

            }
            break;
        }

        case "BIL311": {
            res = {
                lecture_ID : "5",
                lecture_Code: "BIL311",
                lecture_Name: "Operating Systems",

            }
            break;
        }
    }

    return res;
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





//get all students
export const getAllStudents = async () => {}

//get all teachers
export const getAllTeachers = async () => {}

//get all lectures
export const getAllLectures = async () => {}

//get all classes
export const getAllClasses = async () => {}

