// the best approach is to add from the end and remove from the beginning
// insertion O(1)
// Removal O(1)
// searching O(N)
// Accessing O(N)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queueu {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //we add to the begining
  enqueue(value) {
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

  //we remove from the end
  dequeue() {
    if (!this.first) return undefined;
    let currentNode = this.first;
    let previousNode;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.last = previousNode;
    previousNode.next = null;
    this.size--;
    return currentNode;
  }
}

let ourQueue = new Queueu();
ourQueue.enqueue("ten")
ourQueue.enqueue("nine")
ourQueue.enqueue("eight")
console.log(ourQueue);
ourQueue.dequeue();
console.log(ourQueue);