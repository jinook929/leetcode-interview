def checkIntersection(moreNums, lessNums):
      result = []
  for num in lessNums:
    if num in moreNums:
      result.append(num)
      moreNums.remove(num)
  return result

# def checkIntersection(moreNums, lessNums):
#   result = []
#   nums = {}  
#   for num in moreNums:    
#     nums[num] = 1 if num not in nums else nums[num] + 1
#   for num in lessNums:
#     if num in moreNums and nums[num] > 0:
#       result.append(num)
#       nums[num] -= 1
#   return result

def intersect(nums1, nums2):
  if len(nums1) > len(nums2):
    return checkIntersection(nums1, nums2)
  else:
    return checkIntersection(nums2, nums1)

print(intersect([4,9,5], [9,4,9,8,4]))