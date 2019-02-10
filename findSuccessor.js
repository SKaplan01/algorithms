//CCI 4.6 find the "next" node in a BST--the in-order successor--of
//a given node. Assume each node has a link to its parent.

//BST node with parent
class NodeBinaryTree {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

//making BST to test
let root = new NodeBinaryTree(7);
root.left = new NodeBinaryTree(5);
root.left.parent = root;
root.left.left = new NodeBinaryTree(2);
root.left.left.parent = root.left;
root.left.right = new NodeBinaryTree(6);
root.left.right.parent = root.left;
root.right = new NodeBinaryTree(11);
root.right.parent = root;
root.right.left = new NodeBinaryTree(8);
root.right.left.parent = root.right;
root.right.left.right = new NodeBinaryTree(10);
root.right.left.right.parent = root.right.left;

function findNode(root, target) {
  if (!root) return null;
  if (root.val === target) {
    return root;
  } else if (root.val > target) {
    return findNode(root.left, target);
  } else {
    return findNode(root.right, target);
  }
}

function findLeftLeaf(node) {
  let curr = node;
  while (node.left) {
    curr = node.left;
  }
  return curr;
}

function findGreaterParent(node) {
  let curr = node.parent;
  while (curr && curr.val < node.val) {
    curr = curr.parent;
  }
  return curr;
}

function findSuccessor(root, val) {
  let node = findNode(root, val);
  if (node.right) {
    return findLeftLeaf(node.right);
  } else {
    return findGreaterParent(node);
  }
}

console.log(findSuccessor(root, 11));

//O(N) time bc must check all nodes (to find)
//if node already found, then O(Log N) bc at most must check 1 complete branch (to depth)
//O(1) space
