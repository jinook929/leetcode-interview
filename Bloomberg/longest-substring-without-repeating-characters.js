const lengthOfLongestSubstring = s => {
    let chars = []
    let result = 0
    let left = 0
    let right  = 0

    while(right < s.length) {
        if(!chars.includes(s[right])) {
            chars.push(s[right])
            result = Math.max(result, chars.length)
            right++
        } else {
            chars.splice(0, chars.indexOf(s[right]) + 1)
            left++
        }
    }
 
    return result
}

console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("abc"))
console.log(lengthOfLongestSubstring("abcabcd"))
console.log(lengthOfLongestSubstring("abcabcdabced"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("ckilbkd"))

// const lengthOfLongestSubstring = s => {
//     let result = 0
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i; j < s.length; j++) {
//             if(!hasSameChars(s.slice(i, j + 1))) {
//                 if(s.slice(i, j + 1).length > result) {
//                     result = s.slice(i, j + 1).length
//                 }
//             } else {
//                 break
//             }
//         }
//     }    
//     return result
// }

// function hasSameChars(s) {
//     const tmp = {}
//     for(const ch of s) {
//         if(tmp[ch]) return true
//         tmp[ch] = 1
//     }
//     return false
// }