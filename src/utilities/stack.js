export default class Stack {
    constructor() {
        this.stack = [];
    }

    push(state, object) {
        this.stack.push([state, object]);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}