const { lineReduce, getScore, middleEntry, solution } = require('./solution')
const { input, reduced, scores } = require('./testData')

describe('Day 10', () => {
    describe('lineReduce', () => {
        const lineReduceTestData = []
        for (let i = 0; i < input.length; i++) {
            lineReduceTestData.push([input[i], reduced[i]])
        }
        test.each(lineReduceTestData)('given %p should return %p', (line, expected) => {
            const result = lineReduce(line)
            expect(result).toBe(expected)
        })
    })

    describe('getScore', () => {
        const getScoreTestData = []
        for (let i = 0; i < input.length; i++) {
            getScoreTestData.push([input[i], scores[i]])
        }
        test.each(getScoreTestData)('given %p should return %p', (line, expected) => {
            const result = getScore(line)
            expect(result).toBe(expected)
        })
    })

    describe('middleEntry', () => {
        test('should sort and then return middle value of array', () => {
            const arr = [9, 4, 2, 6, -7, 0, 1]
            const result = middleEntry(arr)
            expect(result).toBe(2)
        })
    })

    describe('solution', () => {
        test('should return 0 and 0 for test data', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 26397, part2: 288957 })
        })
    })

})