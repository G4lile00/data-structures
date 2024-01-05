import { SimpleLinkedList } from './linked-list';
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
