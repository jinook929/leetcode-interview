const rotate = matrix => {
    // let result = []
    // for(let i = 0; i < matrix.length; i++) {
    //     result.push([])
    //     for(let j = 0; j < matrix.length; j++) {
    //         result[i].push(0)
    //     }
    // }
    const result = Array(matrix.length).fill(null).map(arr => Array(matrix.length))
    let lastColumn = matrix.length - 1
    for(const row of matrix) {
        for(let i = 0; i < matrix.length; i++) {
            result[i][lastColumn] = row[i]
        }
        lastColumn--
    }
    for(let i = 0; i < result.length; i++) {
        matrix[i] = result[i]
    }
    return matrix
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[1,2],[3,4]]))
console.log(rotate([[1]]))