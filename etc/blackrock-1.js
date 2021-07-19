// find index of first repeated char in string
const firstRepeatedChar = s => {
    // const tmp = {}
    // for(let i = 0; i < s.length; i++) {
    //     if(tmp[s[i]] || tmp[s[i]] === 0) return tmp[s[i]]
    //     tmp[s[i]] = i
    // }
    // return false
    const set = new Set()
    for(const ch of s) {
        if(set.has(ch)) return s.indexOf(ch)
        set.add(ch)
    }
}

console.log("answer:", firstRepeatedChar("aaaa"))
console.log("answer:", firstRepeatedChar("abca"))
console.log("answer:", firstRepeatedChar("abcb"))
// "aaaa"
// "abca"
// "abcb"

const firstNonRepeatedChar = s => {
    const map = new Map()
    for(const ch of s) {
        if(map.get(ch)) {
            map.set(ch, map.get(ch) + 1)
        } else {
            map.set(ch, 1)
        }
    }
    for(let [k, v] of map) {
        if(v === 1) return k
    }
    return ""
}

console.log("answer:", firstNonRepeatedChar("aaaa"))
console.log("answer:", firstNonRepeatedChar("abca"))
console.log("answer:", firstNonRepeatedChar("abcb"))

// [0, 1, 1, 2, 3, 5, 8, 13, 21...]

// const fib = n => {
//     const fibArr = [0, 1]
//     for(let i = 2; i < n; i++) {
//         fibArr.push(fibArr[i - 1] + fibArr[i - 2])
//     }
//     return fibArr[n - 1]
// }

const fib = n => {
    if(n < 3) return n - 1
    return fib(n-1) + fib(n-2)
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(10))
// console.log(fib(45))