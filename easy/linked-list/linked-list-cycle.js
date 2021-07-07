function ListNode(val) {
    this.val = val;
    this.next = null;
}

const hasCycle = head => {
    if(!head || !head.next) return false;
    
    let pointer1 = head;
    let pointer2 = head;
    
    do {
        pointer1 = pointer1.next;
        if(!pointer2 || !pointer2.next) return false;
        pointer2 = pointer2.next.next;
    } while(pointer1 != pointer2);
        
    return true;
};

let node1 = {val: 2, next: {val: 0, next: {val: 1, next: {val: 3, next: null}}}}
console.log(node1)
console.log(hasCycle(node1))
console.log("**********************")
let node2 = {val: 4, next: {val: 5, next: {val: 1, next: {val: 9, next: null}}}}
console.log(node2)
console.log(hasCycle(node2))
console.log("**********************")
let node3 = {val: 1, next: {val: 2, next: {val: 2, next: {val: 1, next: null}}}}
console.log(node3)
console.log(hasCycle(node3))