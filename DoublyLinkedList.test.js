const { DoublyLinkedList } = require('./DoublyLinkedList');

describe('push', function() {
  it('inserts_a_node_at_the_end_of_the_list_and_increments_the_length_of_the_list', function() {
    var doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(5);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.tail.val).toBe(5);
    doublyLinkedList.append(10);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.head.next.val).toBe(10);
    expect(doublyLinkedList.tail.val).toBe(10);
    expect(doublyLinkedList.tail.previous.val).toBe(5);
    doublyLinkedList.append(15);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.val).toBe(5);
    expect(doublyLinkedList.head.next.next.val).toBe(15);
    expect(doublyLinkedList.tail.previous.val).toBe(10);
  });
});

describe('getAt', function() {
  it('gets_a_node_at_a_specific_index_and_returns_its_value', function() {
    var doublyLinkedList = new DoublyLinkedList();

    doublyLinkedList.append(5);
    doublyLinkedList.append(10);
    doublyLinkedList.append(15);
    expect(doublyLinkedList.getAt(0).val).toBe(5);
    expect(doublyLinkedList.getAt(1).val).toBe(10);
    expect(doublyLinkedList.getAt(2).val).toBe(15);
    expect(doublyLinkedList.getAt(3)).toBe(null);
  });
});

describe('unshift', function() {
  it('inserts_a_node_at_the_head_of_the_list_and_moves_head_node', function() {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.unshift(3);
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe(3);
    expect(doublyLinkedList.tail.val).toBe(3);
    doublyLinkedList.unshift(2);
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.head.val).toBe(2);
    expect(doublyLinkedList.tail.val).toBe(3);
    doublyLinkedList.unshift(1);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.val).toBe(1);
    expect(doublyLinkedList.tail.val).toBe(3);
  });
});

describe('shift', function() {
  it('removes_a_node_from_the_head_of_the_list_and_returns_the_removed_node', function() {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(2);
    expect(doublyLinkedList.head.val).toBe(2);
    expect(doublyLinkedList.tail.val).toBe(3);
    doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe(3);
    expect(doublyLinkedList.tail.val).toBe(3);
    var removedNode = doublyLinkedList.shift();
    expect(removedNode.val).toBe(3);
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);
    var error = doublyLinkedList.shift();
    expect(error).toBe('Error: empty list');
  });
});

describe('pop', function() {
  it('removes_a_node_from_the_tail_of_the_list_and_returns_the_removed_node', function() {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.pop();
    expect(doublyLinkedList.length).toBe(1);
    expect(doublyLinkedList.head.val).toBe(1);
    expect(doublyLinkedList.tail.val).toBe(1);
    doublyLinkedList.pop();
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);
    var error = doublyLinkedList.pop();
    expect(error).toBe('Error: cannot pop from empty list');
  });
});

describe('insertAt', function() {
  it('inserts_a_node_at_idx_and_returns_the_new_length', function() {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    var newLength = doublyLinkedList.insertAt(1, 10);
    expect(newLength).toBe(4);
    expect(doublyLinkedList.head.val).toBe(1);
    expect(doublyLinkedList.head.next.val).toBe(10);
    expect(doublyLinkedList.tail.val).toBe(3);
    doublyLinkedList.insertAt(0, 5);
    expect(doublyLinkedList.head.val).toBe(5);
    doublyLinkedList.insertAt(5, 15);
    expect(doublyLinkedList.tail.val).toBe(15);
    let error = doublyLinkedList.insertAt(7, 20);
    expect(error).toBe('Error: out of range');
  });
});

describe('removeAt', function() {
  it('removes_a_node_at_idx_and_returns_the_removed_node', function() {
    var doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.append(4);
    var removedNode = doublyLinkedList.removeAt(1);
    expect(removedNode.val).toBe(2);
    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head.val).toBe(1);
    expect(doublyLinkedList.head.next.val).toBe(3);
    expect(doublyLinkedList.getAt(1).val).toBe(3);
    expect(doublyLinkedList.getAt(1).previous.val).toBe(1);
    doublyLinkedList.removeAt(2);
    expect(doublyLinkedList.tail.val).toBe(3);
    expect(doublyLinkedList.tail.previous.val).toBe(1);
    expect(doublyLinkedList.head.next.val).toBe(3);
    let error = doublyLinkedList.removeAt(2);
    expect(error).toBe('Error: out of range');
  });
});
