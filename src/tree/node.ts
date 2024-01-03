export class binaryNode<T> {
	value: T;
	left: binaryNode<T> | null;
	right: binaryNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	setLeft(value: T): void {
		this.left = new binaryNode<T>(value);
	}
	setRight(value: T): void {
		this.right = new binaryNode<T>(value);
	}
	setValue(value: T): void {
		this.value = value;
	}
	getLeft(): binaryNode<T> | null {
		return this.left;
	}
	getRight(): binaryNode<T> | null {
		return this.right;
	}
	getValue(): T {
		return this.value;
	}

	show(prefix: string, isLeft: boolean): void {
		console.log(prefix + (isLeft ? '├── ' : '└── ') + this.value);
		if (this.left) {
			this.left.show(prefix + '│   ', true);
		}
		if (this.right) {
			this.right.show(prefix + '│   ', false);
		}
		if (!this.right) console.log(prefix + '│   ' + '├── null');
		if (!this.left) console.log(prefix + '│   ' + '└── null');
	}
}
