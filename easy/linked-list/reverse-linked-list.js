function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
 const reverseList = head => {
    let prev = null
    while(head !== null) {
        let next_node = head.next
        head.next = prev
        prev = head
        head = next_node
    }
    return prev
    // let trav = head
    // let newHead = null
    // while(trav) {
    //     let newNode = new ListNode(trav.val, newHead)
    //     newHead = newNode
    //     trav = trav.next
    // }
    // return newHead
};

let node1 = {val: 2, next: {val: 0, next: {val: 1, next: {val: 3, next: null}}}}
console.log(node1)
console.log(reverseList(node1))
console.log("**********************")
let node2 = {val: 4, next: {val: 5, next: {val: 1, next: {val: 9, next: null}}}}
console.log(node2)
console.log(reverseList(node2))