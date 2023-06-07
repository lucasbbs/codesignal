# Description

Given an array of strings, return another array containing all of its longest strings.

## Example

For `inputArray = ["aba", "aa", "ad", "vcd", "aba"]`, the output should be
`allLongestStrings(inputArray) = ["aba", "vcd", "aba"]`.

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] array.string inputArray

A non-empty array.

Guaranteed constraints:
`1 ≤ inputArray.length ≤ 10`,
`1 ≤ inputArray[i].length ≤ 10`.

- [output] array.string

Array of the longest strings, stored in the same order as in the inputArray.

## Tests

|input|output|
|-----|------|
|`inputArray:<br/>["aba", <br /> "aa",<br />"ad",<br />"vcd",<br />"aba"]|["aba",<br /> "vcd",<br /> "aba"]|
|`inputArray: ["aa"]|["aa"]|
|`inputArray:<br/>["abc", <br /> "eeee",<br />"abcd",<br />"dcd"]|["eeee",<br /> "abcd"]|
|`inputArray:<br/>["a", <br /> "abc",<br />"cbd",<br />"zzzzzz",<br />"a",<br />"abcdef",<br />"asasa",<br />"aaaaaa"]|["zzzzzz",<br /> "abcdef",<br /> "aaaaaa"]|
|`inputArray:<br/>["enyky", <br /> "benyky",<br />"yely",<br />"varennyky"]|["varennyky"]|
|`inputArray:<br/>["abacaba", <br /> "abacab",<br />"abac",<br />"xxxxxx"]|["abacaba"]|
|`inputArray:<br/>["young", <br /> "yooooooung",<br />"hot",<br />"or",<br />"not",<br />"come",<br />"on",<br />"fire",<br />"water",<br />"watermelon"]|["yooooooung",<br /> "watermelon"]|
|`inputArray:<br/>["onsfnib", <br /> "aokbcwthc",<br />"jrfcw"]|["aokbcwthc"]|
|`inputArray: ["lbgwyqkry"]|["lbgwyqkry"]|
|`inputArray: ["i"]|["i"]|
