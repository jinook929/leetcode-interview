var generate = function(numRows) {
    let output = [[1]]
    if(numRows === 1) return output

    for(let i = 1; i < numRows; i++) {
        let tmp = Array(i + 1)
        tmp[0] = 1
        tmp[tmp.length - 1] = 1
        for(let j = 1; j < i; j++) {
            tmp[j] = output[output.length - 1][j - 1] + output[output.length - 1][j]
        } 
        output.push(tmp)
    }

    return output
};

// console.log(generate(1))
// console.log(generate(2))
// console.log(generate(3))
// console.log(generate(4))
// console.log(generate(5))

/*

pascal(1) = [[1]]
pascal(2) = [...pascal(1), [1,1]]
pascal(3) = [...pascal(2), [1,2,1]]
pascal(4) = [...pascal(3), [1,3,3,1]]
pascal(5) = [...pascal(4), [1,4,6,4,1]]

*/

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
// console.log(pascalTriangle(200))
// console.log(pascalTriangle(3000))
// console.log(cache)