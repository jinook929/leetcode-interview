def isSelfDescriptiveNumber(num):
    num_str = str(num)
    nums = {}
    for i in range(len(num_str)):
        nums[i] = num_str.count(str(i))
    for i in range(len(num_str)):
        if num_str[i] != str(nums[i]):
            return False
    return True

a = 1210
b = 2020
c = 21200
d = 3211000
e = 42101000
f = 521001000
g = 6210001000

print(isSelfDescriptiveNumber(a)) # True
print(isSelfDescriptiveNumber(b)) # True
print(isSelfDescriptiveNumber(c)) # True
print(isSelfDescriptiveNumber(d)) # True
print(isSelfDescriptiveNumber(e)) # True
print(isSelfDescriptiveNumber(f)) # True
print(isSelfDescriptiveNumber(g)) # True
print(isSelfDescriptiveNumber(22)) # False
