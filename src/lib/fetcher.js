// import mysql from 'mysql2/promise';

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

    return {
        student_ID: "221110085",
        student_Fname: "Archyn",
        student_Lname: "Mikhailov",
        student_Mail: "amikhailov@etu.edu.tr",
        student_Department: "Computer Engineering",

    };
}

// get function to get teacher data by id
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

// get function to get lecture data by id
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


// get function to get branch data by id
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
        "BIL113",
        "BIL211",
        "BIL212",
        "BIL214",
        "BIL265",
        "BIL311",
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
        case "BIL113": res = [
            {
                day: "Mon",
                start: "09",
            },
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Tue",
                start: null,
            },
            {
                day: "Wed",
                start: null,
            },
            {
                day: "Thu",
                start: null,
            },
            {
                day: "Fri",
                start: "11",
            },
            {
                day: "Sat",
                start: null,
            },
        ];
        break;

        case "BIL211": res = [
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Mon",
                start: "11",
            },
            {
                day: "Tue",
                start: null,
            },
            {
                day: "Wed",
                start: null,
            },
            {
                day: "Thu",
                start: null,
            },
            {
                day: "Fri",
                start: null,
            },
            {
                day: "Sat",
                start: null,
            },
        ];
        break;

        case "BIL212": res = [
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Tue",
                start: "09",
            },
            {
                day: "Wed",
                start: null,
            },
            {
                day: "Thu",
                start: null,
            },
            {
                day: "Fri",
                start: null,
            },
            {
                day: "Sat",
                start: null,
            },
        ];

        break;

        case "BIL214": res = [
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Tue",
                start: null,
            },
            {
                day: "Wed",
                start: "09",
            },
            {
                day: "Thu",
                start: null,
            },
            {
                day: "Fri",
                start: null,
            },
            {
                day: "Sat",
                start: null,
            },
        ];

        break;

        case "BIL265": res = [
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Tue",
                start: null,
            },
            {
                day: "Wed",
                start: null,
            },
            {
                day: "Thu",
                start: "09",
            },
            {
                day: "Fri",
                start: null,
            },
            {
                day: "Sat",
                start: null,
            },
        ];

        break;

        case "BIL311": res = [
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Mon",
                start: null,
            },
            {
                day: "Tue",
                start: null,
            },
            {
                day: "Wed",
                start: null,
            },
            {
                day: "Thu",
                start: null,
            },
            {
                day: "Fri",
                start: "09",
            },
            {
                day: "Sat",
                start: null,
            },
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

