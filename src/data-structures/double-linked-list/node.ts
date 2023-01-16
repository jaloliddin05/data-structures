export class Node {
  constructor(
    public data: any,
    public next: Node | null = null,
    public prev: Node | null = null
  ) {}
}
