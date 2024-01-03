import { binaryNode } from './node';

export class binaryTree<T> {
	root: binaryNode<T> | null;
	constructor() {
		this.root = null;
	}
	setRoot(value: T): void {
		this.root = new binaryNode<T>(value);
	}
	getRoot(): binaryNode<T> | null {
		return this.root;
	}
	showTree(): void {
		console.log('Tree:');
		this.root?.show('*', false);
	}
	addNode(value: T): void {
		if (!this.root) {
			this.setRoot(value);
		} else {
			this.addNodeTo(this.root, value);
		}
	}
	private addNodeTo(node: binaryNode<T> | null, value: T): void {
		if (!node) {
			return;
		}
		if (value < node.getValue()) {
			if (node.getLeft()) {
				this.addNodeTo(node.getLeft(), value);
			} else {
				node.setLeft(value);
			}
		} else {
			if (node.getRight()) {
				this.addNodeTo(node.getRight(), value);
			} else {
				node.setRight(value);
			}
		}
	}
}
