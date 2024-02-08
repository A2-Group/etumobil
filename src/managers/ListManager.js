import {currentStateID, dataLoader, states} from "./StoreManager.js";

export default class ListManager {

    static async createList(currentState) {
        switch (currentState) {
            case states.STUDENT:
                return await ListManager._createBranchList();
            case states.TEACHER:
                return await ListManager._createBranchList();
            case states.BRANCH:
                return await ListManager._createStudentList();
            case states.LECTURE:
                return await ListManager._createBranchList();
            case states.CLASS:
                return await ListManager._createBranchList();
        }
    }

    static async _createBranchList() {
        const properties = [];

        const data = await dataLoader.getEnrolledBranchesList(currentStateID);

        for (const item of data) {
            properties.push({
                title: item.lecture_Code + "." + item.branch_ID,
                description: item.lecture_Name,
                nextState: states.BRANCH,
                nextStateID: item.lecture_ID + "." + item.branch_ID,
            });
        }
        return properties;
    }

    static async _createStudentList() {
        const properties = [];

        const lectureID = currentStateID.split(".")[0]
        const branchID = currentStateID.split(".")[1]

        const data = await dataLoader.getStudentsList(lectureID, branchID);

        for (const item of data) {
            properties.push({
                title: item.student_FName + " " + item.student_LName,
                description: item.student_Department,
                nextState: states.STUDENT,
                nextStateID: item.student_ID,
            });
        }

        return properties;
    }
}