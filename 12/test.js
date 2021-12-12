const { getGraph, countOccurrences, getPaths, solution } = require('./solution')
const { input, graph, expectedPaths } = require('./testData')

describe('Day 12', () => {
    describe('getGraph', () => {
        test('should return expected graph for test input', () => {
            const result = getGraph(input)
            expect(result).toStrictEqual(graph)
        })
    })

    describe('countOccurrences', () => {
        const testPath = 'abcdefgbccdddeeeefffffgggggg'.split('')
        const countOccurrencesTestData = [
            ['x', 0]
        ]
        for (let i = 0; i < 7; i++) {
            countOccurrencesTestData.push([testPath[i], i + 1])
        }
        testPath.sort((a, b) => Math.random() - 0.5)
        test.each(countOccurrencesTestData)('given testPath and %p should return %p', (n, expected) => {
            const result = countOccurrences(testPath, n)
            expect(result).toBe(expected)
        })
    })

    describe('getPaths', () => {
        const getPathsTestDataLengths = [
            [1, 19],
            [2, 103]
        ]
        test.each(getPathsTestDataLengths)('given %p maxForOneSmall should return array with length %p', (maxForOneSmall, expected) => {
            const result = getPaths(graph, maxForOneSmall).length
            expect(result).toBe(expected)
        })
        const getPathsTestData = [
            [1, expectedPaths[1]],
            [2, expectedPaths[2]]
        ]
        test.each(getPathsTestData)('given %p maxForOneSmall should return %p', (maxForOneSmall, expected) => {
            const result = getPaths(graph, maxForOneSmall)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('solution', () => {
        test('should return 19 and 103 for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 19, part2: 103 })
        })
    })
})