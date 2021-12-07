const { costs, input } = require('./testData')
const { ascendingExpFuel, ascendingLinearFuel, fuelStepExp, fuelToPos, solution } = require('./solution')

describe('Day 7', () => {
    describe('ascendingExpFuel', () => {
        test('should sort costs into exp ascending order when given as costs.sort() param', () => {
            let testArr = costs.slice(0)
            testArr.sort(ascendingExpFuel)
            testArr = testArr.map(cost => cost.exp)
            expect(testArr[0]).toBe(168)
            for (let i = 1; i < costs.length; i++) {
                expect(testArr[i - 1]).toBeLessThanOrEqual(testArr[i])
            }
        })
    })
    describe('ascendingLinearFuel', () => {
        test('should sort costs into linear ascending order when given as costs.sort() param', () => {
            let testArr = costs.slice(0)
            testArr.sort(ascendingLinearFuel)
            testArr = testArr.map(cost => cost.linear)
            expect(testArr[0]).toBe(37)
            for (let i = 1; i < costs.length; i++) {
                expect(testArr[i - 1]).toBeLessThanOrEqual(testArr[i])
            }
        })
    })
    describe('fuelStepExp', () => {
        const fuelStepTestData = [
            [0, 0],
            [1, 1],
            [2, 3],
            [3, 6],
            [4, 10],
            [5, 15],
            [6, 21],
            [9124362, 41626995515703]
        ]
        test.each(fuelStepTestData)('', (n, expected) => {
            const result = fuelStepExp(n)
            expect(result).toBe(expected)
        })
    })
    describe('fuelToPos', () => {
        const fuelToPosTestData = [
            [0, 49, 290],
            [1, 41, 242],
            [2, 37, 206],
            [3, 39, 183],
            [4, 41, 170],
            [5, 45, 168],
            [6, 49, 176],
            [7, 53, 194],
            [8, 59, 223],
            [9, 65, 262],
            [10, 71, 311],
            [11, 77, 370],
            [12, 83, 439],
            [13, 89, 518],
            [14, 95, 607],
            [15, 103, 707],
        ]
        test.each(fuelToPosTestData)('given position %p and test input should return %p for linear and %p for exp', (i, linear, exp) => {
            const result = fuelToPos(input, i)
            expect(result.linear).toBe(linear)
            expect(result.exp).toBe(exp)
        })
    })
    describe('solution', () => {
        test('should return expected output for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 37, part2: 168 })
        })
    })
})