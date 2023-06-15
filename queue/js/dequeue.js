// intput restricted dequeue(at the rear only)
// class Dequeue {
//   constructor() {
//     this.dequeue = [];
//     this.front = -1;
//     this.rear = 0;
//   }
//   //our length is equal to eight
//   insert(value) {
//     if (this.dequeue.length === 0) {
//       this.front += 1;
//     }
//     this.rear += 1;
//     this.dequeue.push(value);
//   };

//   removeRear() {
//     if (this.dequeue.length === 0) {
//       return undefined;
//     }
//     this.dequeue.pop();
//     this.rear--;
//     if (this.rear === this.front) {
//       this.front = -1;
//       this.rear = 0;
//     }
//   }

//   removeFront() {
//     if (this.dequeue.length === 0) {
//       return undefined;
//     }
//     this.dequeue.splice(this.front, 1, undefined);
//     this.front++;
//     if (this.front === this.rear) {
//       this.front = -1;
//       this.rear = 0;
//     }
//   }

//   peekFront() {
//     console.log(this.dequeue[this.front]);
//   }

//   peekRear() {
//     console.log(this.dequeue[this.rear]);
//   }
// }

// const dequeue = new Dequeue;
// dequeue.insert(5);
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.insert(6);
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.insert(7);
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.insert(8);
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.insert(9);
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.insert(10);
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeRear();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeRear();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeFront();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeFront();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeFront();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeRear();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
// dequeue.removeRear();
// console.log(dequeue.dequeue, dequeue.front, dequeue.rear);

// output restricted dequeue

class Dequeue {
  constructor() {
    this.dequeue = new Array(5);
    this.rear = 0;
    this.front = -1;
  }

  queueRear(value) {
    if (this.rear === 0) {
      this.front++;
      this.dequeue.splice(this.rear, 1, value);
      this.rear++;
    } else if (this.front + 1 != this.rear) {
      this.dequeue.splice(this.rear, 1, value);
      this.rear++;
    } else {
      return;
    }

  }

  queueFront(value) {
    if (this.front === -1) {
      this.front = 4;
      this.dequeue.splice(this.front, 1, value)
    } else if (this.front - 1 != this.rear) {
      this.front--;
      this.dequeue.splice(this.front, 1, value)
    } else {
      return
    }
  }

  dequeueRear() {
    if (this.rear === -1 && this.dequeue[0] === undefined) {
      this.rear = 0;
    } else {
      this.dequeue.splice(this.rear, 1, undefined);
      this.rear--;
    }
  }

}

const dequeue = new Dequeue;
dequeue.dequeue.fill(undefined)
dequeue.queueFront(5);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueRear(6);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueFront(7);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueFront(8);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueRear(9);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueRear(10);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueRear(10);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.queueFront(8);
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.dequeueRear();
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);
dequeue.dequeueRear();
console.log(dequeue.dequeue, dequeue.front, dequeue.rear);

