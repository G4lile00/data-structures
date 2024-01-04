import { binaryTree } from './tree/binary-tree';

const tree = new binaryTree<number>();
tree.addNode(20);
tree.addNode(50);

tree.addNode(10);
tree.addNode(25);
tree.addNode(5);
tree.addNode(15);
tree.addNode(60);
tree.addNode(90);
tree.addNode(23);
tree.addNode(30);
tree.addNode(40);
tree.addNode(60);
tree.addNode(70);

tree.show(tree.root);


tree.remove(20);
tree.show(tree.root);

tree.remove(40)
tree.show(tree.root);

const node = tree.find(10);
node?.show();
