const cache = {}

const fib = n => {
    if(n < 2) return n

    if(cache[n]) return cache[n]

    let tmp = fib(n - 1) + fib(n - 2)
    cache[n] = tmp
    return tmp
}

console.log(fib(10))
console.log(fib(20))
console.log(fib(30))
console.log(fib(40))
console.log(fib(50))
console.log(fib(75))
console.log(fib(78))
