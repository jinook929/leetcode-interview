let start = 0
let end = 0
var moveZeroes = function(nums) {
  // if(start === 0) start = Date.now()
  // let counter = 0
  // for(let i = 0; i < nums.length; i++) {
  //     if(nums[i] === 0) {
  //         counter++
  //     }
  // }
  // const tmp= nums.filter(n => n !== 0)
  // const zeroes = Array(counter).fill(0)
  // if(Date.now() > end) end = Date.now()
  // return [...tmp, ...zeroes]

  if(start === 0) start = Date.now()
  let index = 0
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] != 0) {
          nums[index] = nums[i]
          index++
      }
  }
  for(let i = index; i < nums.length; i++) {
      nums[i] = 0
  }
  if(Date.now() > end) end = Date.now()
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))

for(let i = 0; i < 1000000; i++) {
  moveZeroes([0,1,0,3,12])
  moveZeroes([0,0,1])
}

console.log(start, end)
console.log("runtime:", end - start)