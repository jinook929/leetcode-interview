const removeNthFromEnd = (head, n) => {
    let tmp = new ListNode(0, head)
    let slow = tmp
    let fast = tmp
    
    for(let i = 0; i < n + 1; i++) {
        fast = fast.next
    }
    
    while(fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    
    slow.next = slow.next.next

    return tmp.next
};

let node1 = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null}}}}
console.log(node1, "target:", 2)
console.log(removeNthFromEnd(node1, 2))

console.log("**********************")

let node2 = {val: 4, next: {val: 5, next: {val: 1, next: {val: 9, next: null}}}}
console.log(node2, "target:", 3)
console.log(removeNthFromEnd(node2, 3))

// const removeNthFromEnd = (head, n) => {
//     let size = 0;
//     let tmp = head
//     if(n === 1 && head.next) {
//         while(head.next.next) {
//             head = head.next     
//         }
//         head.next = null
//         head = tmp
//         return head
//     }
    
//     while(head) {
//         size++
//         head = head.next
//     }
//     head = tmp

//     let counter = 0
//     while(counter < size - n) {
//         head = head.next
//         counter++
//     }
    
//     head.val = head.next ? head.next.val : null
//     head.next = head.next ? head.next.next : null
//     head = tmp

//     if(size === 1 && n === 1) head = null

//     return head
// };