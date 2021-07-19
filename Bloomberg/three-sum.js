var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    let output = []
    let length = nums.length

    for (let i = 0; i < length - 2; ++i) {
        let currentNum = nums[i]
        if (i === 0 || nums[i - 1] !== currentNum) {
            let lo = i + 1
            let hi = length - 1
            while (lo < hi) {
                let sum = currentNum + nums[lo] + nums[hi]
                if (sum < 0) {
                    lo++
                } else if (sum > 0) {
                    hi--
                } else {
                    output.push([currentNum, nums[lo], nums[hi]])
                    lo++
                    hi--
                    while (nums[lo] === nums[lo - 1]) {
                        lo++
                    }
                }
            }
        }
    }
    return output;
}

nums = [-4,-1,-1,0,1,2]

// console.log(threeSum(nums))
// console.log(threeSum([]))
// console.log(threeSum([0]))
console.log(threeSum([-7,-3,-1,0,1,2,2,3,4,4,5,5,5,5,7]))
