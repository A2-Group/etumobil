import { writable } from 'svelte/store';
import Stack from "../utilities/stack.js"
import DataLoader from "$lib/dataloader.js";
export const stores = writable({
    textColor: "#37516d",
    backgroundColor: "#F5F5F5",
    primaryColor: "#00acc1",
    secondaryColor: "#A7B2E2",
    thirdColor: "#543ab7",
    accentColor: "#FC4F83",
    gradientColor: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
    gradientColor2: "linear-gradient(40deg, #ddc0ff , #c4ddff)",

    isLoggedIn: false,
    isAdmin: false,
    admins: ["221110085", "201101013"],
    currentComponentIndex: 0,

    isOverlayOpen: false,

    swiper: null,
    dataLoader: new DataLoader(null),

    ownerStudentID: "",         // it corresponds to owner of the phone.

    states: {
        STUDENT: "student_ID",
        BRANCH: "branch_ID",
        TEACHER: "teacher_ID",
        LECTURE: "lecture_ID",
        CLASS: "class_ID"
    },

    currentState: "student_ID",
    currentStateID: "",

    restoreStack: new Stack()

});