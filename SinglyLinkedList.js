class Node {
  constructor(data, next = null) {
    (this.val = data), (this.next = next);
  }
}

//a class for creating a singly linked list
//takes any iterable and appends nodes with data from each item to a new linkedList
class SinglyLinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        this.append(data[i]);
      }
    }
  }

  //Appends a new node with the data to end of list.
  //Returns updated list
  append(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentTail = this.tail;
      currentTail.next = newNode;
    }
    this.tail = newNode;
    return this;
  }

  //Retrieve node at index position idx.
  //returns null if idx is out of range
  getAt(idx) {
    let count = 0;
    let current = this.head;
    while (count < idx && current !== null) {
      current = current.next;
      count++;
    }
    return current;
  }

  //adds a new node whose data=data onto the head
  unshift(data) {
    let next = this.head;
    this.head = new Node(data);
    this.head.next = next;
    if (this.tail === null) {
      this.tail = this.head;
    }
    return this;
  }

  //removes and returns the head node
  shift() {
    let temp = this.head;
    if (temp === null) return 'Error: empty list';
    this.head = temp.next;
    if (this.tail === temp) {
      this.tail = null;
    }
    return temp;
  }

  //removes and returns the tail node
  //returns null if list is empty
  pop() {
    let tail = this.tail;
    let current = this.head;
    while (current !== tail && current.next !== tail) {
      current = current.next;
    }
    if (current === tail) {
      //handles pop from 1 item --> empty
      this.tail = null;
      this.head = null;
    } else {
      current.next = null;
      this.tail = current;
    }
    return tail ? tail.val : undefined;
  }

  //inserts a new node at position idx
  //returns true if insert successful, false if out of range
  insertAt(idx, data) {
    let inserted = false;
    if (idx === 0) {
      this.unshift(data);
      return true;
    } else {
      let previous = this.getAt(idx - 1);
      if (previous === null) {
        return false;
      } else {
        let newNode = new Node(data, previous.next);
        previous.next = newNode;
        if (previous === this.tail) this.tail = newNode;
        return true;
      }
    }
  }

  //remove & return node at position idx
  removeAt(idx) {
    let nodeToRemove;
    if (idx === 0) {
      nodeToRemove = this.shift();
    } else {
      let previous = this.getAt(idx - 1);
      if (previous === null) return 'Error: out of range';
      nodeToRemove = previous.next;
      if (nodeToRemove === null) return 'Error: out of range';
      let newNext = nodeToRemove.next;
      previous.next = newNext;
      //handles removing tail
      if (nodeToRemove === this.tail) {
        this.tail = previous;
      }
    }
    return nodeToRemove.val;
  }

  //flips the order of a singly linked list
  reverse() {
    let current = this.head;
    let next = current.next;
    this.tail = current;
    current.next = null;
    while (next !== null) {
      let temp = next.next;
      next.next = current;
      current = next;
      next = temp;
    }
    this.head = current;
    return this;
  }
}

module.exports = {
  Node,
  SinglyLinkedList
};

// let arr = ['a', 'b', 'c'];
// let list = new SinglyLinkedList(arr);
// console.log(list);
// let reversed = list.reverse();
// console.log(reversed);
