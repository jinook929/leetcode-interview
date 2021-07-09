class Tree {
    constructor() {
        this.root = null;
    }
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    if(root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};

let node1 = new TreeNode(7);
let node2 = new TreeNode(15);
let node3 = new TreeNode(20, node2, node1);
let node4 = new TreeNode(9);
let node5 = new TreeNode(3, node4, node3);
let node6 = new TreeNode(1);
let node7 = new TreeNode(5, node6, node5);

console.log(maxDepth(node5));
console.log(maxDepth(node7));
