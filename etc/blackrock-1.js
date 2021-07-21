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
    return null
}

console.log("first repeated index:", firstRepeatedChar("aaaa"))
console.log("first repeated index:", firstRepeatedChar("abca"))
console.log("first repeated index:", firstRepeatedChar("abcb"))

const firstNonRepeatedChar = s => {
    // const map = new Map()
    // for(const ch of s) {
    //     if(map.get(ch)) {
    //         map.set(ch, map.get(ch) + 1)
    //     } else {
    //         map.set(ch, 1)
    //     }
    // }
    // for(let [k, v] of map) {
    //     if(v === 1) return k
    // }
    // return null
    
    const uniqueSet = new Set()
    let repeatedSet = new Set()
    for(let ch of s) {
        if(!uniqueSet.has(ch)) {
            uniqueSet.add(ch)
        } else {
            repeatedSet.add(ch)
        }
    }
    for(let ch of repeatedSet) {
        uniqueSet.delete(ch)
    }
    return uniqueSet.values().next().value
}

console.log("first non-repeated char:", firstNonRepeatedChar("aaaa"))
console.log("first non-repeated char:", firstNonRepeatedChar("abca"))
console.log("first non-repeated char:", firstNonRepeatedChar("abcb"))

// [0, 1, 1, 2, 3, 5, 8, 13, 21...]

// const fib = n => {
//     const fibArr = [0, 1]
//     for(let i = 2; i <= n; i++) {
//         fibArr.push(fibArr[i - 1] + fibArr[i - 2])
//     }
//     return fibArr[n]
// }

function memoize(fn) {
    const cache = {}
    return function(...args) {
        if(cache[args]) return cache[args]
        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function fib(n) {
    if(n < 2) return n
    // return fib(n-1) + fib(n-2)
    return memoizedFib(n-1) + memoizedFib(n-2)
}

const memoizedFib = memoize(fib)

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(10))
console.log(fib(27))
console.log(memoizedFib(100))
console.log(memoizedFib(1000))
