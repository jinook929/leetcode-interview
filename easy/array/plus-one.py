def plusOne(digits):
    # convertedDigits = [str(int) for int in digits]
    # return list(str(int("".join(convertedDigits)) + 1))

    for i in range(len(digits) - 1, -1, -1):
      if digits[i] < 9:
        digits[i] += 1
        return digits
      else:
        digits[i] = 0

    digits.insert(0, 1)
    return digits

print(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
print(plusOne([9,9,9]))
print(plusOne([1,2,3,9,9,9]))