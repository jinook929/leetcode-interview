function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const isPalindrome = head => {
    const vals = [];
    let trav = head
    while(trav) {
        vals.push(trav.val);
        trav = trav.next;
    }
    for(let i = 0; i < parseInt(vals.length / 2); i++) {
        console.log(vals[i], vals[vals.length - 1 - i])
        if(vals[i] !== vals[vals.length - 1 - i]) {
            console.log("FALSE!!!")
            return false
        }
    }
    return true;
};

let node1 = {val: 2, next: {val: 0, next: {val: 1, next: {val: 3, next: null}}}}
console.log(node1)
console.log(isPalindrome(node1))
console.log("**********************")
let node2 = {val: 4, next: {val: 5, next: {val: 1, next: {val: 9, next: null}}}}
console.log(node2)
console.log(isPalindrome(node2))
console.log("**********************")
let node3 = {val: 1, next: {val: 2, next: {val: 2, next: {val: 1, next: null}}}}
console.log(node3)
console.log(isPalindrome(node3))