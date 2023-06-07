function allLongestStrings(inputArray) {
    return inputArray.filter(v=> v.length == Math.max(...inputArray.map((v,i,a)=> v.length)));
}