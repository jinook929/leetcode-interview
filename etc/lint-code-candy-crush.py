def boardColumns(board):
    result = []
    currentColumn = 0
    for i in range(len(board[0])):
        row = []
        for j in range(len(board)):
            row.append(board[j][currentColumn])
        result.append(row)
        currentColumn += 1
    return result

def checkConsecutiveNumbers(board):
    toZero = []
    for i in range(len(board)):
        # row = [None] * (len(board[i]))
        board[i].append(None)
        currentNumIndex = 0
        numberCount = 1
        # for j in range(len(row)):
        for j in range(len(board[i]) - 1):
            if board[i][j] == board[i][j + 1] and board[i][j] != 0:
                numberCount += 1
            else:
                # if numberCount < 3:
                #     for k in range(numberCount):
                #         row[currentNumIndex + k] = board[i][currentNumIndex]
                # elif board[i][j] != 0:
                if numberCount >= 3 and board[i][j] != 0:
                    for l in range(numberCount):
                        toZero.append([i, j - (numberCount - 1) + l])
                        # row[currentNumIndex + l] = 0
                currentNumIndex += numberCount
                numberCount = 1
    return toZero

def removeZeroes(board):
    tmp = boardColumns(board)
    newColumns = []
    for i in range(len(tmp)):
        column = []
        zeroCount = 0
        for j in range(len(tmp[i])):
            if tmp[i][len(tmp[i]) - 1 - j] != 0:
                column.insert(0, tmp[i][len(tmp[i]) - 1 - j])
            else:
                zeroCount += 1
        for k in range(zeroCount):
            column.insert(0, 0)
        newColumns.append(column)
    tmp = newColumns
    convertedBoard = []
    currentRow = 0
    for i in range(len(tmp[0])):
        row = []
        for j in range(len(tmp)):
            row.append(tmp[j][currentRow])
        currentRow += 1
        convertedBoard.append(row)
    return convertedBoard

def candyCrush(board):
    # Write your code here
    while checkConsecutiveNumbers(board) + checkConsecutiveNumbers(boardColumns(board)) != []:
        boardColumnWay = boardColumns(board)
        tmp = []
        for pair in checkConsecutiveNumbers(boardColumnWay):
            tmp.append([pair[1], pair[0]])
        sameNumArr = checkConsecutiveNumbers(board) + tmp
        for pair in sameNumArr:
            board[pair[0]][pair[1]] = 0
        newBoard = []
        for row in board:
            newBoard.append([x for x in row if x is not None])
        board = removeZeroes(newBoard)
        # print(f"board now ===> {board}")
    result = []
    for row in board:
        result.append([x for x in row if x is not None])
    return result

board = [
    [110,5,112,113,114],
    [210,211,5,213,214],
    [310,311,3,313,314],
    [410,411,412,5,414],
    [5,1,512,3,3],
    [610,4,1,613,614],
    [710,1,2,713,714],
    [810,1,2,1,1],
    [1,1,2,2,2],
    [4,1,4,4,1014]
]

print(candyCrush(board))
# print(checkConsecutiveNumbers(board))
# print(boardColumns(board))

# board2 = [[110, 5, 112, 113, 114], [210, 211, 5, 213, 214], [310, 311, 3, 313, 314], [410, 411, 412, 5, 414], [5, 1, 512, 3, 3], [610, 4, 1, 613, 614], [710, 0, 0, 713, 714], [810, 0, 0, 1, 1], [1, 0, 0, 0, 0], [4, 0, 4, 4, 1014]]
# candyCrush(board2)