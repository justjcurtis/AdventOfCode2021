const day1Input = require('../1/input')
const day2Input = require('../2/input')
const day3Input = require('../3/input')
const day4Input = require('../4/input')
const day5Input = require('../5/input')
const day6Input = require('../6/input')
const day7Input = require('../7/input')
const day8Input = require('../8/input')
const day1 = require('../1/solution')
const day2 = require('../2/solution')
const day3 = require('../3/solution')
const day4 = require('../4/solution')
const day5 = require('../5/solution')
const day6 = require('../6/solution')
const day7 = require('../7/solution')
const day8 = require('../8/solution')

describe('Check actual answers', () => {
    describe('Day 1', () => {
        test('Part 1', () => {
            const result = day1.solution(day1Input)
            expect(result).toBe(1602)
        })
        test('Part 2', () => {
            const result = day1.solution(day1.createSlidingWindow(day1Input))
            expect(result).toBe(1633)
        })
    })

    describe('Day 2', () => {
        test('Part 1', () => {
            const result = day2.solution(day2Input, day2.part1Handler)
            expect(result).toBe(1947824)
        })
        test('Part 2', () => {
            const result = day2.solution(day2Input, day2.part2Handler)
            expect(result).toBe(1813062561)
        })
    })

    describe('Day 3', () => {
        test('Part 1', () => {
            const result = day3.solution1(day3Input)
            expect(result).toBe(2498354)
        })
        test('Part 2', () => {
            const result = day3.solution2(day3Input)
            expect(result).toBe(3277956)
        })
    })

    describe('Day 4', () => {
        test('Part 1', () => {
            const result = day4.getFirstBoardToWin(day4Input.boards, day4Input.drawings)
            expect(result).toBe(63552)
        })
        test('Part 2', () => {
            const result = day4.getLastBoardToWin(day4Input.boards, day4Input.drawings)
            expect(result).toBe(9020)
        })
    })

    describe('Day 5', () => {
        const day5Answer = day5.solution(day5Input)
        test('Part 1', () => {
            const result = day5Answer.straight
            expect(result).toBe(4826)
        })
        test('Part 2', () => {
            const result = day5Answer.all
            expect(result).toBe(16793)
        })
    })

    describe('Day 6', () => {
        test('Part 1', () => {
            const result = day6.solution(day6Input, 80)
            expect(result).toBe(386755)
        })
        test('Part 2', () => {
            const result = day6.solution(day6Input, 256)
            expect(result).toBe(1732731810807)
        })
    })

    describe('Day 7', () => {
        const day7Answer = day7.solution(day7Input)
        test('Part 1', () => {
            const result = day7Answer.part1
            expect(result).toBe(328318)
        })
        test('Part 2', () => {
            const result = day7Answer.part2
            expect(result).toBe(89791146)
        })
    })

    describe('Day 8', () => {
        const day8Answer = day8.solution(day8Input)
        test('Part 1', () => {
            const result = day8Answer.part1
            expect(result).toBe(303)
        })
        test('Part 2', () => {
            const result = day8Answer.part2
            expect(result).toBe(961734)
        })
    })
})











