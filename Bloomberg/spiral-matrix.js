const spiralOrder = matrix => {
    let output = []

    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1

    while(left <= right && top <= bottom) {
        for(let c = left; c <= right; c++) {
            output.push(matrix[top][c])
        }
        top++

        for(let r = top; r <= bottom; r++) {
            output.push(matrix[r][right])
        }
        right--

        if(top <= bottom) {
            for(let c = right; c >= left; c--) {
                output.push(matrix[bottom][c])
            }            
        }
        bottom--
        
        if(left <= right) {
            for(let r = bottom; r >= top; r--) {
                output.push(matrix[r][left])
            }
        }
        left++
    }
    console.log(matrix)
    return output
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(spiralOrder(matrix))

matrix = [
    [ 1,  2,  3],
    [ 4,  5,  6],
    [ 7,  8,  9],
    [10, 11, 12]
]
console.log(spiralOrder(matrix))

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]
console.log(spiralOrder(matrix))

matrix = [
    [ 1, 2, 3, 4],
    [ 5, 6, 7, 8],
    [ 9,10,11,12],
    [13,14,15,16]
]
console.log(spiralOrder(matrix))

matrix = [
    [ 1, 2, 3, 4, 5],
    [ 6, 7, 8, 9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]
console.log(spiralOrder(matrix))