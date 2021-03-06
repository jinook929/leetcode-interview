const exist = (board, word) => {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0] && backtrack(i, j, board, word, 0)) {
                return true
            }
        }
    }
    return false
}

function backtrack(i, j, board, word, idx) {
    // base case
    if(idx === word.length - 1) return true

    // mark starting location
    board[i][j] = "@"

    // check up
    if(i > 0 && board[i-1][j] === word[idx+1] && backtrack(i-1, j, board, word, idx+1)) {
        board[i][j] = word[idx]
        return true
    }

    // check right
    if(j < board[0].length - 1 && board[i][j+1] === word[idx+1] && backtrack(i, j+1, board, word, idx+1)) {
        board[i][j] = word[idx]
        return true
    }

    // check down
    if(i < board.length - 1 && board[i+1][j] === word[idx+1] && backtrack(i+1, j, board, word, idx+1)) {
        board[i][j] = word[idx]
        return true
    }

    // check left
    if(j > 0 && board[i][j-1] === word[idx+1] && backtrack(i, j-1, board, word, idx+1)) {
        board[i][j] = word[idx]
        return true
    }

    // restore starting location value
    board[i][j] = word[idx]

    return false
}

// const exist = (board, word) => {    
//     let output = false;    
//     let temp = [], arrived = [];    
//     let i = 0, j = 0;    

//     for(i = 0; i < board.length; i++) {        
//         for(j = 0; j < board[0].length; j++) {            
//             temp[temp.length] = false;        
//         }        
//         arrived[arrived.length] = temp;        
//         temp = [];    
//     }    

//     for(i = 0; i < board.length; i++) {        
//         for(j = 0; j < board[0].length; j++) {            
//             if(board[i][j] == word.charAt(0)) {                
//                 arrived[i][j] = true;                
//                 output = doExist(board, word.slice(1), i, j, arrived) || output;                
//                 arrived[i][j] = false;            
//             }            
//             if(output) {                
//                 break;            
//             }        
//         }        
//         if(output) {            
//             break;        
//         }    
//     }    
//     return output;
// };

// function doExist(board, leftWord, r, c, arrived) {    
//     if(leftWord.length == 0) {        
//         return true;    
//     }    
//     let i = 0, j = 0, output = false;    
//     for(i = -1; i < 2; i++) {        
//         for(j = -1; j < 2; j++) {            
//             if(i == j || i * j == -1) {                
//                 continue;            
//             }            
//             if(r + i < 0 || r + i >= board.length || c + j < 0 ||
//                   c + j >= board[0].length) {                
//                 continue;            
//             }            
//             if(!arrived[r + i][c + j] && board[r + i][c + j] == leftWord.charAt(0)) {                
//                 arrived[r + i][c + j] = true;                
//                 output = doExist(board, leftWord.slice(1), r + i, c + j, arrived) || output;                
//                 arrived[r + i][c + j] = false;            
//             }            
//             if(output) {                
//                 break;            
//             }        
//         }        
//         if(output) {            
//             break;        
//         }    
//     }    
//     return output;
// }

let board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
console.log(exist(board, "ABCCED"))
console.log(board)

board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
console.log(exist(board, "SEE"))
console.log(board)

board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
console.log(exist(board, "ABCB"))
console.log(board)