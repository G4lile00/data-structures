import { binaryTree } from './tree/binary-tree';

const tree = new binaryTree<number>();
tree.addNode(20);
tree.addNode(50);

tree.addNode(10);
tree.addNode(30);
tree.addNode(40);
tree.addNode(60);
tree.addNode(70);

tree.show(tree.root);


let Node = tree.find(40);
Node?.show();
tree.show(Node);
Node = tree.find(100);
Node?.show();
tree.show(Node);


