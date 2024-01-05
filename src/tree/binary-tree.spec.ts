import { describe } from "node:test";
import { BinaryTree } from "./binary-tree";


describe("Binary Tree", () => {
    it("should be able to create a binary tree", () => {
        const tree = new BinaryTree<number>();
        expect(tree).toBeDefined();
    });

    it("should be able to insert a node", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        expect(tree.root).toBeDefined();
        expect(tree.root?.value).toBe(5);
    });

    it("should be able to insert a node to the left", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        expect(tree.root?.left).toBeDefined();
        expect(tree.root?.left?.value).toBe(3);
    });

    it("should be able to insert a node to the right", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(7);
        expect(tree.root?.right).toBeDefined();
        expect(tree.root?.right?.value).toBe(7);
    });

    it("should be able to insert a node to the left and right", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        tree.addNode(7);
        expect(tree.root?.left).toBeDefined();
        expect(tree.root?.left?.value).toBe(3);
        expect(tree.root?.right).toBeDefined();
        expect(tree.root?.right?.value).toBe(7);
    });

    it("should have depth 0 when empty", () => {
        const tree = new BinaryTree<number>();
        expect(tree.getDepth(tree.root)).toBe(0);
    });

    it("should have depth 1 when root", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        expect(tree.getDepth(tree.root)).toBe(1);
    });

    it("should have depth 2 when root and left", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        expect(tree.getDepth(tree.root)).toBe(2);
    });
    it("should be able to remove a node", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        tree.remove(3);
        expect(tree.root?.left).toBeNull();
    });
    it("should be able to remove a node with two children", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        tree.addNode(7);
        tree.remove(5);
        expect(tree.root?.value).toBe(7);
    });
    it("should be able to search a node", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        tree.addNode(7);
        expect(tree.find(3)?.value).toBe(3);
    });

    it("should be able to search a node with two children", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        tree.addNode(7);
        expect(tree.find(5)?.value).toBe(5);
    });

    it("should returb null when searching for a non existing node", () => {
        const tree = new BinaryTree<number>();
        tree.addNode(5);
        tree.addNode(3);
        tree.addNode(7);
        expect(tree.find(9)).toBeNull();
    });
});
