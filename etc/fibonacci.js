//// brute force
const fib = n => {
    let arr = [0, 1]
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n]
}

//// recursion
// const fib = n => {
//     if(n < 2) return n
//     return fib(n - 1) + fib(n - 2)
// }

//// recursion + memoization 
// const cache = {}
// const fib = n => {
//     if(n < 2) return n
//     if(cache[n]) return cache[n]
//     let result = fib(n - 1) + fib(n - 2)
//     cache[n] = result
//     return result
// }

console.log(fib(10))
console.log(fib(20))
console.log(fib(30))
console.log(fib(40))
console.log(fib(50))
// console.log(fib(75))
// console.log(fib(78))
