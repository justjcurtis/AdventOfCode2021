const day1Input = require('./1/input')
const day2Input = require('./2/input')
const day3Input = require('./3/input')
const day4Input = require('./4/input')
const day5Input = require('./5/input')
const day6Input = require('./6/input')
const day1 = require('./1/solution')
const day2 = require('./2/solution')
const day3 = require('./3/solution')
const day4 = require('./4/solution')
const day5 = require('./5/solution')
const day6 = require('./6/solution')

console.log('-----------------------')
console.log()
console.log("-------- Day 1 --------")
console.time('Time Taken')
console.log("Part 1:", day1.solution(day1Input)) // 1602
console.log("Part 2:", day1.solution(day1.createSlidingWindow(day1Input))) // 1633
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 2 --------")
console.time('Time Taken')
console.log('Part 1:', day2.solution(day2Input, day2.part1Handler)) // 1947824
console.log('Part 2:', day2.solution(day2Input, day2.part2Handler)) // 1813062561
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 3 --------")
console.time('Time Taken')
console.log('Part 1:', day3.solution1(day3Input)) // 2498354
console.log('Part 2:', day3.solution2(day3Input)) // 3277956
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 4 --------")
console.time('Time Taken')
console.log('Part 1:', day4.getFirstBoardToWin(day4Input.boards, day4Input.drawings)) // 63552
console.log('Part 2:', day4.getLastBoardToWin(day4Input.boards, day4Input.drawings)) // 9020
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 5 --------")
console.time('Time Taken')
console.log('Part 1:', day5.solution(day5Input).straight) // 4826
console.log('Part 2:', day5.solution(day5Input).all) // 16793
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 6 --------")
console.time('Time Taken')
console.log('Part 1:', day6.solution(day6Input, 80)) // 386755
console.log('Part 2:', day6.solution(day6Input, 256)) // 1732731810807
console.timeEnd('Time Taken')
console.log('-----------------------')