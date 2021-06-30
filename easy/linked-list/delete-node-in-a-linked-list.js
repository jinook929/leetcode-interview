const deleteNode = (node, target) => {
    while(node) {
        if(node.val === target) break
        node = node.next
    }
    console.log(node)
    let tmp = node.next
    node.val = tmp.val
    node.next = tmp.next
    tmp = null
    console.log("===== target:", target)
    return node
};

let node1 = {val: 2, next: {val: 0, next: {val: 1, next: {val: 3, next: null}}}}
// console.log(node1, 2)
console.log(deleteNode(node1, 2))
console.log("**********************")
let node2 = {val: 4, next: {val: 5, next: {val: 1, next: {val: 9, next: null}}}}
// console.log(node2, 5)
console.log(deleteNode(node2, 5))