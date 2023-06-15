class Circularqueue {
  constructor() {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.maxlength = 5;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length >= this.maxlength;
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.front += 1;
    }
    if (this.isFull()) {
      if (this.queue[0] === undefined) {
        this.rear = 0;
        this.queue[this.rear] = value;
        return
      }
      if (this.rear + 1 === this.front) {
        return 'Queue is full';
      }
      this.rear += 1;
      return this.queue[this.rear] = value;
    }
    this.rear += 1;
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    this.queue.splice(this.front, 1, undefined);
    this.front += 1;
    if (this.front > this.rear) {
      this.rear = -1;
      this.front = -1;
    }
  }
};

const queues = new Circularqueue;
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(1);
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(2);
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(3);
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(4);
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(5);
console.log(queues.queue, queues.front, queues.rear);
queues.dequeue();
console.log(queues.queue, queues.front, queues.rear);
queues.dequeue();
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(6);
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(7);
console.log(queues.queue, queues.front, queues.rear);
queues.enqueue(8);
console.log(queues.queue, queues.front, queues.rear);