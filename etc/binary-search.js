const binarySearch = (arr, x , strt=0, end=arr.length) => {
  if(end < strt) return -1;
  let mid = Math.floor((strt + end) / 2);
  if(arr[mid] === x) {
    return mid;
  }
  if(arr[mid] > x) {
    return binarySearch(arr, x , strt, mid-1);
  }
  if(arr[mid] < x) {
    return binarySearch(arr, x, mid+1, end);
  }
}

let arr = [1,3,5,7,8,9,11,12,14,15,16,20,21,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

for(let i = 0; i < 39999999; i++) {
    binarySearch(arr, 45)
}
console.log(`Index of Target by Binary Search = ${binarySearch(arr, 45)}`);
console.log(`Index of Target by Binary Search = ${binarySearch(arr, 28)}`);

const linearSearch = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return i
        }
    }
    return -1
}

for(let i = 0; i < 39999999; i++) {
    linearSearch(arr, 45)
}
console.log(`Index of Target by Linear Search = ${linearSearch(arr, 45)}`);
console.log(`Index of Target by Linear Search = ${linearSearch(arr, 28)}`);


const binarySearchWhile = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) return mid
        if(nums[mid] > target) right = mid - 1
        if(nums[mid] < target) left = mid + 1
    }
    return -1
}

console.log(`Index of Target by Binary Search (while) = ${binarySearchWhile(arr, 45)}`);
console.log(`Index of Target by Binary Search (while) = ${binarySearchWhile(arr, 28)}`);