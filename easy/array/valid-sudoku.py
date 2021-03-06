import math

def isValidUnit(unit):
  numList = sorted(filter(lambda x: x != ".", unit))
  for i in range(len(numList) - 1):
    if numList[i] == numList[i+1]:
      return False
  return True

def isValidSudoku(board):
  columns = [["."] * 9 for _ in range(9)]
  boxes = [["."] * 9 for _ in range(9)]
  
  for i in range(9):
    for j in range(9):
      columns[i][j] = board[j][i]
      boxes[i][j] = board[math.floor(j/3)+math.floor(i/3)*3][j%3+i%3*3]

  for i in range (9):
    if not (isValidUnit(board[i]) and isValidUnit(columns[i]) and isValidUnit(boxes[i])):
      return False

  return True

board1 = [
  ["5","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]
]
board2 = [
  ["8","3",".",".","7",".",".",".","."]
 ,["6",".",".","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]
]
board3 = [
  ["5","3",".",".","7",".","1",".","."]
 ,["6",".","3","1","9","5",".",".","."]
 ,[".","9","8",".",".",".",".","6","."]
 ,["8",".",".",".","6",".",".",".","3"]
 ,["4",".",".","8",".","3",".",".","1"]
 ,["7",".",".",".","2",".",".",".","6"]
 ,[".","6",".",".",".",".","2","8","."]
 ,[".",".",".","4","1","9",".",".","5"]
 ,[".",".",".",".","8",".",".","7","9"]
]

print(isValidSudoku(board1))
print(isValidSudoku(board2))
print(isValidSudoku(board3))
