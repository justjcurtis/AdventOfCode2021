const { input, binMap } = require('./testData')
const { solution1, epsilonGammaFromBinMap, solution2, mcbPos, lcbPos, reduction } = require('./solution')

describe('Day 3', () => {
    describe('epsilonGammaFromBinMap', () => {
        test('should return {e:9, g:22} for input provided', () => {
            const result = epsilonGammaFromBinMap(input)
            expect(result).toStrictEqual({ e: 9, g: 22 })
        })
    })
    describe('solution1', () => {
        test('should return 198 for input', () => {
            const result = solution1(input)
            expect(result).toBe(198)
        })
    })
    describe('mcbPos', () => {
        const mcbPosTestData = [
            [0, '1'],
            [1, '0'],
            [2, '1'],
            [3, '1'],
            [4, '0'],
        ]
        test.each(mcbPosTestData)('given input and %p should return %p', (i, expected) => {
            const result = mcbPos(input, i)
            expect(result).toBe(expected)
        })
    })
    describe('lcbPos', () => {
        const lcbPosTestData = [
            [0, '0'],
            [1, '1'],
            [2, '0'],
            [3, '0'],
            [4, '1'],
        ]
        test.each(lcbPosTestData)('given input and %p should return %p', (i, expected) => {
            const result = lcbPos(input, i)
            expect(result).toBe(expected)
        })
    })
    describe('reduction', () => {
        const reductuonTestData = [
            ["mcbPos", '10111', mcbPos],
            ["lcbPos", '01010', lcbPos]
        ]
        test.each(reductuonTestData)('given %p bias should return %p with given input data', (_, expected, bias) => {
            const result = reduction(input, bias)
            expect(result).toBe(expected)
        })
    })
    describe('solution2', () => {
        test('should return 230 for input', () => {
            const result = solution2(input)
            expect(result).toBe(230)
        })
    })
})