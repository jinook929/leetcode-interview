const myAtoi = (s) => {
    let sNoSpace = s.trim().split(" ")
    console.log(sNoSpace)
    if(!parseInt(sNoSpace[0])) return 0
    let num = sNoSpace.find(ch => typeof (parseInt(ch)) === "number")
    num = parseInt(num)
    const max = 2 ** 31
    if(num > max - 1) return max - 1
    if(num < -(max)) return -(max)
    return num
};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("   +0 123"))
console.log(myAtoi("  -0012a42"))
console.log(myAtoi("      -11919730356x"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("91283472332"))
