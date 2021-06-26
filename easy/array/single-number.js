var singleNumber = function(nums) {
  const tmp = []
  
  for(const num of nums) {
      if(tmp.includes(num)) {
          tmp.splice(tmp.indexOf(num), 1)
      } else {
          tmp.push(num)
      }
  }
  
  return tmp[0]
};

console.log(singleNumber([4,1,2,1,2]))
