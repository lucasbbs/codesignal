function solution(value1, weight1, value2, weight2, maxW) {
    if (weight1+weight2<=maxW) return value1 + value2
    else return Math.max(...[{value: value1, weight: weight1}, {value: value2, weight: weight2}].filter(i => i.weight <= maxW).map(i => i.value), 0)
}
