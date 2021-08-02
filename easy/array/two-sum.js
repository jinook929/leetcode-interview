const twoSum = (nums, target) => {
  // prepare a map
  const numsMap = new Map

  // loop thru array
  for(let i = 0; i < nums.length; i++) {
    // check complement to target of i-th el
    const complement = target - nums[i]
    // return indices if map has the complement
    if(numsMap.has(complement)) return [numsMap.get(complement), i]
    // add new case to map with index
    numsMap.set(nums[i], i)
  }
}

// var twoSum = function(nums, target) {
//   // for(let i = 0; i < nums.length; i++) {
//   //     for(let j = i + 1; j < nums.length; j++) {
//   //         if(nums[i] + nums[j] === target) {
//   //             return [i, j]
//   //         }
//   //     }
//   // }

//   const obj = {}
//   for(const [i, v] of nums.entries()) {
//       const gap = target - v
//       if(Object.keys(obj).includes(gap.toString())) {
//           return [obj[gap], i]
//       }
//       obj[v] = i
//   }
//   return []
// };

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([2,7,11,15], 22))
