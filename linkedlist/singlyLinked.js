// First we define our node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// It does not work when there is only one item left
// We create a singlyLinked list class
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const createdNode = new Node(value);
    if (this.head === null) {
      this.head = createdNode;
      this.tail = createdNode;
    } else {
      this.tail.next = createdNode;
      this.tail = createdNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let position = 0;
    let currentNode = this.head;
    while (position !== index) {
      currentNode = currentNode.next;
      position++;
    }
    return currentNode;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return this;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    let newNode = new Node(value);
    let position = this.get(index - 1);
    newNode.next = position.next;
    position.next = newNode;
    this.length++;
    return position;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    previousNode.next = nextNode;
    this.length--;
    return this;
  }

  reverse() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let previousNode = null;
    let nextNode;

    while (!currentNode.next) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}

const list = new singlyLinkedList();
list.push("Hi");
list.push("there");
list.push("young");
list.push("man.");
console.log(list.reverse());
// console.log(list.push("stranger."));
// // console.log(list.pop());
// // console.log(list.shift());
// // console.log(list.shift());
// console.log(list.unshift("Mimi"));
// console.log(list.unshift("ni"));
// // console.log(list.get(2));
// console.log(list.set("Bye", 4));
// console.log(list.remove(3));
