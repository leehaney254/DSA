class Node {
  constructor(item, next = null) {
    this.item = item;
    this.next = next;
  };
};

class linkedList {

  constructor() {
    this.head = null
  }

  add(number) {
    const node = new Node;
    if (this.head === null) {
      this.head = node;
    }
  }

  get(index) {


  }
};