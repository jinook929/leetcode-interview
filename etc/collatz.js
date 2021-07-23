// const collatz = (n, counter = 0) => {
//     if(n === 1) return counter
//     return collatz(n % 2 === 0 ? n / 2 : n * 3 + 1, counter + 1)
// }

const cache = new Map()
const collatz = (n, counter = 0) => {
    if(n === 1) return counter

    if(cache.has(`${n}-${counter}`)) {
        return cache.get(`${n}-${counter}`)
    }

    let result = collatz(n % 2 === 0 ? n / 2 : n * 3 + 1, counter + 1)
    cache.set(`${n}-${counter}`, result)
    return result
}

for(let i = 0; i < 333333; i++) {
    collatz(63728127)
}
console.log(collatz(63728127))

// console.log(collatz(1))
// console.log(cache)
// console.log(collatz(2))
// console.log(cache)
// console.log(collatz(3))
// console.log(cache)
// console.log(collatz(4))
// console.log(cache)
// console.log(collatz(5))
// console.log(cache)
// console.log(collatz(5))
// console.log(cache)
// console.log(collatz(6))
// console.log(cache)
// console.log(collatz(10))
// console.log(cache)
// console.log(collatz(10))
// console.log(cache)
