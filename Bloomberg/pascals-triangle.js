/*
pascalTriangle(1) = [[1]]
pascalTriangle(2) = [...pascalTriangle(1), [1,1]]
pascalTriangle(3) = [...pascalTriangle(2), [1,2,1]]
pascalTriangle(4) = [...pascalTriangle(3), [1,3,3,1]]
pascalTriangle(5) = [...pascalTriangle(4), [1,4,6,4,1]]
*/

// 1 => 1
// 2 => 11
// 3 => 121
// 4 => 1331
// 5 => 14641

//// brute force
// const pascalTriangle = function(numRows) {
//     let output = [[1]]
//     for(let i = 1; i < numRows; i++) {
//         let tmp = Array(i + 1)
//         tmp[0] = 1
//         tmp[tmp.length - 1] = 1
//         for(let j = 1; j < i; j++) {
//             tmp[j] = output[output.length - 1][j - 1] + output[output.length - 1][j]
//         } 
//         output.push(tmp)
//     }
//     return output
// };

//// recursion
// const pascalTriangle = (numRows) => {
//     // base case
//     if(numRows === 1) return [[1]]

//     let result = pascalTriangle(numRows - 1)
//     let tmp = Array(numRows)
//     tmp[0] = 1
//     tmp[numRows - 1] = 1
//     for(let i = 1; i < numRows - 1; i++) {
//         tmp[i] = result[result.length - 1][i] + result[result.length - 1][i - 1]
//     }
//     result.push(tmp)
//     return result
// }

//// recursion + memoization
const cache = new Map()
const pascalTriangle = (rowNum, output = [[1]]) => {
    // base case
    if(rowNum === 1) return output    
    pascalTriangle(rowNum - 1, output)
    let tmp
    if(cache.get(rowNum)) {
        tmp = cache.get(rowNum)
    } else {
        tmp = Array(rowNum)
        tmp[0] = 1 
        tmp[tmp.length - 1] = 1
        for(let i = 0; i < rowNum - 2; i ++) {
            tmp[i + 1] = output[output.length - 1][i] + output[output.length - 1][i + 1] 
        }
        cache.set(rowNum, tmp)
    }
    output.push(tmp)    
    return output
}

for(let i = 0; i < 355555; i++) {
    pascalTriangle(73)
}
console.log(pascalTriangle(73)[pascalTriangle(73).length - 1])
console.log(pascalTriangle(5))
console.log(pascalTriangle(1))
console.log(pascalTriangle(2))
console.log(pascalTriangle(3))
console.log(pascalTriangle(4))
// console.log(pascalTriangle(200))
// console.log(pascalTriangle(3000))
// console.log(cache)


//// recursion + memoization with BUG
// const cache = new Map()
// const pascalTriangle = (numRows) => {
//     // base case
//     if(numRows === 1) return [[1]]

//     if(cache[numRows]) return cache[numRows]

//     let result = pascalTriangle(numRows - 1)
//     let tmp = Array(numRows)
//     tmp[0] = 1 
//     tmp[numRows - 1] = 1
//     for(let i = 1; i < numRows - 1; i++) {
//         tmp[i] = result[result.length - 1][i] + result[result.length - 1][i - 1]
//     }
//     result.push(tmp)
//     cache[`${numRows}_${result}`] = result
//     console.log(numRows, "after cache", cache)
//     return result
// }