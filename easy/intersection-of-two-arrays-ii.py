def checkIntersection(moreNums, lessNums):
  result = []
  for num in lessNums:
    if num in moreNums:
      result.append(num)
      moreNums.remove(num)
  return result

def intersect(nums1, nums2):
  if len(nums1) > len(nums2):
    return checkIntersection(nums1, nums2)
  else:
    return checkIntersection(nums2, nums1)

print(intersect([4,9,5], [9,4,9,8,4]))