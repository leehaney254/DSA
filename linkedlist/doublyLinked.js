//big) 
// insertion O(1)
//removal
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoulbyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let poppedNode = this.tail;
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let poppedNode = this.head;
      this.head = poppedNode.next;
      this.head.previous = null;
      poppedNode.next = null;
    }
    this.length--;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
      oldHead.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let position;
    let returnNode;
    if (index <= (this.length / 2)) {
      position = 0;
      returnNode = this.head;
      while (position !== index) {
        returnNode = returnNode.next;
        position++;
      }
    } else {
      position = this.length - 1;
      returnNode = this.tail;
      while (position !== index) {
        returnNode = returnNode.previous;
        position--;
      }
    }
    return returnNode;
  }

  set(value, index) {
    let position = this.get(index);
    if (position !== undefined) {
      position.value = value;
      return this;
    }
    return false;
  }

  insert(value, index) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let position = this.get(index);
    if (position === undefined) return false;
    let newNode = new Node(value);
    let previousNode = position.previous;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    newNode.next = position;
    position.previous = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let position = this.get(index);
    if (position === undefined) return false;
    let previousNode = position.previous;
    let nextNode = position.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    position.next = null;
    position.previous = null
    this.length--;
    return position;
  }
}

const list = new DoulbyLinked();
list.push(11);
list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);
list.push(17);
list.push(18);
list.push(19);
list.push(20);
console.log(list.remove(5));
// console.log(list.push(5));
// list.shift()
// console.log(list.shift());
// list.unshift(7);
// console.log(list.unshift(8))