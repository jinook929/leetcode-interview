const reverse = x =>  {
    let num = x.toString().split("").reverse().join("")
    if(num[num.length - 1] === "-") {
        num = parseInt(num.slice(0, num.length - 1))
        if(num > 2 ** 31) return 0
        return parseInt(`-${num}`)
    }
    num = parseInt(num)
    if(num >= 2 ** 31) return 0
    return num
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(-120))
console.log(reverse(2147483648))
console.log(reverse(-2147483648))