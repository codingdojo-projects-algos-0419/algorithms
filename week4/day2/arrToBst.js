function helper(arr, start = 0, end = arr.length - 1) {

    let mid = Math.floor((start + end) / 2);

    if(start > end)
        return null;

    let node = new BSTNode(arr[mid]);
    node.right = helper(arr, mid + 1, end);
    node.left = helper(arr, start, mid - 1);

    return node;
}

function arrayToBst(arr) {
    let tree = new BST();
    tree.root = helper(arr);
    return tree;
}
 
 // [1,2,3,4,5,6,7]