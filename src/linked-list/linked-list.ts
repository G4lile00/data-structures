import { doubleNode, simpleNode } from './node';

export class SimpleLinkedList<T> {
	public head: simpleNode<T> | null;
	public tail: simpleNode<T> | null;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	public append(value: T): void {
		const newNode = new simpleNode(value);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}

		if (this.tail === null) {
			throw new Error('Tail is null');
		}

		this.tail.next = newNode;
    this.tail = newNode;
		this.length++;
	}

	public prepend(value: T): void {
		const newNode = new simpleNode(value);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}

		if (this.tail === null) {
			throw new Error('Tail is null');
		}

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}
	public find(value: T): simpleNode<T> | null {
		if (this.head === null) {
			return null;
		}
		return this.findNode(this.head, value);
	}
	public findNode(node: simpleNode<T>, value: T): simpleNode<T> | null {
		if (node.value === value) {
			return node;
		}
		if (node.next === null) {
			return null;
		}
		return this.findNode(node.next, value);
	}
	public remove(value: T): boolean {
		if (this.head === null) {
			return false;
		}
    if(this.head?.value === value && this.tail?.value === value){
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

		return this.removeNode(this.head, value);
	}
	private removeNode(node: simpleNode<T>, value: T): boolean {
		if (node.next === null) {
			return false;
		}
		if (node.next.value === value) {
			node.next = node.next.next;
			this.length--;
			return true;
		}
		this.removeNode(node.next, value);
		return false;
	}
	public show(): void {
		console.log(`Simple Linked List: ${this.length} nodes`);
		if (this.head === null) {
			console.log('Empty list');
			return;
		}
		this.showNode(this.head);
	}
	private showNode(node: simpleNode<T>): void {
		process.stdout.write(`${node.value} -> `);
		if (node.next === null) {
			process.stdout.write('null');
			return;
		}
		this.showNode(node.next);
	}
}
export class DoubleLinkedList<T>{
  public head: doubleNode<T> | null;
  public tail: doubleNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  public append(value: T): void {
    const newNode = new doubleNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    if (this.tail === null) {
      throw new Error('Tail is null');
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  public prepend(value: T): void {
    const newNode = new doubleNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    if (this.tail === null) {
      throw new Error('Tail is null');
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  public find(value: T): doubleNode<T> | null {
    if (this.head === null) {
      return null;
    }
    return this.findNode(this.head, value);
  }
  private findNode(node: doubleNode<T>, value: T): doubleNode<T> | null {
    if (node.value === value) {
      return node;
    }
    if (node.next === null) {
      return null;
    }
    return this.findNode(node.next, value);
  }
  public remove(value: T): boolean {
    if (this.head === null) {
      return false;
    }
    if (this.head?.value === value && this.tail?.value === value) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

    return this.removeNode(this.head, value);
  }
  private removeNode(node: doubleNode<T>, value: T): boolean {
    if (node.next === null) {
      return false;
    }
    if (node.value === value) {
      node.prev?.setNextNode(node.next);
      this.length--;
      return true;
    }
    this.removeNode(node.next, value);
    return false;
  }
  public show(): void {
    console.log(`Double Linked List: ${this.length} nodes`);
    if (this.head === null) {
      console.log('Empty list');
      return;
    }
    this.showNode(this.head);
  }
  private showNode(node: doubleNode<T>): void {
    process.stdout.write(`${node.value} <-> `);
    if (node.next === null) {
      process.stdout.write('null');
      return;
    }
    this.showNode(node.next);
  }

}
