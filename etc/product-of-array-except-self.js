var threeSum = function(nums) {
    let output = []
    let length = nums.length
    
    let left = [1]
    for(let i = 1; i < length; i++) {
        left.push(left[i - 1] * nums[i - 1]) 
    }

    let right = [1]
    for(let i = length -2; i >= 0; i--) {
        right.unshift(right[0] * nums[i + 1])
    }
    
    for(let i = 0; i < length; i++) {
        output.push(left[i] * right[i])
    }
    return output
};

console.log(threeSum([8,4,2,3]))