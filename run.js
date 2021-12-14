const day1Input = require('./1/input')
const day2Input = require('./2/input')
const day3Input = require('./3/input')
const day4Input = require('./4/input')
const day5Input = require('./5/input')
const day6Input = require('./6/input')
const day7Input = require('./7/input')
const day8Input = require('./8/input')
const day9Input = require('./9/input')
const day10Input = require('./10/input')
const day11Input = require('./11/input')
const day12Input = require('./12/input')
const day13Input = require('./13/input')
const day14Input = require('./14/input')
const day1 = require('./1/solution')
const day2 = require('./2/solution')
const day3 = require('./3/solution')
const day4 = require('./4/solution')
const day5 = require('./5/solution')
const day6 = require('./6/solution')
const day7 = require('./7/solution')
const day8 = require('./8/solution')
const day9 = require('./9/solution')
const day10 = require('./10/solution')
const day11 = require('./11/solution')
const day12 = require('./12/solution')
const day13 = require('./13/solution')
const day14 = require('./14/solution')

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
const day5Answer = day5.solution(day5Input)
console.log('Part 1:', day5Answer.straight) // 4826
console.log('Part 2:', day5Answer.all) // 16793
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 6 --------")
console.time('Time Taken')
console.log('Part 1:', day6.solution(day6Input, 80)) // 386755
console.log('Part 2:', day6.solution(day6Input, 256)) // 1732731810807
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 7 --------")
console.time('Time Taken')
const day7Answer = day7.solution(day7Input)
console.log('Part 1:', day7Answer.part1) // 328318
console.log('Part 2:', day7Answer.part2) // 89791146
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 8 --------")
console.time('Time Taken')
const day8Answer = day8.solution(day8Input)
console.log('Part 1:', day8Answer.part1) // 303
console.log('Part 2:', day8Answer.part2) // 961734
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 9 --------")
console.time('Time Taken')
const day9Answer = day9.solution(day9Input)
console.log('Part 1:', day9Answer.part1) // 448
console.log('Part 2:', day9Answer.part2) // 1417248
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 10 --------")
console.time('Time Taken')
const day10Answer = day10.solution(day10Input)
console.log('Part 1:', day10Answer.part1) // 339537
console.log('Part 2:', day10Answer.part2) // 2412013412
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 11 --------")
console.time('Time Taken')
const day11Answer = day11.solution(day11Input)
console.log('Part 1:', day11Answer.part1) // 1713
console.log('Part 2:', day11Answer.part2) // 502
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 12 --------")
console.time('Time Taken')
const day12Answer = day12.solution(day12Input)
console.log('Part 1:', day12Answer.part1) // 4104
console.log('Part 2:', day12Answer.part2) // 119760
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 13 --------")
console.time('Time Taken')
const day13Answer = day13.solution(day13Input)
console.log('Part 1:', day13Answer.part1) // 689
console.log('Part 2:', day13Answer.part2) // RLBCJGLU
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 14 --------")
console.time('Time Taken')
const day14Answer = day14.solution(day14Input)
console.log('Part 1:', day14Answer.part1) // 2375
console.log('Part 2:', day14Answer.part2) // 1976896901756
console.timeEnd('Time Taken')
console.log('-----------------------')