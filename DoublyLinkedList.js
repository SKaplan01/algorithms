class Node {
  constructor(data, next = null, previous = null) {
    this.val = data;
    this.next = next;
    this.previous = previous;
  }
}

//a class for creating a doubly linked list
//takes any iterable and appends nodes with data from each item to a new DoublyLinkedList
class DoublyLinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        this.append(data[i]);
        this.length++;
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
      newNode.previous = currentTail;
    }
    this.tail = newNode;
    this.length++;
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
  //returns the length of the updated list
  unshift(data) {
    let next = this.head;
    this.head = new Node(data);
    this.head.next = next;
    if (next) {
      next.previous = this.head;
    }
    if (this.tail === null) {
      //for adding to empty list
      this.tail = this.head;
    }
    this.length++;
    return this.length;
  }

  //removes and returns the head node
  shift() {
    let temp = this.head;
    if (temp === null) return 'Error: empty list';
    this.head = temp.next;

    //if there is still a head-node left, sets its previous to null
    if (this.head) {
      this.head.previous = null;
    }

    //if there's nothing left in the last, set tail to null
    if (this.tail === temp) {
      this.tail = null;
    }
    this.length--;
    return temp;
  }

  // removes and returns the tail node
  // returns null if list is empty
  pop() {
    if (this.length < 1) return 'Error: cannot pop from empty list';
    let tail = this.tail;
    this.tail = tail.previous;
    //handles pop from 1 item list --> empty
    if (!tail.previous) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.length--;
    return tail;
  }

  //inserts a new node at position idx and returns new length of list
  insertAt(idx, data) {
    if (idx === 0) {
      return this.unshift(data);
    } else {
      let previous = this.getAt(idx - 1);
      let next = this.getAt(idx);
      if (previous === null && previous !== this.head) {
        return 'Error: out of range';
      }
      let newNode = new Node(data, next, previous);
      if (previous === this.tail) {
        this.tail = newNode;
      } else {
        next.previous = newNode;
      }
      previous.next = newNode;
      newNode.previous = previous;
      this.length++;
      return this.length;
    }
  }

  //remove & return node at position idx
  removeAt(idx) {
    let nodeToRemove;
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else if (idx >= this.length) {
      return 'Error: out of range';
    } else {
      let previous = this.getAt(idx - 1);
      nodeToRemove = previous.next;
      let newNext = nodeToRemove.next;
      newNext.previous = previous;
      previous.next = newNext;
      this.length--;
    }
    return nodeToRemove;
  }
}

module.exports = {
  Node,
  DoublyLinkedList
};
