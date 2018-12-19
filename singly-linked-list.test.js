const SinglyLinkedList = require("./singly-linked-list")

describe("push", function(){
  it('inserts_a_node_at_the_end_of_the_list_and_increments_the_length_of_the_list', function () {
    var singlyLinkedList = new SinglyLinkedList()
  
    singlyLinkedList.append(5)
    expect(singlyLinkedList.length).toBe(1)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.tail.val).toBe(5)
    singlyLinkedList.append(10)
    expect(singlyLinkedList.length).toBe(2)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.val).toBe(10)
    expect(singlyLinkedList.tail.val).toBe(10)
    singlyLinkedList.append(15)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.next.val).toBe(15)
    expect(singlyLinkedList.tail.val).toBe(15)
  });
})

describe('pop', function () {
  it('pop_removes_a_node_at_the_end_of_the_list_and_decrements_the_length_of_the_list', function () {
    var singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.append(5).append(10).append(15).append(20)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.pop()).toBe(20)
    expect(singlyLinkedList.tail.val).toBe(15)
    expect(singlyLinkedList.length).toBe(3)
  });

  it('inserts_a_node_at_the_end_of_the_list_and_increments_the_length_of_the_list', function () {
    var singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.append(5)
    expect(singlyLinkedList.length).toBe(1)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.tail.val).toBe(5)
    singlyLinkedList.append(10)
    expect(singlyLinkedList.length).toBe(2)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.val).toBe(10)
    expect(singlyLinkedList.tail.val).toBe(10)
    singlyLinkedList.append(15)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.next.val).toBe(15)
    expect(singlyLinkedList.tail.val).toBe(15)
  });

  it('pop_removes_a_node_at_the_end_of_the_list_and_decrements_the_length_of_the_list', function () {
    var singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.append(5).append(10).append(15).append(20)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.pop()).toBe(20)
    expect(singlyLinkedList.tail.val).toBe(15)
    expect(singlyLinkedList.length).toBe(3)
  });

  it('returns_undefined_if_there_are_no_nodes_to_remove', function () {
    var singlyLinkedList = new SinglyLinkedList()

    expect(singlyLinkedList.pop()).toBe(undefined)
    expect(singlyLinkedList.length).toBe(0)
  });
});

describe('setAt', function () {
  it('finds_a_node_and_replaces_its_value_or_returns_undefined_if_the_node_is_not_found', function () {
    var singlyLinkedList = new SinglyLinkedList()

    singlyLinkedList.append(5).append(10).append(15).append(20)
    expect(singlyLinkedList.setAt(0, 10)).toBe(true)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.val).toBe(10)
    expect(singlyLinkedList.setAt(10, 10)).toBe(false)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.val).toBe(10)
    expect(singlyLinkedList.setAt(2, 100)).toBe(true)
    expect(singlyLinkedList.length).toBe(4)
    expect(singlyLinkedList.head.next.next.val).toBe(100)
  });
});

describe('insertAt', function () {
  it('insert_inserts_a_node_and_correct_adjusts_the_next_properties_of_other_nodes', function () {
    var singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.append(5).append(10).append(15).append(20)
    expect(singlyLinkedList.insertAt(2, 12)).toBe(true)
    expect(singlyLinkedList.insertAt(100, 12)).toBe(false)
    expect(singlyLinkedList.length).toBe(5)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.val).toBe(10)
    expect(singlyLinkedList.head.next.next.val).toBe(12)
    expect(singlyLinkedList.head.next.next.next.val).toBe(15)
    expect(singlyLinkedList.head.next.next.next.next.val).toBe(20)
    expect(singlyLinkedList.insertAt(5, 25)).toBe(true)
    expect(singlyLinkedList.head.next.next.next.next.next.val).toBe(25)
    expect(singlyLinkedList.tail.val).toBe(25)
  });
});

// describe('rotate', function () {
//   it('works_for_positive_integers', function () {
//     var singlyLinkedList = new SinglyLinkedList()
//     singlyLinkedList.append(5).append(10).append(15).append(20).append(25);

//     singlyLinkedList.rotate(3);
//     expect(singlyLinkedList.head.val).toBe(20)
//     expect(singlyLinkedList.head.next.val).toBe(25)
//     expect(singlyLinkedList.head.next.next.val).toBe(5)
//     expect(singlyLinkedList.head.next.next.next.val).toBe(10)
//     expect(singlyLinkedList.head.next.next.next.next.val).toBe(15)
//     expect(singlyLinkedList.tail.val).toBe(15)
//     expect(singlyLinkedList.tail.next).toBe(null)
//   });
//   it('works_for_negative_numbers', function () {
//     var singlyLinkedList = new SinglyLinkedList()
//     singlyLinkedList.append(5).append(10).append(15).append(20).append(25);
//     singlyLinkedList.head; // 5
//     singlyLinkedList.tail; // 25;

//     singlyLinkedList.rotate(-1);
//     expect(singlyLinkedList.head.val).toBe(25)
//     expect(singlyLinkedList.head.next.val).toBe(5)
//     expect(singlyLinkedList.head.next.next.val).toBe(10)
//     expect(singlyLinkedList.head.next.next.next.val).toBe(15)
//     expect(singlyLinkedList.head.next.next.next.next.val).toBe(20)
//     expect(singlyLinkedList.tail.val).toBe(20)
//     expect(singlyLinkedList.tail.next).toBe(null)
//   });
//   it('works_for_large_numbers', function () {
//     var singlyLinkedList = new SinglyLinkedList()
//     singlyLinkedList.append(5).append(10).append(15).append(20).append(25);
//     singlyLinkedList.head; // 5
//     singlyLinkedList.tail; // 25;

//     singlyLinkedList.rotate(1000);
//     expect(singlyLinkedList.head.val).toBe(5)
//     expect(singlyLinkedList.head.next.val).toBe(10)
//     expect(singlyLinkedList.head.next.next.val).toBe(15)
//     expect(singlyLinkedList.head.next.next.next.val).toBe(20)
//     expect(singlyLinkedList.head.next.next.next.next.val).toBe(25)
//     expect(singlyLinkedList.tail.val).toBe(25)
//     expect(singlyLinkedList.tail.next).toBe(null)
//   });
// });

describe('remove', function () {
  it('remove_contains_a_root_that_is_null', function () {
    var singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.append(5).append(10).append(15).append(20)
    expect(singlyLinkedList.removeAt(2)).toBe(15)
    expect(singlyLinkedList.removeAt(100)).toBe(undefined)
    expect(singlyLinkedList.length).toBe(3)
    expect(singlyLinkedList.head.val).toBe(5)
    expect(singlyLinkedList.head.next.val).toBe(10)
    expect(singlyLinkedList.head.next.next.val).toBe(20)
  });
});
