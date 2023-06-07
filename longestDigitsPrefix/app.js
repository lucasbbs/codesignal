function solution(inputString) {
let word = ''
const chars = inputString.split('')
for (char of chars){
    if (!isNaN(char) && char !== ' '){
        word += char
    } else {
        break
    }
}
return word
}
