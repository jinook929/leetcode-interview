var isValid = function(s) {
    let stack = []
    let pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for(let el of s) {
        if(el === "(" || el === "{" || el === "[") {
            stack.push(el)
        } else {
            let current = stack.pop()
            if(pairs[current] !== el) return false
        }
    }
    return stack.length === 0 ? true : false
};

console.log(isValid("(){}")); // returns true
console.log(isValid("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(isValid("({(()))}}"));  // returns false