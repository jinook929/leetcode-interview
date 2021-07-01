function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const mergeTwoLists = (l1, l2) => {
    let vals = []
    let trav1 = l1
    let trav2 = l2

    vals = [...collectEls(trav1), ...collectEls(trav2)].sort((a, b) => a - b)
    
    console.log(vals)
    let newHead = null
    for(let i = vals.length; i > 0; i--) {
        let newNode = new ListNode(parseInt(vals[i - 1]), newHead)
        newHead = newNode
    }
    return newHead
};

const collectEls = (node, vals = []) => {
    while(node) {
        vals.push(node.val)
        node = node.next
    }
    return vals
}

console.log("**********************")
let node1 = {val: 2, next: {val: 0, next: {val: 1, next: {val: 3, next: null}}}}
let node2 = {val: 4, next: {val: 5, next: {val: 1, next: {val: 9, next: null}}}}
console.log(node1, node2)
console.log(mergeTwoLists(node1, node2))