// insertion O(logn)
//searching O(logn)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentvalue = this.root;
      while (true) {
        if (value === currentvalue.value) return undefined;
        if (value < currentvalue.value) {
          if (currentvalue.left === null) {
            currentvalue.left = newNode;
            return this;
          } else {
            currentvalue = currentvalue.left;
          }
        } else if (value > currentvalue.value) {
          if (currentvalue.right === null) {
            currentvalue.right = newNode;
            return this;
          } else {
            currentvalue = currentvalue.right;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root, found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  breathFirstSeach() {
    if (!this.root) return undefined;
    let queue = [], returnArray = [];
    let leftVal, rightVal;
    queue.push(this.root);
    while (queue.length !== 0) {
      leftVal = queue[0].left;
      rightVal = queue[0].right;
      if (leftVal) queue.push(leftVal);
      if (rightVal) queue.push(rightVal);
      returnArray.push(queue[0].value);
      queue.shift();
    }
    return returnArray;
  }

  DFSPreOrder() {
    if (!this.root) return undefined;
    let visitedNodes = [];
    let current = this.root;
    function traverse(node) {
      visitedNodes.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedNodes;
  }

  DFSPostOrder() {
    if (!this.root) return undefined;
    let visitedNodes = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.value);
    }
    traverse(current);
    return visitedNodes;
  }

  DFSInOrder() {
    if (!this.root) return undefined;
    let visitedNodes = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedNodes;
  }
}
//    10
//  5    13
// 2 7 11 16
let tree = new Bst();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(6);
// tree.root.left.right = new Node(9);
// console.log(tree);
tree.insert(10);
tree.insert(5)
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(7);
tree.insert(16);
// console.log(tree.find(110));
//console.log(tree.breathFirstSeach());
//console.log(tree.DFSPreOrder());
//console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());