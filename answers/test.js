const day = require('../days')

describe('Check actual answers', () => {
    describe('Day 1', () => {
        test('Part 1', () => {
            const result = day[1].methods.solution(day[1].input)
            expect(result).toBe(1602)
        })
        test('Part 2', () => {
            const result = day[1].methods.solution(day[1].methods.createSlidingWindow(day[1].input))
            expect(result).toBe(1633)
        })
    })

    describe('Day 2', () => {
        test('Part 1', () => {
            const result = day[2].methods.solution(day[2].input, day[2].methods.part1Handler)
            expect(result).toBe(1947824)
        })
        test('Part 2', () => {
            const result = day[2].methods.solution(day[2].input, day[2].methods.part2Handler)
            expect(result).toBe(1813062561)
        })
    })

    describe('Day 3', () => {
        test('Part 1', () => {
            const result = day[3].methods.solution1(day[3].input)
            expect(result).toBe(2498354)
        })
        test('Part 2', () => {
            const result = day[3].methods.solution2(day[3].input)
            expect(result).toBe(3277956)
        })
    })

    describe('Day 4', () => {
        test('Part 1', () => {
            const result = day[4].methods.getFirstBoardToWin(day[4].input.boards, day[4].input.drawings)
            expect(result).toBe(63552)
        })
        test('Part 2', () => {
            const result = day[4].methods.getLastBoardToWin(day[4].input.boards, day[4].input.drawings)
            expect(result).toBe(9020)
        })
    })

    describe('Day 5', () => {
        const day5Answer = day[5].methods.solution(day[5].input)
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
            const result = day[6].methods.solution(day[6].input, 80)
            expect(result).toBe(386755)
        })
        test('Part 2', () => {
            const result = day[6].methods.solution(day[6].input, 256)
            expect(result).toBe(1732731810807)
        })
    })

    describe('Day 7', () => {
        const day7Answer = day[7].methods.solution(day[7].input)
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
        const day8Answer = day[8].methods.solution(day[8].input)
        test('Part 1', () => {
            const result = day8Answer.part1
            expect(result).toBe(303)
        })
        test('Part 2', () => {
            const result = day8Answer.part2
            expect(result).toBe(961734)
        })
    })

    describe('Day 9', () => {
        const day9Answer = day[9].methods.solution(day[9].input)
        test('Part 1', () => {
            const result = day9Answer.part1
            expect(result).toBe(448)
        })
        test('Part 2', () => {
            const result = day9Answer.part2
            expect(result).toBe(1417248)
        })
    })

    describe('Day 10', () => {
        const day10Answer = day[10].methods.solution(day[10].input)
        test('Part 1', () => {
            const result = day10Answer.part1
            expect(result).toBe(339537)
        })
        test('Part 2', () => {
            const result = day10Answer.part2
            expect(result).toBe(2412013412)
        })
    })

    describe('Day 11', () => {
        const day11Answer = day[11].methods.solution(day[11].input)
        test('Part 1', () => {
            const result = day11Answer.part1
            expect(result).toBe(1713)
        })
        test('Part 2', () => {
            const result = day11Answer.part2
            expect(result).toBe(502)
        })
    })

    describe('Day 12', () => {
        const day12Answer = day[12].methods.solution(day[12].input)
        test('Part 1', () => {
            const result = day12Answer.part1
            expect(result).toBe(4104)
        })
        test('Part 2', () => {
            const result = day12Answer.part2
            expect(result).toBe(119760)
        })
    })

    describe('Day 13', () => {
        const day13Answer = day[13].methods.solution(day[13].input)
        test('Part 1', () => {
            const result = day13Answer.part1
            expect(result).toBe(689)
        })
        test('Part 2', () => {
            const result = day13Answer.part2.split('\n')
            expect(result).toStrictEqual([
                '',
                '⬜️⬜️⬜️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬜️⬜️⬛️⬛️⬛️⬜️⬜️⬛️⬛️⬛️⬛️⬜️⬜️⬛️⬛️⬜️⬜️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️',
                '⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️',
                '⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬜️⬜️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️',
                '⬜️⬜️⬜️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬜️⬛️⬜️⬛️⬜️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️',
                '⬜️⬛️⬜️⬛️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬜️⬛️⬜️⬛️⬛️⬛️⬛️⬜️⬛️⬛️⬜️',
                '⬜️⬛️⬛️⬜️⬛️⬜️⬜️⬜️⬜️⬛️⬜️⬜️⬜️⬛️⬛️⬛️⬜️⬜️⬛️⬛️⬛️⬜️⬜️⬛️⬛️⬛️⬜️⬜️⬜️⬛️⬜️⬜️⬜️⬜️⬛️⬛️⬜️⬜️⬛️'
            ])
        })
    })

    describe('Day 14', () => {
        const day14Answer = day[14].methods.solution(day[14].input)
        test('Part 1', () => {
            const result = day14Answer.part1
            expect(result).toBe(2375)
        })
        test('Part 2', () => {
            const result = day14Answer.part2
            expect(result).toBe(1976896901756)
        })
    })

    describe('Day 15', () => {
        const day15Answer = day[15].methods.solution(day[15].input)
        test('Part 1', () => {
            const result = day15Answer.part1
            expect(result).toBe(562)
        })
        test('Part 2', () => {
            const result = day15Answer.part2
            expect(result).toBe(2874)
        })
    })

    describe('Day 16', () => {
        const day16Answer = day[16].methods.solution(day[16].input)
        test('Part 1', () => {
            const result = day16Answer.part1
            expect(result).toBe(847)
        })
        test('Part 2', () => {
            const result = day16Answer.part2
            expect(result).toBe(333794664059)
        })
    })

    describe('Day 17', () => {
        const day17Answer = day[17].methods.solution(day[17].input)
        test('Part 1', () => {
            const result = day17Answer.part1
            expect(result).toBe(13203)
        })
        test('Part 2', () => {
            const result = day17Answer.part2
            expect(result).toBe(5644)
        })
    })

    describe('Day 18', () => {
        const day18Answer = day[18].methods.solution(day[18].input)
        test('Part 1', () => {
            const result = day18Answer.part1
            expect(result).toBe(3816)
        })
        test('Part 2', () => {
            const result = day18Answer.part2
            expect(result).toBe(4819)
        })
    })

    describe('Day 19', () => {
        const day19Answer = day[19].methods.solution(day[19].input)
        test('Part 1', () => {
            const result = day19Answer.part1
            expect(result).toBe(390)
        })
        test('Part 2', () => {
            const result = day19Answer.part2
            expect(result).toBe(13327)
        })
    })
})