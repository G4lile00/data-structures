import {
	DoubleLinkedList,
	SimpleLinkedList,
	WeightedLinkedList,
} from './linked-list';
describe('Simple Linked List', () => {
	it('should create empty linked list', () => {
		const linkedList = new SimpleLinkedList<number>();
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toBe(0);
	});
	it('should append node to linked list', () => {
		const linkedList = new SimpleLinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);
		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.tail?.value).toBe(2);
		expect(linkedList.length).toBe(2);
	});
	it('should prepend node to linked list', () => {
		const linkedList = new SimpleLinkedList<number>();
		linkedList.prepend(1);
		linkedList.prepend(2);
		expect(linkedList.head?.value).toBe(2);
		expect(linkedList.tail?.value).toBe(1);
		expect(linkedList.length).toBe(2);
	});
	it('should find node by value', () => {
		const linkedList = new SimpleLinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		const node = linkedList.find(2);
		expect(node?.value).toBe(2);
	});

	it('should remove node by value', () => {
		const linkedList = new SimpleLinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		linkedList.remove(2);
		expect(linkedList.length).toBe(2);
		expect(linkedList.find(2)).toBeNull();
		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.tail?.value).toBe(3);
	});

	it('should remove node by value from linked list with one node', () => {
		const linkedList = new SimpleLinkedList<number>();
		linkedList.append(1);
		linkedList.remove(1);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
	});
});
describe('Double Linked List', () => {
	it('should create empty linked list', () => {
		const linkedList = new DoubleLinkedList<number>();
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toBe(0);
	});
	it('should append node to linked list', () => {
		const linkedList = new DoubleLinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);
		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.tail?.value).toBe(2);
		expect(linkedList.length).toBe(2);
	});
	it('should prepend node to linked list', () => {
		const linkedList = new DoubleLinkedList<number>();
		linkedList.prepend(1);
		linkedList.prepend(2);
		expect(linkedList.head?.value).toBe(2);
		expect(linkedList.tail?.value).toBe(1);
		expect(linkedList.length).toBe(2);
	});
	it('should find node by value', () => {
		const linkedList = new DoubleLinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		const node = linkedList.find(2);
		expect(node?.value).toBe(2);
	});

	it('should remove node by value', () => {
		const linkedList = new DoubleLinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);
		linkedList.append(3);
		linkedList.remove(2);
		expect(linkedList.length).toBe(2);
		expect(linkedList.find(2)).toBeNull();
		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.tail?.value).toBe(3);
	});

	it('should remove node by value from linked list with one node', () => {
		const linkedList = new DoubleLinkedList<number>();
		linkedList.append(1);
		linkedList.remove(1);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
	});
});
describe('Weight Linked List', () => {
	it('should create empty linked list', () => {
		const linkedList = new WeightedLinkedList<number>();
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toBe(0);
	});
	it('should append node to linked list', () => {
		const linkedList = new WeightedLinkedList<number>();
		linkedList.append(1, 1);
		linkedList.append(2, 2);
		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.tail?.value).toBe(2);
		expect(linkedList.length).toBe(2);
	});
	it('should prepend node to linked list', () => {
		const linkedList = new WeightedLinkedList<number>();
		linkedList.prepend(1, 1);
		linkedList.prepend(2, 2);
		expect(linkedList.head?.value).toBe(2);
		expect(linkedList.tail?.value).toBe(1);
		expect(linkedList.length).toBe(2);
	});
	it('should find node by value', () => {
		const linkedList = new WeightedLinkedList<number>();
		linkedList.append(1, 1);
		linkedList.append(2, 2);
		linkedList.append(3, 3);
		const node = linkedList.find(2);
		expect(node?.value).toBe(2);
	});
	it('should remove node by value', () => {
		const linkedList = new WeightedLinkedList<number>();
		linkedList.append(1, 1);
		linkedList.append(2, 2);
		linkedList.append(3, 3);
		linkedList.remove(2);
		expect(linkedList.length).toBe(2);
		expect(linkedList.find(2)).toBeNull();
		expect(linkedList.head?.value).toBe(1);
		expect(linkedList.tail?.value).toBe(3);
	});
	it('should remove node by value from linked list with one node', () => {
		const linkedList = new WeightedLinkedList<number>();
		linkedList.append(1, 1);
		linkedList.remove(1);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
	});
	it('should have weigth on node', () => {
		const linkedList = new WeightedLinkedList<number>();
		linkedList.append(1, 1);
		linkedList.append(2, 2);
		linkedList.append(3, 3);
		const node = linkedList.find(2);
		expect(node?.weight).toBe(2);
	});
});
