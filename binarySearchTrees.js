const { Queue } = require('./Queue');

//class for creating a binary search tree

class NodeBinarySearch {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val) {
    if (!this.root) {
      this.root = new NodeBinarySearch(val);
      return this;
    }
    let queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let curr = queue.dequeue().val;
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = new NodeBinarySearch(val);
          return this;
        } else {
          queue.enqueue(curr.left);
        }
      }
      if (val > curr.val) {
        if (!curr.right) {
          curr.right = new NodeBinarySearch(val);
          return this;
        } else {
          queue.enqueue(curr.right);
        }
      }
    }
  }

  insertRecursively(node, root = this.root) {
    if (!root) {
      this.root = node;
      return this;
    }

    if (node.val < root.val) {
      if (!root.left) {
        root.left = node;
        return this;
      } else {
        this.insertRecursively(node, root.left);
      }
    }

    if (node.val > root.val) {
      if (!root.right) {
        root.right = node;
        return this;
      } else {
        this.insertRecursively(node, root.right);
      }
    }
  }

  findIteratively(target) {
    if (!this.root) return;
    let queue = [this.root];
    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.val === target) {
        console.log(current);
        return current;
      }
      if (target < current.val) {
        if (!current.left) return;
        queue.push(current.left);
      }
      if (target > current.val) {
        if (!current.right) return;
        queue.push(current.right);
      }
    }
    return;
  }
}

module.exports = { BinarySearchTree, NodeBinarySearch };
