
class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    // Size (number of nodes in tree)
        // count all nodes to the left, count all nodes to the right
        // you will want to pay each node a "visit"

    // Contains
        // follow the tree down in a direction to see if the value in found
        // until you hit a "leaf"

    add(val, node = this.root) {
        // IF empty create a node, assign to root
        if(this.isEmpty()) {
            this.root = new BSTNode(val);
            return this;
        }
        let goingLeft = (val < node.value);
        if(goingLeft) {
            if(node.left === null) {
                node.left = new BSTNode(val);
                return this;
            } else {
                return this.add(val, node.left);
            }
        } else {
            if(node.right === null) {
                node.right = new BSTNode(val);
                return this;
            } else {
                return this.add(val, node.right);
            }
        }
    }
}