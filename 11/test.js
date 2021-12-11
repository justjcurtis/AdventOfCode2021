const { flash, getSurrounding, parseInput, solution, step } = require('./solution')
const { input, parsed, steps, flashCounts, flashTestExpected } = require('./testData')

describe('Day 11', () => {
    describe('flash', () => {
        test('should recursively flash octos from given point', () => {
            const octos = steps[0].slice(0).map(r => r.map(v => v + 1))
            const result = flash({ x: 0, y: 2 }, octos, {})
            expect(result).toStrictEqual(flashTestExpected[0])
        })
        test('should ignore octos in flashmap', () => {
            const octos = steps[0].slice(0).map(r => r.map(v => v + 1))
            const result = flash({ x: 0, y: 2 }, octos, { '1,1': true })
            console.log(result)
            expect(result).toStrictEqual(flashTestExpected[1])
        })
    })

    describe('getSurrounding', () => {
        const getSurroundingTestData = []
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                getSurroundingTestData.push([x, y, [
                    { x: x - 1, y },
                    { x: x + 1, y },
                    { x, y: y - 1 },
                    { x, y: y + 1 },

                    { x: x - 1, y: y - 1 },
                    { x: x + 1, y: y + 1 },
                    { x: x + 1, y: y - 1 },
                    { x: x - 1, y: y + 1 }
                ].filter(p => (p.x >= 0 && p.x < 10) && (p.y >= 0 && p.y < 10))])
            }
        }
        test.each(getSurroundingTestData)('given %p, %p should return %p', (x, y, expected) => {
            const result = getSurrounding(x, y)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('parseInput', () => {
        test('should return 2d array of ints for test input', () => {
            const result = parseInput(input)
            expect(result).toStrictEqual(parsed)
        })
    })

    describe('solution', () => {
        test('should return 1656 and 195 for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 1656, part2: 195 })
        })
    })

    describe('step', () => {
        const stepTestData = [
            [0, steps[0], flashCounts[0], parsed]
        ]
        for (let i = 0; i < steps.length - 1; i++) {
            stepTestData.push([i, steps[i + 1], flashCounts[i + 1], steps[i]])
        }
        test.each(stepTestData)('given step %p, should return %p and %p', (_, octosOut, flashCount, octos) => {
            const result = step(octos)
            expect(result).toStrictEqual({ octos: octosOut, flashCount })
        })
    })
})