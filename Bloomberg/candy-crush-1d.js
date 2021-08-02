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

// console.log(candyCrush("aaabbbc"))
// console.log(candyCrush("ccaabbbaacd"))
// console.log(candyCrush("aaabbbacd"))
// console.log(candyCrush("aabbccddeeedcba"))

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

const candyCrush1D = s => {
    let output = ""
    let checkAgain = false
    let strArr = s.split("").map(ch => ch.charCodeAt(0))
    // check same char series
    for(let i = 0; i < strArr.length - 2; i++) {
        let tmpValue = Math.abs(strArr[i])
        if(tmpValue === Math.abs(strArr[i + 1]) && tmpValue === Math.abs(strArr[i + 2])) {
            strArr[i] = strArr[i + 1] = strArr[i + 2] = -tmpValue
            checkAgain = true
        }
    }
    // update output
    for(let el of strArr) {
        if(el > 0) output += String.fromCharCode(el)
    }
    // return or recursion?
    return checkAgain ? candyCrush1D(output) : output
}
// console.log(candyCrush("aaabbbc"))
// console.log(candyCrush("ccaabbbaacd"))
// console.log(candyCrush1D("aaabbbacd"))
// console.log(candyCrush1D("ACCBBBBC"))
// console.log(candyCrush1D("aabbccddeeedcba"))

//// 2 pointer array version
function cca(s) {
    let checkAgain = true
    let sArr = s.split("")
    
    while(checkAgain) {
        checkAgain = false
        let counter = 0
        let left = 0
        let right = 0
        while(right < sArr.length) {
            if(sArr[left] === sArr[right]) {
                counter++
                right++
            } else {
                if(counter >= 3) {
                    sArr.splice(left, right - left)
                    right = right - counter
                    checkAgain = true
                }
                left = right
                counter = 0
            }
        }
    }
    return sArr.join("")
}

// console.log(cc("aaabbbc"))
// console.log(cc("ccaabbbaacd"))
// console.log(cc("aaabbbacd"))
// console.log(cc("ACCBBBBC"))
// console.log(cc("aabbccddeeedcba"))

//// 2 pointer string version
function ccs(s) {
    // let checkAgain = false
    let checkAgain = true    
    while(checkAgain) {
        checkAgain = false
        let counter = 0
        let left = 0
        let right = 0
        while(right < s.length) {
            if(s[left] === s[right]) {
                counter++
                right++
            } else {
                if(counter >= 3) {
                    // s = s.replace(Array(counter).fill(s[left]).join(""), "")
                    s = s.replace(s[left].repeat(counter), "")
                    right = right - counter
                    checkAgain = true
                }
                left = right
                counter = 0
            }
        }
    }
    return s
    // return checkAgain ? ccs(s) : s
}

let str = "abcdefghijklmnopqrstuvwxyzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaaaa?!?!"

// console.time();
// for(let i = 0; i < 111111; i++) candyCrush1D(str)
// console.log("abs version result :", candyCrush1D(str))
// console.timeEnd();

// console.time();
for(let i = 0; i < 111111; i++) cca(str)
console.log("2 pointer array version result :", cca(str))
// console.timeEnd();

// console.time();
// for(let i = 0; i < 111111; i++) ccs(str)
// console.log("2 pointer string version result :", ccs(str))
// console.timeEnd();
