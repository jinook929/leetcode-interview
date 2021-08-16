const countAndSay = n => {const s = n
    console.log("Round #", 1, "temporary final string:", "1")
    // when n is 1
    let final = "1"
    if(n === 1) {
        return final
    }
    // looping n - 1 time 
    while(n > 1) {
        let newCharIndex = 0
        let charCounter = 0
        let tmpStr = ""
        console.log("Round #", s + 2 - n)
        while(charCounter < final.length) {
            while(final.charAt(charCounter) === final.charAt(newCharIndex)) {
                charCounter++
            }
            tmpStr += `${charCounter - newCharIndex}${final[newCharIndex]}`
            console.log("newCharIndex", newCharIndex, "number of character", charCounter - newCharIndex, "Current Character:", final[newCharIndex], "temporary final string:", tmpStr)
            newCharIndex = charCounter
        }
        final = tmpStr
        n--
    }

    return final
};

console.log(countAndSay(1))
console.log("=====")
console.log(countAndSay(2))
console.log("=====")
console.log(countAndSay(3))
console.log("=====")
console.log(countAndSay(4))
console.log("=====")
console.log(countAndSay(5))
console.log("=====")
console.log(countAndSay(6))
console.log("=====")
console.log(countAndSay(7))