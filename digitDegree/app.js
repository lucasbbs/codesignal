function solution(n) {
    let counter = 0;
    while (String(String(n)).length > 1) {
        counter++
        let sum = 0
        const numbers = String(n).split('')
        for(number of numbers) {
            sum += Number(number)
        }
        n = sum
    }
    return counter
}
