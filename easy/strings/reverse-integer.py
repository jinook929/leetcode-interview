def reverse(x):
  num = str(x)[::-1]
  if num[-1] == "-":
    return 0 if int(num[:-1]) >= 2 ** 31 else int(f"-{int(num[:-1])}")
  return 0 if int(num) > 2 ** 31 - 1 else int(num)

print(reverse(123))
print(reverse(-123))
print(reverse(120))
print(reverse(-120))
print(reverse(2147483648))
print(reverse(-2147483648))

a = [1,2,3,4,5]
# a[start:stop:step]
print(a[1:4:2])
# => [2,4]