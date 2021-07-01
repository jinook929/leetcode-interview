function toKebabCase(str) {
    return `${str.replace(/\s/ig, "-").toLowerCase()}.js`
}
console.log(toKebabCase( "Merge Two Sorted Lists" ))