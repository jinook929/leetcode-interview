function toKebabCase(str) {
    console.log(`${str.replace(/\s/ig, "-").toLowerCase()}.py`)
    return `${str.replace(/\s/ig, "-").toLowerCase()}.js`
}
console.log(toKebabCase( "Product of Array Except Self" ))
