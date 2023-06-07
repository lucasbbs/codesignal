# Description

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

## Example

For `inputArray = [3, 6, -2, -5, 7, 3]`, the output should be
`adjacentElementsProduct(inputArray) = 21`.

`7` and `3` produce the largest product.

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
`2 ≤ inputArray.length ≤ 10`,
`-1000 ≤ inputArray[i] ≤ 1000`.

- [output] integer

The largest product of adjacent elements.

## Tests

|input|output|
|-|-|
|inputArray: [3, 6, -2, -5, 7, 3]|21|
|inputArray: [-1, -2]|2|
|inputArray: [5, 1, 2, 3, 1, 4]|6|
|inputArray: [1, 2, 3, 0]|6|
|inputArray: [9, 5, 10, 2, 24, -1, -48]|50|
|inputArray: [5, 6, -4, 2, 3, 2, -23]|30|
|inputArray: [4, 1, 2, 3, 1, 5]|6|
|inputArray: [-23, 4, -3, 8, -12]|-12|
|inputArray: [inputArray: [1, 0, 1, 0, 1000]]|0|
