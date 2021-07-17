class Solution:
    def search(self, i, j, idx):
        if idx == len(self.word) - 1: return True

        tmp = self.board[i][j]
        self.board[i][j] = "#"

        if i > 0 and self.board[i - 1][j] == self.word[idx + 1] and self.search(i - 1, j, idx + 1):
            return True

        if j < len(self.board[0]) - 1 and self.board[i][j + 1] == self.word[idx + 1] and self.search(i, j + 1, idx + 1):
            return True

        if i < len(self.board) - 1 and self.board[i + 1][j] == self.word[idx + 1] and self.search(i + 1, j, idx + 1):
            return True

        if j > 0 and self.board[i][j - 1] == self.word[idx + 1] and self.search(i, j - 1, idx + 1):
            return True
        
        self.board[i][j] = tmp        
        return False

    def exist(self, board, word):
        self.board = board
        self.word = word
        r = len(self.board)
        c = len(self.board[0])
        for i in range(r):
            for j in range(c):
                if self.board[i][j] == self.word[0] and self.search(i, j, 0):
                    return True
        return False

solution = Solution()

board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
print(solution.exist(board, "ABCCED"))

board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
print(solution.exist(board, "SEE"))

board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
print(solution.exist(board, "ABCB"))
