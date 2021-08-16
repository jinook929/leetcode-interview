function largestNum(array) {
    const result = array[0]
    // base case
    if (array.length <= 1) {
        return result
    }
    
    if (array[0] > array[1]) {
        array[1] = array[0]
        return largestNum(array.splice(1, array.length))
    } else {
        return largestNum(array.splice(1, array.length))
    }
}

let a = [2, 7, 4, 1, 3]
// result = 2
// array.length = 5 > 1
// array[0] = 2 / array[1] = 7
// ===> largestNum([7,4,1,3])
console.log(largestNum(a))