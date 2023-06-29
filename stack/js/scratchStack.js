//bigO 
// insertion O(1)
// Removal O(1)
// searching O(N)
// Accessing O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let storeNode = this.first;
      newNode.next = storeNode;
      this.first = newNode;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) return undefined;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let currentNode = this.first;
      this.first = currentNode.next;
      currentNode.next = null;
    }
    return this.size--;
  }
}

const stack = new Stack();
stack.push("Leo");
stack.push("ni");
stack.push("kesho");
console.log(stack);
stack.pop();
console.log(stack);