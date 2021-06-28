const strStr = (haystack, needle) => {
    return haystack.toLowerCase().indexOf(needle.toLowerCase())
};

console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
console.log(strStr("", ""))