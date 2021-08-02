/*
crush characters repeating 3 or more times
ABBBCC -> ACC
ABCCCBB -> A
ABCCCCCBBAAC -> C
*/
// [60, 61, -62, -62, -62, -62, 61, 61]
// [60, 61, 61, 61]

// identify the same letters
// crush the letters
// repeat until there's no more 3 same letter sequence

// left / right

function candyCrush(s) {
    let checkAgain = true
    
    while(checkAgain) {
        checkAgain = false
        let counter = 0
        let left = 0
        let right = 0
        for(let i = 0; i < s.length - 1; i++) {
            if(s[left] === s[right]) {
                right++
                counter++
            } else {
                // ACCBBBBC -> ACC . C
                if(counter >= 3) {
                    s.splice(left, right) // remove the chars bertween left and right
                    right = 0
                    left = 0
                }
            }
        
        }
    }
    return s
}