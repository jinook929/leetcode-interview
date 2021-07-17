const candyCrush = s => {
    let result = "" // prep for final str value
    let checkAgain = false // whether to check again or not 
    let sArr = s.split("").map(ch => ch.charCodeAt(0)) // str to arr

    // check series
    for(let i = 0; i < sArr.length - 2; i++) {
        let tmp = Math.abs(sArr[i])
        if(tmp === Math.abs(sArr[i + 1]) && tmp === Math.abs(sArr[i + 2])) {
            sArr[i] = sArr[i + 1] = sArr[i +2] = -tmp
            checkAgain = true
        } 
    }

    // update result
    for(let i = 0; i < sArr.length; i++) {
        if(sArr[i] > 0) {
            result += String.fromCharCode(sArr[i])
        }
    }
    
    return checkAgain ? candyCrush(result) : result
}

console.log(candyCrush("aaabbbc"))
console.log(candyCrush("ccaabbbaacd"))
console.log(candyCrush("aabbccddeeedcba"))
console.log(candyCrush("aaabbbacd"))

// const candyCrush = s => {
//     let result = ""
//     let sArr = s.split("").map(ch => ch.charCodeAt(0))
//     let todo = false

//     for(let i = 0; i < sArr.length - 2; i++) {
//         let tmpValue = Math.abs(sArr[i])
//         if(tmpValue === Math.abs(sArr[i + 1]) && tmpValue === Math.abs(sArr[i + 2])) {
//             sArr[i] = sArr[i + 1] = sArr[i +2] = -tmpValue
//             todo = true
//         } 
//     }

//     for(let i = 0; i < sArr.length; i++) {
//         if(sArr[i] > 0) {
//             result += String.fromCharCode(sArr[i])
//         }
//     }
    
//     return todo ? candyCrush(result) : result
// }