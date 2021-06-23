var intersect = function(nums1, nums2) {
  if(nums1.length > nums2.length) {
      return checkIntersection(nums1, nums2)
  } else {
      return checkIntersection(nums2, nums1)
  }
};

const checkIntersection = (moreNums, lessNums) => {
  const result = []
  for(const num of lessNums) {
      if(moreNums.includes(num)) {
          result.push(num)
          moreNums.splice(moreNums.indexOf(num), 1)
      }
  }
  return result
}

console.log(intersect([1,2,2,1], [2,2]))