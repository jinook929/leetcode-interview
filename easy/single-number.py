def singleNumber(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    tmp = []
    
    for num in nums:
        if num in tmp:
            tmp.remove(num)
        else:
            tmp.append(num)
    
    return tmp[0]

print(singleNumber([4,1,2,1,2]))
