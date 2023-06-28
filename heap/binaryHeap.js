// the parent element is always greater than the child element
// the left node is always filled first
// insertion O(log n)
//deletion O(log n)

class BinaryHeap {
  constructor() {
    this.store = [];
  }

  insert(value) {
    this.store.push(value);
    if (this.store.length === 1) return this.store;
    this.bubbleUp();
    return this.store;
  }

  bubbleUp() {
    // we get the position of the last element
    let position = this.store.length - 1;
    //look for parent index
    let parent = Math.floor((position - 1) / 2);
    while (this.store[position] > this.store[parent]) {
      this.swap(position, parent);
      position = parent;
      parent = Math.floor((position - 1) / 2);
    }
  }

  extractMax() {
    this.swap(0, this.store.length - 1);
    this.store.pop();
    this.bubbleDown();
    return this.store;
  }

  bubbleDown() {
    // we check its child elements
    let parent = 0;
    let child = Math.floor((parent * 2) + 1);
    let child2 = Math.floor((parent * 2) + 2);

    while (true) {
      if (this.store[child2] > this.store[child]) {
        child = child2;
      }
      if (this.store[parent] < this.store[child]) {
        this.swap(parent, child);
        parent = child;
      } else {
        return;
      }
      child = Math.floor((parent * 2) + 1);
      child2 = Math.floor((parent * 2) + 2);
    }

  }

  swap(ind1, ind2) {
    [this.store[ind1], this.store[ind2]] = [this.store[ind2], this.store[ind1]]
  }
}

const heap = new BinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
console.log(heap.insert(55));
// heap.insert(99)
// heap.insert(70)
// heap.insert(65)
// heap.insert(44)
// heap.insert(45)
// heap.insert(40)
// heap.insert(53)
// heap.insert(100)
// heap.insert(15)
// heap.insert(58)
console.log(heap.extractMax());