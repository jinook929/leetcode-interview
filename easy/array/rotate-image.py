def rotate(matrix):
    result = [[0 for _ in matrix[0]] for _ in matrix]
    last_column = len(matrix) - 1

    for row in matrix:
        for i in range(len(matrix)):
            result[i][last_column] = row[i]
        last_column -= 1
        
    for i in range(len(result)):
        matrix[i] = result[i]

    return matrix

matrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
]
print(rotate(matrix))