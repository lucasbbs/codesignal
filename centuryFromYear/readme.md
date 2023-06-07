# Description
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

## Example

- For `year = 1905`, the output should be
`centuryFromYear(year) = 20`;

- For `year = 1700`, the output should be
`centuryFromYear(year) = 17`solution(1700);.

## Input/Output

- [execution time limit] 4 seconds (js)

- [input] integer year

A positive integer, designating the year.

Guaranteed constraints:
`1 ≤ year ≤ 2005`.

- [output] integer

The number of the century the year is in.

## Tests

input|output
-----|------
year: 1905|20
year: 1700|17
year: 1988|20
year: 2000|20
year: 2001|21
year: 200|2
year: 374|4
year: 45|1
year: 8|1
