function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var middleNode = function(head) {
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    
    return slow
};

let n0 = new ListNode(6, null)
let n1 = new ListNode(5, n0)
let n2 = new ListNode(4, n1)
let n3 = new ListNode(3, n2)
let n4 = new ListNode(2, n3)
let n5 = new ListNode(1, n4)

console.log(middleNode(n5))
// console.log(middleNode(n1))