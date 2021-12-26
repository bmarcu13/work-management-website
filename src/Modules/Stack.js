export class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        this.items.pop();
    }

    top() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    items() {
        return this.items;
    }
}
