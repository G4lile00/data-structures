import { binaryTree } from './tree/binary-tree';

const tree = new binaryTree<number>();
tree.setRoot(20);
tree.addNode(50);

tree.addNode(10);
tree.addNode(30);
tree.addNode(40);
tree.addNode(60);
tree.addNode(70);

tree.showTree();
