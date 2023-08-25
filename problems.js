//ADD TO ZERO

//Time complexity is O(n^2)
//Space complexity is O(1)

function addToZero(n){
    let test = false
    for(let i = 0; i < n.length; i++){
        for(let j = i + 1; j < n.length; j++){
            if(n[i] + n[j] === 0){
                console.log('True')
                test = true
                
            }
        }
    }
   if(test === false){
    console.log('False')
   }
   return test
}
addToZero([])
addToZero([1])
addToZero([1,2,3])
addToZero([1,2,3,-2])

// HAS UNIQUE CHARACTERS
// Time complecity is O(n) as set has a time complexity of n
// Space complexity of O(1)

function hasUniqueChars(w){
    return new Set(w).size === w.length
}

console.log(hasUniqueChars("friday"))
console.log(hasUniqueChars("fridayyy"))

// IS PANGRAM 
// Time and space complexity is O(1) as the length of the alphabet is known
function isPangram(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const lowercaseSentence = s.toLowerCase()

    for (const letter of alphabet) {
        if (!lowercaseSentence.includes(letter)) {
            return false
        }
    }
    return true
}

const s1 = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(s1)) 

const s2 = "Hello, world!"
console.log(isPangram(s2))

//LONGEST WORD
//Time complexity is O(n)
//Space complexity is O(1)

function longetsWord(a){
    let count = 0
    for(let i =0; i < a.length; i++){
        if(a[i].length > count) {
            count = +(a[i].length)
        }
    }
    return count
}

console.log(longetsWord(['hi', 'goodbye']))