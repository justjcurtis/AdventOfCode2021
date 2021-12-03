const day1Input = require('./1/input')
const day2Input = require('./2/input')
const day3Input = require('./3/input')
const day1 = require('./1/solution')
const day2 = require('./2/solution')
const day3 = require('./3/solution')

console.log("--- Day 1 ---")
console.log("Part 1:", day1.solution(day1Input)) // 1602
console.log("Part 2:", day1.solution(day1.createSlidingWindow(day1Input))) // 1633
console.log('-------------')
console.log()
console.log("--- Day 2 ---")
console.log('Part 1:', day2.solution(day2Input, day2.part1Handler)) // .t 1947824
console.log('Part 2:', day2.solution(day2Input, day2.part2Handler)) // .t 1813062561
console.log('-------------')
console.log()
console.log("--- Day 3 ---")
console.log('Part 1:', day3.solution1(day3Input)) // 2498354
console.log('Part 2:', day3.solution2(day3Input)) // 3277956
console.log('-------------')
