

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  addFront(node) {
    if (!(node instanceof Node)) {
      node = new Node(node);
    }

    node.next = this.head;

    this.head = node;

    return this;
  }

  front() {
    return this.isEmpty() ? null : this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    }

    this.head = this.head.next;

    return this;
  }

  display() {
    let current = this.head;

    while (current) {
      console.log(current.value);

      current = current.next;
    }

    return this;
  }
}

const node = new Node(23);
const list = new List();

console.log(list.isEmpty());
console.log(list.front());

list.addFront(node).addFront(234).addFront(23432).addFront(new Node('cats'));
console.log(node)
console.log(list)
console.log(list.front());
console.log(list.isEmpty());
list.display();
list.removeFront();
console.log(list)
