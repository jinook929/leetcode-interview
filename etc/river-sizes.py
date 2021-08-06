def riverSizes(matrix):
  result = []
  visited = [[False for el in row] for row in matrix]

  for i in range(len(matrix)):
    for j in range(len(matrix[0])):
      if visited[i][j]:
        continue
      traverseNode(i, j, matrix, visited, result)

  return result

def traverseNode(i, j, matrix, visited, result):
  currentSize = 0
  nodeStackToCheck = [[i, j]]

  while nodeStackToCheck:
    currentNode = nodeStackToCheck.pop()
    y = currentNode[0]
    x = currentNode[1]
    if visited[y][x]:
      continue
    visited[y][x] = True
    if matrix[y][x] == 0:
      continue
    currentSize += 1

    # right
    if x < len(matrix[0]) - 1 and not visited[y][x + 1]:
      nodeStackToCheck.append([y, x + 1])
    # down
    if y < len(matrix) - 1 and not visited[y + 1][x]:
      nodeStackToCheck.append([y + 1, x])
    # left
    if x > 0 and not visited[y][x - 1]:
      nodeStackToCheck.append([y, x - 1])
    # up
    if y > 0 and not visited[y - 1][x]:
      nodeStackToCheck.append([y - 1, x])

  if currentSize > 0: 
    result.append(currentSize)

matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
print(riverSizes(matrix))