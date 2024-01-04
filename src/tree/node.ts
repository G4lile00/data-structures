export class binaryNode<T> {
	value: T;
	left: binaryNode<T> | null;
	right: binaryNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	setLeft(node: binaryNode<T>| null): void {
		this.left = node;
	}
	setRight(node: binaryNode<T>| null): void {
		this.right = node;
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
  /***
   * @returns {boolean} true if node was removed, false if node was not removed
   * @description removes the node from the tree
  ***/
	remove(): boolean {
		if (!this.left && !this.right) return false;
    if(this.left && this.right) {
      this.value = this.right.value;
      let node = this.left;
      while(node.right) {
        node = node.right;
      }
      node.right = this.right.left;
      this.right = this.right.right;
    }
    else if (this.left) {
			this.value = this.left.value;
			this.right = this.left.right;
			this.left = this.left.left;
		} else if (this.right) {
			this.value = this.right.value;
			this.left = this.right.left;
			this.right = this.right.right;
		}
		return true;
	}
	show(): void {
		console.log(this);
	}
}
