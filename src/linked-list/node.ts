export class simpleNode<T> {
	public value: T;
	public next: simpleNode<T> | null;

	constructor(value: T, next: simpleNode<T> | null = null) {
		this.value = value;
		this.next = next;
	}

	getNextNode(): simpleNode<T> | null {
		return this.next;
	}

	setNextNode(node: simpleNode<T> | null): void {
		this.next = node;
	}

	getValue(): T {
		return this.value;
	}

	setValue(value: T): void {
		this.value = value;
	}

	show(): void {
		console.log(this.value);
	}
}

export class doubleNode<T> {
	public value: T;
	public prev: doubleNode<T> | null;
	public next: doubleNode<T> | null;

	constructor(
		value: T,
		next: doubleNode<T> | null = null,
		prev: doubleNode<T> | null = null,
	) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}

	getNextNode(): simpleNode<T> | null {
		return this.next;
	}

	getPrevNode(): simpleNode<T> | null {
		return this.prev;
	}

	setNextNode(node: doubleNode<T> | null): void {
		this.next = node;
	}
	setPrevNode(node: doubleNode<T> | null): void {
		this.prev = node;
	}

	getValue(): T {
		return this.value;
	}

	setValue(value: T): void {
		this.value = value;
	}

	show(): void {
		console.log(this.value);
	}
}
