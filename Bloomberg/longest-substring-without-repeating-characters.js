const lengthOfLongestSubstring = s => {
    let chars = new Set()
    let result = 0
    let left = 0
    let right  = 0

    while(right < s.length) {
        if(!chars.has(s[right])) {
            chars.add(s[right])
            result = Math.max(result, chars.size)
            right++
        } else {
            chars.delete(s[left])
            left++
        }
        console.log(chars)
    }
 
    return result
}

// console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("abc"))
// console.log(lengthOfLongestSubstring("abcabcd"))
// console.log(lengthOfLongestSubstring("abcabcdabced"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("ckilbkd"))
console.log(lengthOfLongestSubstring("abcabcdabb"))

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

// const lengthOfLongestSubstring = s => {
//     console.log(s)
//     // let chars = [] <= using Array
//     // let chars = {} <= using Object
//     let chars = new Set() // <=using Set
//     let result = 0
//     let left = 0
//     let right  = 0

//     while(right < s.length) {
//         // if(!chars.includes(s[right])) { <= using Array
//         // if(!Object.keys(chars).includes(s[right])) { <= using Object
//         if(!chars.has(s[right])) { // <=using Set
//             // chars.push(s[right])
//             // chars[s[right]] = 1
//             chars.add(s[right]) // <=using Set
//             // result = result > chars.length ? result : chars.length <= using Array
//             // result = Math.max(result, Object.keys(chars).length) <= using Object
//             result = Math.max(result, chars.size) // <=using Set
//             right++
//             console.log(chars, s[right], left, right, result)
//         } else {
//             // chars.splice(0, chars.indexOf(s[right]) + 1) <= using Array
//             // delete chars[s[left]] <= using Object
//             chars.delete(s[left]) // <=using Set
//             left++
//             console.log(chars, s[right], result)
//         }
//     }
 
//     return result
// }