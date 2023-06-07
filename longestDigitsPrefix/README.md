# Description

Given a string, output its longest prefix which contains only digits.

## Example

For `inputString = "123aa1"`, the output should be
`solution(inputString) = "123"`.

## Input/Output

- [execution time limit] 4 seconds (js)

- [memory limit] 1 GB

- [input] string inputString

Guaranteed constraints:
`3 ≤ inputString.length ≤ 100`.

- [output] string

## Tests

input|output
-|-
inputString: "123aa1"|"123"
inputString: "0123456789"|"0123456789"
inputString: "  3) always check for whitespaces"|""
inputString: "12abc34"|"12"
inputString: "the output is 42"|""
inputString: "aaaaaaa"|""

