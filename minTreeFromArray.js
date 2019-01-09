//Cracking the Coding Interview: Trees 4.2

//Given a sorted array (increasing order) with unique integer elements,
//create a binary search Tree with minimal height

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  insertNode(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      _insertNode(val, this.root);
    }

    function _insertNode(val, node) {
      if (node.val < val) {
        if (!node.right) {
          node.right = new Node(val);
        } else {
          _insertNode(val, node.right);
        }
      } else {
        if (!node.left) {
          node.left = new Node(val);
        } else {
          _insertNode(val, node.left);
        }
      }
    }
  }
}

function createMinBinaryTree(array) {
  let tree = new BinaryTree();
  console.log(tree);
  addNodesFromArray(tree, array);
  return tree;

  function addNodesFromArray(tree, arr, low = 0, high = arr.length - 1) {
    if (low > high) return null;
    let mid = low + Math.floor((high - low) / 2);
    tree.insertNode(arr[mid]);
    addNodesFromArray(tree, arr, low, mid - 1);
    addNodesFromArray(tree, arr, mid + 1, high);
  }
}

// let tree = new BinaryTree();
// tree.insertNode(7);
// tree.insertNode(10);
let tree = createMinBinaryTree([1, 3, 8, 9, 10, 14]);
console.log(tree);
