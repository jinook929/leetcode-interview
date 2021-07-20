var candyCrush = function(board) {
    let checkAgain = false
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length - 2; j++) {
            let tmpValue = Math.abs(board[i][j])
            if(tmpValue !== 0 && tmpValue === Math.abs(board[i][j + 1]) && tmpValue === Math.abs(board[i][j + 2])) {
                board[i][j] = board[i][j + 1] = board[i][j + 2] = -tmpValue
                checkAgain = true
            }
        }
    }
    
    for(let i = 0; i < board.length - 2; i++) {
        for(let j = 0; j < board[0].length; j++) {
            let tmpValue = Math.abs(board[i][j])
            if(tmpValue !== 0 && tmpValue === Math.abs(board[i + 1][j]) && tmpValue === Math.abs(board[i + 2][j])) {
                board[i][j] = board[i + 1][j] = board[i + 2][j] = -tmpValue
                checkAgain = true
            }
        }
    }
    
    for(let c = 0; c < board[0].length; c++) {
        let writingRow = board.length - 1
        for(let r = board.length - 1; r >= 0; r--) {
            if(board[r][c] > 0) {
                board[writingRow][c] = board[r][c]
                writingRow--
            }
        }
        while(writingRow >= 0) {
            board[writingRow][c] = 0
            writingRow--
        }
    }

    return checkAgain ? candyCrush(board) : board
}

board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
console.log(candyCrush(board))
board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
console.log(candyCrush(board))