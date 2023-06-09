# Description
Given two strings, find the number of common characters between them.

## Example

For `s1 = "aabcc"` and `s2 = "adcaa"`, the output should be
`commonCharacterCount(s1, s2) = 3`.

Strings have `3` common characters - `2` "a"s and `1` "c".

Input/Output

- [execution time limit] 4 seconds (js)

- [input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
`1 ≤ s1.length ≤ 15`.

- [input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
`1 ≤ s2.length ≤ 15`.

- [output] integer

## Tests

|input| output|
|-----|-------|
|s1: "aabcc"<br /> s2: "adcaa"|3|
|s1: "zzzz"<br /> s2: "zzzzzzz"|4|
|s1: "abca"<br /> s2: "xyzbac"|3|
|s1: "a"<br /> s2: "b"|0|
|s1: "a"<br /> s2: "aaa"|1|
