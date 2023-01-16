import { Node } from "./node";

class LinkedList {
  public head: Node | null;
  public size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  Print() {
    var current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  add(data) {
    const node = new Node(data);
    var current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  appendFirst(data) {
    const node = new Node(data);
    if (this.head == null) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeFirst() {
    if (!this.head) return;
    else if (!this.head.next) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  removeLast() {
    if (!this.head) return;
    else if (!this.head.next) {
      this.head = null;
      return;
    }
    let cur = this.head;
    while (cur.next?.next) {
      cur = cur.next;
    }
    cur.next = null;
  }

  duplicateData(data) {
    let cur = this.head;
    while (cur != null) {
      if (cur.data === data) {
        let node = new Node(data);
        node.next = cur.next;
        cur.next = node;
        cur = node.next;
      } else {
        cur = cur.next;
      }
    }
  }

  removeData(data) {
    if (this.head != null) {
      let cur: Node | null = this.head;
      let prev = this.head;

      while (cur != null) {
        if (cur.data == data) {
          if (this.head != cur) {
            prev.next = cur.next;
          } else {
            this.head = cur.next;
          }
        } else {
          prev = cur;
        }
        cur = cur.next;
      }
    }
  }
}

export default LinkedList;
