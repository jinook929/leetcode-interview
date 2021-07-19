const isSubArr = (arr1, arr2) => {
    for(const el of arr2) {
        if(arr1.indexOf(el) === -1) {
            return false
        }
        arr1.splice(arr1.indexOf(el), 1)
    }
    return true
}

// console.log(isSubArr([1,2,3], [2,3]))
// console.log(isSubArr([1,2,3], [3,2]))
// console.log(isSubArr([1,2,3], [1,2,3]))
// console.log(isSubArr([1,2,3], [1,2,3,4]))
// console.log(isSubArr([1,2,3], [2,2,3]))
// console.log(isSubArr([1,2,3], [3,4]))

const isSubArrInOrder = (arr1, arr2) => {
    let prevIdx = -1
    for(let i = 0; i < arr2.length; i++) {
        let curIdx = arr1.indexOf(arr2[i])
        if(curIdx !== -1 && curIdx > prevIdx) {
            prevIdx = curIdx
            arr1.splice(curIdx, 1, "#")
        } else {
            return false
        }        
    }
    return true
    // const removed = []
    // for(let i = 0; i < arr2.length; i++) {
    //     let idx = arr1.indexOf(arr2[i])
    //     if(idx !== -1 && (removed.length === 0 || idx > removed[removed.length - 1])) {
    //         removed.push(idx)
    //         arr1.splice(idx, 1, "#")
    //     } else {
    //         return false
    //     }        
    // }
    // return true
}

console.log(isSubArrInOrder([1,2,3,2], [2,3,2]))
console.log(isSubArrInOrder([1,2,3], [3,2]))
console.log(isSubArrInOrder([1,2,3], [1,2,3]))
console.log(isSubArrInOrder([1,2,3], [1,2,3,4]))
console.log(isSubArrInOrder([1,2,3], [2,2,3]))