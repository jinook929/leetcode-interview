const firstUniqChar = s => {
    let sets = []
    let counter = 0
    const tmp =[]
    for(let i = 0; i < s.length; i++) {
        if(tmp.includes(s[i])) {
            sets = sets.map(set => set[0] === s[i] ? [set[0], set[1] + 1, set[2]] : set)
        } else {
            sets.push([])
            tmp.push(s[i])
            sets[counter][0] = s[i]
            sets[counter][1] = 1
            sets[counter][2] = i
            counter++
        }
    }
    console.log(sets)
    const result = sets.filter(set => set[1] === 1)[0]
    if(result) {console.log(result[2]);return result[2]}
    // for (const key in sets) {
    //     if(sets[key][0] === 1) return sets[key][1]
    // }
    // const sets = {}
    // for(let i = 0; i < s.length; i++) {
    //     if(sets[s[i]]) {
    //         sets[s[i]]["frequency"]++
    //     } else {
    //         sets[s[i]] = {}
    //         sets[s[i]]["frequency"] = 1
    //         sets[s[i]]["index"] = i
    //     }
    // }
    // console.log(sets)
    // for (const key in sets) {
    //     if(sets[key].frequency === 1) {console.log(sets[key].index);return sets[key].index}
    // }
    console.log(-1)
    return -1
}

firstUniqChar("leetcode")
firstUniqChar("loveleetcode")
firstUniqChar("aabb")