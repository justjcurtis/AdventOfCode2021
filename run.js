const day = require('./days')
console.log()
console.log("-------- Day 1 --------")
console.time('Time Taken')
console.log("Part 1:", day[1].methods.solution(day[1].input)) // 1602
console.log("Part 2:", day[1].methods.solution(day[1].methods.createSlidingWindow(day[1].input))) // 1633
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 2 --------")
console.time('Time Taken')
console.log('Part 1:', day[2].methods.solution(day[2].input, day[2].methods.part1Handler)) // 1947824
console.log('Part 2:', day[2].methods.solution(day[2].input, day[2].methods.part2Handler)) // 1813062561
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 3 --------")
console.time('Time Taken')
console.log('Part 1:', day[3].methods.solution1(day[3].input)) // 2498354
console.log('Part 2:', day[3].methods.solution2(day[3].input)) // 3277956
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 4 --------")
console.time('Time Taken')
console.log('Part 1:', day[4].methods.getFirstBoardToWin(day[4].input.boards, day[4].input.drawings)) // 63552
console.log('Part 2:', day[4].methods.getLastBoardToWin(day[4].input.boards, day[4].input.drawings)) // 9020
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 5 --------")
console.time('Time Taken')
const day5Answer = day[5].methods.solution(day[5].input)
console.log('Part 1:', day5Answer.straight) // 4826
console.log('Part 2:', day5Answer.all) // 16793
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 6 --------")
console.time('Time Taken')
console.log('Part 1:', day[6].methods.solution(day[6].input, 80)) // 386755
console.log('Part 2:', day[6].methods.solution(day[6].input, 256)) // 1732731810807
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 7 --------")
console.time('Time Taken')
const day7Answer = day[7].methods.solution(day[7].input)
console.log('Part 1:', day7Answer.part1) // 328318
console.log('Part 2:', day7Answer.part2) // 89791146
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 8 --------")
console.time('Time Taken')
const day8Answer = day[8].methods.solution(day[8].input)
console.log('Part 1:', day8Answer.part1) // 303
console.log('Part 2:', day8Answer.part2) // 961734
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 9 --------")
console.time('Time Taken')
const day9Answer = day[9].methods.solution(day[9].input)
console.log('Part 1:', day9Answer.part1) // 448
console.log('Part 2:', day9Answer.part2) // 1417248
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 10 --------")
console.time('Time Taken')
const day10Answer = day[10].methods.solution(day[10].input)
console.log('Part 1:', day10Answer.part1) // 339537
console.log('Part 2:', day10Answer.part2) // 2412013412
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 11 --------")
console.time('Time Taken')
const day11Answer = day[11].methods.solution(day[11].input)
console.log('Part 1:', day11Answer.part1) // 1713
console.log('Part 2:', day11Answer.part2) // 502
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 12 --------")
console.time('Time Taken')
const day12Answer = day[12].methods.solution(day[12].input)
console.log('Part 1:', day12Answer.part1) // 4104
console.log('Part 2:', day12Answer.part2) // 119760
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 13 --------")
console.time('Time Taken')
const day13Answer = day[13].methods.solution(day[13].input)
console.log('Part 1:', day13Answer.part1) // 689
console.log('Part 2:', day13Answer.part2) // RLBCJGLU
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 14 --------")
console.time('Time Taken')
const day14Answer = day[14].methods.solution(day[14].input)
console.log('Part 1:', day14Answer.part1) // 2375
console.log('Part 2:', day14Answer.part2) // 1976896901756
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 15 --------")
console.time('Time Taken')
const day15Answer = day[15].methods.solution(day[15].input)
console.log('Part 1:', day15Answer.part1) // 562
console.log('Part 2:', day15Answer.part2) // 2874
console.timeEnd('Time Taken')
console.log('-----------------------')
console.log()
console.log("-------- Day 16 --------")
console.time('Time Taken')
const day16Answer = day[16].methods.solution(day[16].input)
console.log('Part 1:', day16Answer.part1) // 847
console.log('Part 2:', day16Answer.part2) // 333794664059
console.timeEnd('Time Taken')
console.log('-----------------------')