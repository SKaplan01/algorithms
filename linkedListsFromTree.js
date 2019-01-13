// Cracking the Coding Interview 4.3
// Given a binary tree, return a linked list of the nodes
// at each depth of the tree

const { NodeBinaryTree } = require('./treesWarmups');

//Setting up a tree to test
let node1 = new NodeBinaryTree(1);
node1.appendLeft(-1);
node1.appendRight(2);
node1.left.appendLeft(3);
node1.left.appendRight(-2);
node1.right.appendLeft(4);
node1.right.appendRight(7);

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class linkedList {
  constructor(root) {
    this.root = root;
  }

  appendNode(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let queue = [this.root];
    while (queue.length !== 0) {
      let curr = queue.shift();
      if (curr.next) {
        queue.push(curr.next);
      } else {
        curr.next = new Node(val);
      }
    }
    return this;
  }
}

function makeLinkedListsFromTree(rootNode) {
  let linkedLists = [];
  let queue = [rootNode];
  while (queue.length !== 0) {
    let currList = new linkedList();
    for (let i = 0; i < queue.length; i++) {
      currList.appendNode(queue[i]);
      if (i + 1 === queue.length) {
        queue[i].end = true;
      }
    }
    linkedLists.push(currList);

    let curr = queue.shift();
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }

    while (!curr.end) {
      curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  return linkedLists;
}

console.log(makeLinkedListsFromTree(node1));
let arrLinkedLists = makeLinkedListsFromTree(node1);
console.log(arrLinkedLists[2].root.next.next.next.val);
