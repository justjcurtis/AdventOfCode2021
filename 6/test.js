const { fishMaps, input } = require('./testData')
const { getFishMap, solution, tick } = require('./solution')

describe('Day 6', () => {
    describe('getFishMap', () => {
        test('should produce map of fish array', () => {
            const result = getFishMap(input)
            expect(result).toStrictEqual(fishMaps[0])
        })
    })

    describe('solution', () => {
        const solutionTestData = [
            [0, 5],
            [1, 5],
            [5, 10],
            [80, 5934],
            [256, 26984457539],
            [1000, 3.795890611446983e+38]
        ]
        test.each(solutionTestData)('given test input and %p days should return %p in <= 2ms', (days, expected) => {
            const start = Date.now()
            const result = solution(input, days)
            const end = Date.now()
            const msTaken = end - start
            expect(result).toBe(expected)
            expect(msTaken).toBeLessThanOrEqual(2)
        })
    })

    describe('tick ', () => {
        const tickTestData = [
            [fishMaps[0], 0],
            [fishMaps[1], 1],
            [fishMaps[2], 5],
            [fishMaps[3], 80],
            [fishMaps[4], 256],
            [fishMaps[5], 1000]
        ]
        test.each(tickTestData)('should return %p in <= 2ms given test input and %p days', (expected, days) => {
            const start = Date.now()
            const result = tick(fishMaps[0], days)
            const end = Date.now()
            const msTaken = end - start
            expect(result).toStrictEqual(expected)
            expect(msTaken).toBeLessThanOrEqual(2)
        })
    })
})