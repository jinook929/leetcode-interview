function toKebabCase(str) {
    console.log(`${str.replace(/\s/ig, "-").toLowerCase()}.py`)
    return `${str.replace(/\s/ig, "-").toLowerCase()}.js`
}
console.log(toKebabCase( "Number of Islands" ))
