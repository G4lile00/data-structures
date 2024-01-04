import { binaryNode } from './node';

export class binaryTree<T> {
	root: binaryNode<T> | null;

  constructor(rootNode: binaryNode<T> | null = null) {
		this.root = rootNode;
	}
	setRoot(value: T): void {
		this.root = new binaryNode<T>(value);
	}
	getRoot(): binaryNode<T> | null {
		return this.root;
	}
	addNode(value: T): void {
		if (!this.root) {
			this.setRoot(value);
		} else {
			this.addNodeTo(this.root, value);
		}
	}
	getDeapth(node: binaryNode<T> | null): number {
		if (!node) return 0;
		const leftDeapth = this.getDeapth(node.getLeft());
		const rightDeapth = this.getDeapth(node.getRight());
		return Math.max(leftDeapth, rightDeapth) + 1;
	}
	find(value: T): binaryNode<T> | null {
		return this.findIn(this.root, value);
	}
  remove(value: T): void {
    this.removeIn(this.root, value);
  }
	show(node: binaryNode<T> | null,prefix = ''): void {
		console.log('Tree description:');
		console.log('├── LEFT NODE VALUE  └── RIGHT NODE VALUE');
		console.log(`Tree struct: ${this.getDeapth(node)} deapth `);
		console.log('');
		this.showTree(false, `${prefix}     `, node);
	}
	private showTree(isLeft: boolean, prefix = '', node = this.root): void {
		if (!node) console.log(`${prefix}└──  null`);
		else {
			console.log(prefix + (isLeft ? '├── ' : '└── ') + node.value);
			if (node.left) this.showTree(true, `${prefix}    `, node.left);
			else console.log(`${prefix}│   ├── null`);
			if (node.right) this.showTree(false, `${prefix}    `, node.right);
			else console.log(`${prefix}    └── null`);
		}
	}
	private addNodeTo(node: binaryNode<T> | null, value: T): void {
		if (!node) return;
		if (value < node.getValue()) {
			if (node.getLeft()) {
				this.addNodeTo(node.getLeft(), value);
			} else {
        const newNode = new binaryNode<T>(value);
				node.setLeft(newNode);
			}
		} else {
			if (node.getRight()) {
				this.addNodeTo(node.getRight(), value);
			} else {
        const newNode = new binaryNode<T>(value);
				node.setRight(newNode);
			}
		}
	}
	private findIn(node: binaryNode<T> | null, value: T): binaryNode<T> | null {
		if (!node) return null;
		if (value === node.getValue()) return node;
		if (value < node.getValue()) return this.findIn(node.getLeft(), value);
		return this.findIn(node.getRight(), value);
	}
  private removeIn(node: binaryNode<T> | null, value: T): boolean {
    let wasRemoved: boolean;
    if (!node) return false;
    if (value === node.getValue()) return node.remove();
    if (value < node.getValue()) {
      wasRemoved = this.removeIn(node.getLeft(), value);
      if (!wasRemoved) node.left = null;
    }
    else {
      wasRemoved = this.removeIn(node.getRight(), value);
      if (!wasRemoved) node.right = null;
    }
    return true;
  }
}
