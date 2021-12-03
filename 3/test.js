const { input, binMap } = require('./testData')
const { solution1, epsilonGammaFromBinMap, binMapForInput, solution2, mcbPos, lcbPos, reduction } = require('./solution')
const { expect, test } = require('@jest/globals')

describe('Day 3', () => {
    describe('epsilonGammaFromBinMap', () => {
        test('should return {e:9, g:22} for binMap provided', () => {
            const result = epsilonGammaFromBinMap(binMap)
            expect(result).toStrictEqual({ e: 9, g: 22 })
        })
    })
    describe('binMapForInput', () => {
        test('should return expected', () => {
            const result = binMapForInput(input)
            expect(result).toStrictEqual(binMap)
        })
    })
    describe('solution1', () => {
        test('should return 198 for input', () => {
            const result = solution1(input)
            expect(result).toBe(198)
        })
    })
    describe('mcbPos', () => {
    })
    describe('lcbPos', () => {
    })
    describe('reduction', () => {
    })
    describe('solution2', () => {
    })
})