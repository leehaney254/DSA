class Node {
  constructor(value, priority) {
    this.val = value;
    this.priority = priority;
  }
}

//uses a min binary heap
class PriorityQueueu {
  constructor() {
    this.store = [];
  }

  Enqueue(value, priority) {
    const node = new Node(value, priority);
    this.store.push(node);
    if (this.store.length === 1) return this.store;
    this.bubbleup();
    return this.store;
  }

  bubbleup() {
    let childidx = this.store.length - 1;
    let parentidx = Math.floor((childidx - 1) / 2);
    let parentNode = this.store[parentidx];
    let childNode = this.store[childidx];
    while (true) {
      if (parentNode.priority > childNode.priority) {
        this.swap(childidx, parentidx);
      } else if (parentNode.priority <= childNode.priority) {
        return;
      }
      childidx = parentidx;
      parentidx = Math.floor((childidx - 1) / 2);
      childNode = this.store[childidx];
      parentNode = this.store[parentidx];
    }
  }

  Dequeu() {
    this.swap(0, this.store.length - 1);
    this.store.pop();
    this.bubbleDown();
    return this.store;
  }

  bubbleDown() {
    let parentidx = 0;
    let childidx = Math.floor((parentidx * 2) + 1);
    let child2idx = Math.floor((parentidx * 2) + 2);
    let parentNode = this.store[parentidx];
    let childNode = this.store[childidx];
    let child2Node = this.store[child2idx];

    while (true) {
      if (child2Node.priority < childNode.priority) {
        childNode = this.store[child2idx];
      }
      if (parentNode.priority > childNode.priority) {
        this.swap(childidx, parentidx);
        parentidx = childidx;
      } else {
        return;
      }
      childidx = Math.floor((parentidx * 2) + 1);
      child2idx = Math.floor((parentidx * 2) + 2);
      childNode = this.store[childidx];
      child2Node = this.store[child2idx];
    }
  }

  swap(ind1, ind2) {
    [this.store[ind1], this.store[ind2]] = [this.store[ind2], this.store[ind1]]
  }
}

const queue = new PriorityQueueu();
queue.Enqueue("Apply jobs", 1);
queue.Enqueue("Post on linkedIn", 2);
queue.Enqueue("Eat breakfast", 3);
queue.Enqueue("Catch up", 4);
queue.Enqueue("Rest", 5);
queue.Enqueue("Go to gym", 2);
console.log(queue.Enqueue("Work on project", 4));
console.log(queue.Dequeu());