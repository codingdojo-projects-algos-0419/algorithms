
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
    
        //       5
        //     1   10
        //  -1   2

        // [1,2,3,4,5,6]
       

    size(node = this.root) {
        if(!node) {
            return 0;
        }

        return (this.size(node.left) + 1 + this.size(node.right) + 1);
    }

    height(node = this.root) {
        // base base (if node is null, return 0)
        if(!node) {
            return 0;
        }

        // descend down and count the larger of two heights of left vs right
        var largestHeightOfBothSides = Math.max(this.height(node.left) + 1, this.height(node.right) + 1)
        return largestHeightOfBothSides;
    }


    sizeNonRecursive() {
        var count = 0;

        if(this.root === null)
            return count;

        var nodes = [this.root];

        while(nodes.length > 1) {
            count++;
            var node = nodes.shift();
            if(node.left)
                nodes.push(node.left);
            if(node.right)
                nodes.push(node.right);
        }

    }

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