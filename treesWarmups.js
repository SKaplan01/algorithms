const { Queue } = require('./Queue');

//making a tree

class Tree {
  constructor(rootNode) {
    this.root = rootNode;
  }
}

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = [];
  }

  find(val) {
    let stack = [];
    stack.push(this);
    while (stack.length) {
      let currentNode = stack.pop();
      if (currentNode.val === val) return currentNode;
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
    return 'Not Found';
  }

  append(val) {
    this.children.push(new Node(val));
  }
}

// let rootInt = new Node(1);

// let ints = new Tree(rootInt);

// rootInt.children.push(new Node(2));
// rootInt.children.push(new Node(3));
// rootInt.children[0].children.push(new Node(4));
// rootInt.children[0].children.push(new Node(5));
// rootInt.children[0].children.push(new Node(6));

//check find
// console.log(ints.root.find(6));

//append to leaf...
// ints.root.find(6).append(8);
// console.log(ints.root.find(6));

//SUM
//sums all the values in an n-ary tree of integers

function sumValues(tree) {
  let sum = 0;
  let stack = [];
  stack.push(tree.root);
  while (stack.length) {
    let currentNode = stack.pop();
    sum += currentNode.val;
    for (let i = 0; i < currentNode.children.length; i++) {
      stack.push(currentNode.children[i]);
    }
  }
  return sum;
}

// console.log(sumValues(ints));

//COUNTEVENS
//returns a count of all the even integers in an n-ary tree of integers

function countEvens(tree) {
  let count = 0;
  let stack = [];
  stack.push(tree.root);
  while (stack.length) {
    let current = stack.pop();
    if (current.val % 2 === 0) {
      count++;
    }
    for (let i = 0; i < current.children.length; i++) {
      stack.push(current.children[i]);
    }
  }
  return count;
}

// console.log(countEvens(ints));

//need a QUEUE that is a linked list

class NodeBinaryTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  // NOT forBinaryTree, fix
  // find(val) {
  //   let stack = [];
  //   stack.push(this);
  //   while (stack.length) {
  //     let currentNode = stack.pop();
  //     if (currentNode.val === val) return currentNode;
  //     for (let i = 0; i < currentNode.children.length; i++) {
  //       stack.push(currentNode.children[i]);
  //     }
  //   }
  //   return 'Not Found';
  // }

  appendLeft(val) {
    this.left = new NodeBinaryTree(val);
  }

  appendRight(val) {
    this.right = new NodeBinaryTree(val);
  }
}

// let node1 = new NodeBinaryTree(1);
// let binaryInts = new Tree(node1);
// binaryInts.root.appendLeft(2);
// binaryInts.root.appendRight(3);
// binaryInts.root.right.appendLeft(6);
// binaryInts.root.left.appendLeft(4);
// binaryInts.root.left.appendRight(5);
// binaryInts.root.left.left.appendRight(7);
// binaryInts.root.left.left.appendRight(8);

// console.log(binaryInts);

//MINDEPTH
//given a binaryTree, find its minimum depth
function minDepth(tree) {
  let queue = new Queue();
  let depth = 0;
  if (tree.root) {
    queue.enqueue([tree.root]);
  } else {
    return depth;
  }
  while (!queue.isEmpty()) {
    depth++;
    let currentLevelNodes = queue.dequeue().val;
    let nextLevelNodes = [];
    for (let i = 0; i < currentLevelNodes.length; i++) {
      if (!currentLevelNodes[i].left && !currentLevelNodes[i].right) {
        return depth;
      }
      if (currentLevelNodes[i].left) {
        nextLevelNodes.push(currentLevelNodes[i].left);
      }
      if (currentLevelNodes[i].right) {
        nextLevelNodes.push(currentLevelNodes[i].right);
      }
    }
    if (nextLevelNodes.length > 0) {
      queue.enqueue(nextLevelNodes);
    }
  }
  return depth;
}

// console.log(minDepth(binaryInts));

//Joel's way: store the node and it's depth [node, 2] in queue

// let node1 = new NodeBinaryTree(1);
// let binaryInts = new Tree(node1);
// binaryInts.root.appendLeft(2);
// binaryInts.root.appendRight(3);
// binaryInts.root.right.appendLeft(6);
// binaryInts.root.left.appendLeft(4);
// binaryInts.root.left.appendRight(5);

// console.log(binaryInts);

//COUSINS in BINARY TREE

function areCousins(bTree, node1, node2) {
  let queue = new Queue();
  queue.enqueue([bTree.root, 1, null]);
  let node1data = {};
  let node2data = {};
  let found = 0;
  while (!queue.isEmpty()) {
    if (found === 2) break;
    let current = queue.dequeue().val;
    if (current[0].val === node1) {
      node1data.depth = current[1];
      node1data.parent = current[2];
      found++;
    }
    if (current[0].val === node2) {
      node2data.depth = current[1];
      node2data.parent = current[2];
      found++;
    }
    if (current[0].left) {
      queue.enqueue([current[0].left, current[1] + 1, current[0].val]);
    }
    if (current[0].right) {
      queue.enqueue([current[0].right, current[1] + 1, current[0].val]);
    }
  }
  return (
    node1data.depth === node2data.depth && node1data.parent !== node2data.parent
  );
}

// console.log(areCousins(binaryInts, 4, 6));

let node1 = new NodeBinaryTree(2);
let binaryInts = new Tree(node1);
binaryInts.root.appendLeft(4);
binaryInts.root.appendRight(8);
binaryInts.root.right.appendLeft(1);
binaryInts.root.left.appendLeft(3);
binaryInts.root.left.appendRight(7);

function findNodeGreaterX(bTree, x) {
  let nextLargest;
  return _traverseTree(bTree.root, x, nextLargest);

  function _traverseTree(node, x, nextLargest) {
    if (node.val > x) {
      if (!nextLargest) {
        nextLargest = node.val;
      } else if (node.val < nextLargest) {
        nextLargest = node.val;
      }
    }
    if (node.left) {
      nextLargest = _traverseTree(node.left, x, nextLargest);
    }
    if (node.right) {
      nextLargest = _traverseTree(node.right, x, nextLargest);
    }
    return nextLargest || null;
  }
}

// console.log(findNodeGreaterX(binaryInts, 2));

let node2 = new NodeBinaryTree(1);
let binaryInts2 = new Tree(node2);
binaryInts2.root.appendLeft(3);
binaryInts2.root.appendRight(5);
binaryInts2.root.right.appendLeft(4);
binaryInts2.root.right.appendRight(-1);
binaryInts2.root.left.appendLeft(2);
binaryInts2.root.left.appendRight(-2);

//use DFS to find a value in binary tree
//return -1 if val does not exist
function findNodeInBinaryTree(node, val, result = -1) {
  if (node.val === val) {
    result = node;
    return result;
  }
  if (node.left) {
    result = findNodeInBinaryTree(node.left, val, result);
    if (result !== -1) return result;
  }
  if (node.right) {
    result = findNodeInBinaryTree(node.right, val, result);
    if (result !== -1) return result;
  }
  return -1;
}

// console.log(findNodeInBinaryTree(node2, -1));

module.exports = {
  NodeBinaryTree
};
