const longestCommonPrefix = strs => {
    if(strs.length <= 1) return ""
    let result = ""
    let tmp = ""
    for(let i = 0; i < strs.length - 1; i++) {
        if(i === 0) result = strs[0]
        for(let j = 0; j < result.length; j++) {
            if(result[j] !== strs[i+1][j] || !strs[i][j]) break
            tmp += strs[i][j]
        }
        result = tmp//; console.log(tmp)
        tmp = ""
    }
    return result
};

console.log("RETURN:", longestCommonPrefix(["ab", "a"]))
console.log("=====")
console.log("RETURN:", longestCommonPrefix(["ab", "a", "abc"]))
console.log("=====")
console.log("RETURN:", longestCommonPrefix(["flower","flow","flight"]))
console.log("=====")
console.log("RETURN:", longestCommonPrefix(["cir", "car"]))