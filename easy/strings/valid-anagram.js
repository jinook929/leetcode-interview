const isAnagram = (s, t) => {
    if(s.length !== t.length) return false
    const objS = {}
    const objT = {}
    for(let i = 0; i < s.length; i++) {
        objS[s[i]] = objS[s[i]] + 1 || 1
        // if(objS[s[i]]) {
        //     objS[s[i]]++
        // } else {
        //     objS[s[i]] = 1
        // }
        objT[t[i]] = objT[t[i]] + 1 || 1
        // if(objT[t[i]]) {
        //     objT[t[i]]++
        // } else {
        //     objT[t[i]] = 1
        // }
    }
    console.log("objS", objS)
    console.log("objT", objT)
    for(const key in objS) {
        console.log(`Compare: ${objS[key]} - ${objT[key]}`)
        if(objS[key] !== objT[key]) return false
    }
    return true
    // if(s.length !== t.length) return false
    // const charsS = s.split("")
    // charsS.sort()
    // charsT = t.split("")
    // charsT.sort()
    // for(let i = 0; i < s.length; i++) {
    //     if(charsS[i] !== charsT[i]) return false
    // }
    // return true
};

console.log(isAnagram("ab", "cba"))
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("car", "rat"))