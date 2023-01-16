import { Node } from "./node";
class DoubleLinkedList {
  public head: Node | null;
  public tail: Node | null;
  public size: number;
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  print() {
    let cur = this.head;
    while (cur != null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  add(data) {
    let node = new Node(data);
    if (this.head == null) this.head = node;
    else {
      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      }
    }
    this.tail = node;
    this.size++;
  }

  AddFirst(data) {
    let node = new Node(data);
    node.next = this.head;
    if (this.size == 0) this.tail = node;
    else {
      if (this.head) {
        this.head.prev = node;
      }
    }
    this.head = node;
    this.size++;
  }
}

export default DoubleLinkedList;
