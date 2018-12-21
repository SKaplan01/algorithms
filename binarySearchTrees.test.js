const { BinarySearchTree, NodeBinarySearch } = require('./binarySearchTrees');

describe('insert', function() {
  it('inserts_a_node_at_the_correct_position', function() {
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    expect(binarySearchTree.root.val).toEqual(15);
    expect(binarySearchTree.root.right.val).toEqual(20);
    expect(binarySearchTree.root.left.right.val).toEqual(12);
  });
  it('inserts_a_node_at_the_root_if_there_is_nothing_there', function() {
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(15);
    expect(binarySearchTree.root.val).toEqual(15);
    expect(binarySearchTree.root.left).toBe(null);
    expect(binarySearchTree.root.right).toBe(null);
  });
});

describe('insertRecursively', function() {
  it('inserts_a_node_at_the_correct_position_using_recursion', function() {
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertRecursively(new NodeBinarySearch(15));
    binarySearchTree.insertRecursively(new NodeBinarySearch(20));
    binarySearchTree.insertRecursively(new NodeBinarySearch(10));
    binarySearchTree.insertRecursively(new NodeBinarySearch(12));
    expect(binarySearchTree.root.val).toEqual(15);
    expect(binarySearchTree.root.right.val).toEqual(20);
    expect(binarySearchTree.root.left.right.val).toEqual(12);
  });
  it('inserts_a_node_at_the_root_if_there_is_nothing_there', function() {
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertRecursively(new NodeBinarySearch(15));
    expect(binarySearchTree.root.val).toEqual(15);
    expect(binarySearchTree.root.left).toBe(null);
    expect(binarySearchTree.root.right).toBe(null);
  });
});

describe('findIteratively', function() {
  it('finds_a_node_in_a_binary_search_tree_using_iteration', function() {
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertRecursively(new NodeBinarySearch(15));
    binarySearchTree.insertRecursively(new NodeBinarySearch(20));
    binarySearchTree.insertRecursively(new NodeBinarySearch(10));
    binarySearchTree.insertRecursively(new NodeBinarySearch(12));
    let result = binarySearchTree.findIteratively(12);
    expect(result.val).toEqual(12);
    let result2 = binarySearchTree.findIteratively(20);
    expect(result2.val).toEqual(20);
  });
  it('returns_undefined if value is not found', function() {
    var binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertRecursively(new NodeBinarySearch(15));
    let result3 = binarySearchTree.findIteratively(12);
    expect(result3).toBe(undefined);
  });
});
