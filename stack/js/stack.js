class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  addElement = (item) => {
    this.stack.push(item);
    this.top += 1;
  }

  checkIfEmpty = () => {
    return this.stack.length === 0;
  }

  removeElement = () => {
    if (this.checkIfEmpty === true) {
      return;
    }
    this.stack.pop();
    this.top -= 1;
  }

  peek = () => {
    return this.stack[this.top];
  }
}

const newStack = new Stack;
console.log(newStack.checkIfEmpty());
newStack.addElement(5);
console.log(newStack.checkIfEmpty());
console.log(newStack.peek());
newStack.removeElement();
console.log(newStack.checkIfEmpty());
console.log(newStack.peek());