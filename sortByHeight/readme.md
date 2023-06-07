# Description
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

## Example

For `a = [-1, 150, 190, 170, -1, -1, 160, 180]`, the output should be
`sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]`.

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] `array.integer a`

If `a[i] = -1`, then the $i^\{th}$ position is occupied by a tree. Otherwise `a[i]` is the height of a person standing in the $i^\{th}$ position.

Guaranteed constraints:
`1 ≤ a.length ≤ 1000`,
`-1 ≤ a[i] ≤ 1000`.

- [output] array.integer

Sorted array a with all the trees untouched.

|input|output| 
|-----|------|
|`a: [-1, 150, 190, 170, -1, -1, 160, 180]`|`[-1, 150, 160, 170, -1, -1, 180, 190]`| 
|`a: [-1, -1, -1, -1, -1]`|`[-1, -1, -1, -1, -1]`| 
|`a: [-1]`|`[-1]`| 
|`a: [4, 2, 9, 11, 2, 16]`|`[2, 2, 4, 9, 11, 16]`| 
|`a: [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]`|`[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]`| 
|`a: [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]`|`[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]`| 
