import { writable } from 'svelte/store';
import Student from "../models/student";
import Stack from "../utilities/stack.js"
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
    checkForAdmin: false,
    currentComponentIndex: 0,

    isOverlayOpen: false,

    swiper: null,

    ownerStudent: new Student(),         // it corresponds to owner of the phone.

    states: {
        STUDENT: "Student",
        TEACHER: "Teacher",
        LECTURE: "Lecture",
        CLASS: "Class"
    },
    currentState: "Student",
    currentObject: new Student(),
    restoreStack: new Stack()       // it contains tuples such that first element corresponds to state and
                                    // second elements corresponds to object.
});