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
}

export default DoubleLinkedList;
