const isPalindrome = s => {
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
    console.log(s)
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        if(s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("ab_a"))
console.log(isPalindrome("0P"))