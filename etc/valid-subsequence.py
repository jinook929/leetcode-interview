def isValidSubsequence(arr, seq):
  arrIdx = 0
  seqIdx = 0
  while arrIdx < len(arr) and seqIdx < len(seq):
    if arr[arrIdx] == seq[seqIdx]:
      seqIdx += 1
      if seqIdx == len(seq): return True
    arrIdx += 1
  return False

arr = [5, 1, 22, 25, 6, -1, 8, 10]
seq = [22, 25, 6]
print(isValidSubsequence(arr, seq))

arr = [5, 1, 22, 25, 6, -1, 8, 10]
seq = [1, 6, -1, 10]
print(isValidSubsequence(arr, seq))

arr = [5, 1, 22, 25, 6, -1, 8, 10]
seq = [5, 1, 22, 25, 6, -1, 8, 10, 12]
print(isValidSubsequence(arr, seq))

arr = [5, 1, 22, 25, 6, -1, 8, 10]
seq = [4, 5, 1, 22, 25, 6, -1, 8, 10]
print(isValidSubsequence(arr, seq))

arr = [1, 1, 6, 1]
seq = [1, 1, 1, 6]
print(isValidSubsequence(arr, seq))