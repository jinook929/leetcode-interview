// https://replit.com/@feitelogram/mockInterview-1

/*
The Collatz Conjecture or 3x+1 problem can be summarized as follows:

Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

Given a number n, return the number of steps required to reach 1.

Implement a Class called Collatz and a method numSteps that returns the number.

Samples:
steps(16) -> 4
steps(8) -> 3
steps(1) -> 0
steps(3) -> 7
 */

// class Collatz {
//     constructor() {
//         this.counter = 0
//         this.memoizedNumSteps = this.memoize(this.numSteps)
//     }

//     memoize(fn) {
//         const cache = {}
//         return function(...args) {
//             if(cache[args]) return cache[args]
//             const result = fn.apply(this, args)
//             cache[args] = result
//             return result
//         }
//     }

//     numSteps(n) {
//         // base case
//         if(n === 1) return 0
//         this.counter++
//         // this.numSteps(n % 2 === 0 ? n / 2 : n * 3 + 1)
//         this.memoizedNumSteps(n % 2 === 0 ? n / 2 : n * 3 + 1)
//         return this.counter     

//         // if(this.cache[n]) {
//         //     return this.cache[n]
//         // }

//         // if(n % 2 === 0) {
//         //     let result = this.numSteps((n / 2), counter + 1)
//         //     this.cache[n] = result
//         //     return result
//         // } else {
//         //     let result = this.numSteps(((n * 3) + 1), counter + 1)
//         //     this.cache[n] = result
//         //     return result
//         // }
//     }
// }

// const c = new Collatz()
// let tmp;
// for(let i = 0; i < 333333; i++) {
//     tmp = c.memoizedNumSteps(63728127)
//     // tmp = c.numSteps(63728127)
//     c.counter = 0
// }
// console.log(tmp)
// console.log(c.memoizedNumSteps(1))
// console.log(c.memoizedNumSteps(2))
// console.log(c.memoizedNumSteps(5))
// console.log(c.memoizedNumSteps(27))
// console.log(c.memoizedNumSteps(255))
// console.log(c.memoizedNumSteps(703))
// console.log(c.memoizedNumSteps(3471))
// console.log(c.memoizedNumSteps(3471001))
// console.log(c.memoizedNumSteps(63728127))

// console.log(steps(16))
// console.log(steps(8))
// console.log(steps(1))
// console.log(steps(3))

class MemoizedCollatz {
    constructor() {
        this.cache = new Map()
    }

    numSteps(n, counter = 0) {
        if(n === 1) return counter

        if(this.cache.has(`${n}_${counter}`)) {
            return this.cache.get(`${n}_${counter}`)
        }

        let result = this.numSteps(n % 2 === 0 ? n / 2 : n * 3 + 1, counter + 1)
        this.cache.set(`${n}_${counter}`, result)
        return result
    }
}

// const m = new MemoizedCollatz()
// console.log(m.numSteps(4))
// console.log(m.cache)
// console.log(m.numSteps(3))
// console.log(m.cache)
// for(let i = 0; i < 333333; i++) {
//     m.numSteps(63728127)
// }
// console.log(m.numSteps(63728127))

class Collatz {
    numSteps(n, counter = 0) {
        if(n === 1) return counter
        let result = this.numSteps(n % 2 === 0 ? n / 2 : n * 3 + 1, counter + 1)
        console.log(`recursion result of numSteps(${n % 2 === 0 ? n / 2 : n * 3 + 1}) @ counter_${counter + 1}`, result)
        return result
        // return this.numSteps(n % 2 === 0 ? n / 2 : n * 3 + 1, counter + 1)
    }
}

const c = new Collatz()
// for(let i = 0; i < 333333; i++) {
//     c.numSteps(63728127)
// }
// console.log(c.numSteps(63728127))
console.log(c.numSteps(4))
console.log(c.numSteps(3))
