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
