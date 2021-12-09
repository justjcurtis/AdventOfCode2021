const { parseInput, getSurrounding, getLowPoints, getTotalRisk, getBasinFromLow, get3LargestBasins, solution } = require('./solution')
const { basins, depths, input, lows } = require('./testData')

describe('Day 9', () => {
    const w = depths.length
    const h = depths[0].length
    describe('parseInput', () => {
        test('given test input should return parsed 2d array', () => {
            const result = parseInput(input)
            expect(result).toStrictEqual(depths)
        })
    })

    describe('getSurrounding', () => {
        const getSurroundingTestData = [
            [0, 0, [{ x: 1, y: 0, val: -1 }, { x: 0, y: 1, val: -1 }]],
            [2, 0, [{ x: 1, y: 0, val: -1 }, { x: 3, y: 0, val: -1 }, { x: 2, y: 1, val: -1 }]],
            [4, 0, [{ x: 3, y: 0, val: -1 }, { x: 4, y: 1, val: -1 }]],
            [0, 4, [{ x: 1, y: 4, val: -1 }, { x: 0, y: 3, val: -1 }, { x: 0, y: 5, val: -1 }]],
            [2, 4, [{ x: 1, y: 4, val: -1 }, { x: 3, y: 4, val: -1 }, { x: 2, y: 3, val: -1 }, { x: 2, y: 5, val: -1 }]],
            [4, 4, [{ x: 3, y: 4, val: -1 }, { x: 4, y: 3, val: -1 }, { x: 4, y: 5, val: -1 }]],
            [0, 9, [{ x: 1, y: 9, val: -1 }, { x: 0, y: 8, val: -1 }]],
            [2, 9, [{ x: 1, y: 9, val: -1 }, { x: 3, y: 9, val: -1 }, { x: 2, y: 8, val: -1 }]],
            [4, 9, [{ x: 3, y: 9, val: -1 }, { x: 4, y: 8, val: -1 }]],
        ]
        test.each(getSurroundingTestData)('given x:%p, y:%p and w h for test depths should return %p', (x, y, expected) => {
            const result = getSurrounding(x, y, w, h, depths)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('getLowPoints', () => {
        test('should return expected low points for test depths', () => {
            const result = getLowPoints(depths)
            expect(result).toStrictEqual(lows)
        })
    })

    describe('getTotalRisk', () => {
        test('given test lows should return 15', () => {
            const result = getTotalRisk(lows)
            expect(result).toBe(15)
        })
    })

    describe('getBasinFromLow', () => {
        const getBasinFromLowTestData = []
        for (let i = 0; i < lows.length; i++) {
            getBasinFromLowTestData.push([lows[i], basins[i]])
        }
        test.each(getBasinFromLowTestData)('given %p, should return %p', (low, expected) => {
            const result = getBasinFromLow(low, depths, w, h)
            expect(Object.values(result)).toStrictEqual(expected)
        })
    })

    describe('get3LargestBasins', () => {
        test('given test lows and depths should return 3 largest basins', () => {
            const result = get3LargestBasins(lows, depths)
            expect(result).toStrictEqual([basins[2], basins[1], basins[3]])
        })
    })

    describe('solution', () => {
        test('should return expected results for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 15, part2: 1134 })
        })

    })

})