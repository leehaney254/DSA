class Queue {
  constructor() {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    if (this.queue.length < 1) {
      return 'Empty'
    };
  };

  enqueue(value) {
    if (this.isEmpty() === 'Empty') {
      this.front += 1;
    }
    this.rear += 1;
    this.queue.push(value);
  };

  dequeue() {
    if (this.isEmpty() === 'Empty') {
      return 'Empty'
    }
    if (this.queue.length < 1) {
      this.front = -1;
      this.rear = -1;
    }
    this.queue.shift();
    this.rear -= 1;
  }

  peek() {
    return this.queue[this.front]
  }
};

newQueue = new Queue;
console.log(newQueue.peek());
newQueue.enqueue(1);
console.log(newQueue.peek());
newQueue.enqueue(2);
console.log(newQueue.peek());
newQueue.enqueue(3);
console.log(newQueue.peek());
newQueue.enqueue(4);
console.log(newQueue.peek());
newQueue.enqueue(5);
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.front, newQueue.rear, newQueue.queue)
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());
