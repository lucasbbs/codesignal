# Description

You found two items in a treasure chest! The first item weighs `weight1` and is worth `value1`, and the second item weighs `weight2` and is worth `value2`. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is `maxW` and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

## Example

- For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
`solution(value1, weight1, value2, weight2, maxW) = 10`.

You can only carry the first item.

- For `value1 = 10`, `weight1 = 5`, `value2 = 6`, `weight2 = 4`, and `maxW = 9`, the output should be
`solution(value1, weight1, value2, weight2, maxW) = 16`.

You're strong enough to take both of the items with you.

- For `value1 = 5`, `weight1 = 3`, `value2 = 7`, `weight2 = 4`, and `maxW = 6`, the output should be
`solution(value1, weight1, value2, weight2, maxW) = 7`.

You can't take both items, but you can take any of them.

## Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer value1

Guaranteed constraints:
`2 ≤ value1 ≤ 20`.

[input] integer weight1

Guaranteed constraints:
`2 ≤ weight1 ≤ 10`.

[input] integer value2

Guaranteed constraints:
`2 ≤ value2 ≤ 20`.

[input] integer weight2

Guaranteed constraints:
`2 ≤ weight2 ≤ 10`.

[input] integer maxW

Guaranteed constraints:
`1 ≤ maxW ≤ 20`.

[output] integer

## Tests

input|output
-|-
value1: 10<br/>weight1: 5<br/>value2: 6<br/>weight2: 4<br/>maxW: 8|10
value1: 10<br/>weight1: 5<br/>value2: 6<br/>weight2: 4<br/>maxW: 9|16
value1: 5<br/>weight1: 3<br/>value2: 7<br/>weight2: 4<br/>maxW: 6|7
value1: 10<br/>weight1: 2<br/>value2: 11<br/>weight2: 3<br/>maxW: 1|0
value1: 15<br/>weight1: 2<br/>value2: 20<br/>weight2: 3<br/>maxW: 2|15
value1: 2<br/>weight1: 5<br/>value2: 3<br/>weight2: 4<br/>maxW: 5|3
value1: 4<br/>weight1: 3<br/>value2: 3<br/>weight2: 4<br/>maxW: 4|4
value1: 3<br/>weight1: 5<br/>value2: 3<br/>weight2: 8<br/>maxW: 10|3



