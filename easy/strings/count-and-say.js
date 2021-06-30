const countAndSay = n => {const s = n
    let final = "1"
    console.log("Round #", 1, "temporary final string:", "1")
    if(n === 1) {
        return final
    }

    let newCharIndex = 0
    let charCounter = 0
    let tmpStr = ""

    while(n > 1) {
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
        tmpStr = ""
        n--
        newCharIndex = 0
        charCounter = 0
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