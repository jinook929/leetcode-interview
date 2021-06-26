def twoSum(nums, target):
    # index = 0
    # for n in nums:
    #     index += 1
    #     for i in range(index, len(nums)):
    #         if n + nums[i] == target:
    #             return [nums.index(n), i]
    values = {}
    for i, el in enumerate(nums):
        diff = target - el
        print(f"diff = {diff}")
        if diff in values:
            print(f"i = {i} / values[diff] = {values[diff]}")
            return [values[diff], i]
        values[el] = i
        
    return []

# print(twoSum([2,7,11,15], 9))
# print(twoSum([3,2,4], 6))
print(twoSum([2,7,11,15], 22))

# for i, el in enumerate([2,7,11,15]):
#   print(tuple((i, el)))
# for i, el in enumerate([2,7,11,15]):
#   print(tuple((el, i)))
