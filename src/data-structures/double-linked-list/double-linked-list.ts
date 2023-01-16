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

  PrintBack() {
    let cur = this.tail;
    while (cur != null) {
      console.log(cur.data);
      cur = cur.prev;
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

  duplicateN(data) {
    let cur = this.head;
    if (this.head) {
      while (cur != null) {
        if (cur.data == data) {
          if (this.head != cur && cur.prev) {
            let node = new Node(data);
            cur.prev.next = node;
            node.prev = cur.prev;
            node.next = cur;
            cur.prev = node;
            if (cur == this.tail) {
              this.tail = cur;
            }
            cur = cur.next;
            this.size++;
          } else {
            let node = new Node(data);
            if (this.head.next) {
              node.prev = this.head;
              node.next = this.head.next;
              this.head.next.prev = node;
              this.head.next = node;
            } else {
              node.prev = this.head;
              this.head.next = node;
            }
            if (cur == this.tail) {
              this.tail = node;
            }
            cur = node.next;
            this.size++;
          }
        } else {
          cur = cur.next;
        }
      }
    }
  }
}

export default DoubleLinkedList;
