function numberOfIslands(grid) {
    let counter = 0
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === "1") {
                counter++
                dfs(grid, i, j)
            }
        }
    }
    return counter
}

function dfs(grid, i, j) {
    // base case to stop advancing
    if(j >= grid[0].length || i >= grid.length || j < 0 || i < 0 || grid[i][j] === "0") return

    grid[i][j] = "0"
    dfs(grid, i, j + 1)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i - 1, j)
}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
console.log(numberOfIslands(grid))
grid = [
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]
]
console.log(numberOfIslands(grid))
grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
console.log(numberOfIslands(grid))