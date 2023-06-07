# Description

Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

## Example

- For `n = 5`, the output should be
`solution(n) = 0`;

- For `n = 100`, the output should be
`solution(n) = 1`.
`1 + 0 + 0 = 1`.

- For `n = 91`, the output should be
`solution(n) = 2`.
`9 + 1 = 10 -> 1 + 0 = 1`.

## Input/Output

- [execution time limit] 4 seconds (js)

- [memory limit] 1 GB

- [input] integer n

Guaranteed constraints:
5 ≤ n ≤ 109.

- [output] integer


## Tests
input|output
-|-
n: 5|0
n: 100|1
n: 91|2
n: 99|2
n: 1000000000|1
n: 9|0
n: 73|2
n: 877|2
n: 777773|3
n: 304|1

