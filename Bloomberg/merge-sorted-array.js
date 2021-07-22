var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }
    nums1.sort((a,b) => a-b)
    return nums1
    // let tmpIdx = 0
    // let extra = 0
    // for(let i = 0; i < m + extra; i++) {
    //     while(nums1[i] >= nums2[tmpIdx]) {
    //         nums1.pop()
    //         nums1.splice(i, null, nums2[tmpIdx])
    //         tmpIdx++
    //         extra++
    //     }
    // }
    // for(let i = extra; i < n; i++) {
    //     nums1.splice(m + i, 1, nums2[i])
    // }

    // return nums1
};

console.log(merge([1,3,5,0,0,0,0,0], 3, [2,2,5,6,7], 5))

// 1: <2
// 3: >=2, <5
// 5: >=5
// add rest
// push(6,7)