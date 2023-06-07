# Description

Given the string, check if it is a palindrome.

## Example

- For `inputString = "aabaa"`, the output should be
`checkPalindrome(inputString) = true`;

- For `inputString = "abac"`, the output should be
`checkPalindrome(inputString) = false`;

- For `inputString = "a"`, the output should be
`checkPalindrome(inputString) = true`.

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
$1 ≤ inputString.length ≤ 10^5$.

- [output] boolean

`true` if `inputString` is a palindrome, `false` otherwise.

## Tests

|input|output|
|-----|------|
|inputString: "aabaa"|true|
|inputString: "abac"|false|
|inputString: "a"|true|
|inputString: "az"|false|
|inputString: "abacaba"|true|  
|inputString: "z"|true|
|inputString: "aaabaaaa"|false|
|inputString: "zzzazzazz"|false|
|inputString: "hlbeeykoqqqqokyeeblh"|true|
|inputString: "hlbeeykoqqqokyeeblh"|true|



