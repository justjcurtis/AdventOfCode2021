const { input } = require('./testData')
const { solution, createSlidingWindow } = require('./solution')

describe('Day 1', () => {
    describe('createSlidingWindow', () => {
        const slidingTestData = [
            [input, 1, [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]],
            [input, 2, [399, 408, 418, 410, 407, 447, 509, 529, 523]],
            [input, 3, [607, 618, 618, 617, 647, 716, 769, 792]],
            [input, 4, [817, 818, 825, 857, 916, 976, 1032]],
            [input, 5, [1017, 1025, 1065, 1126, 1176, 1239]],
        ]
        test.each(slidingTestData)('should create list of sums of window of size n', (input, n, expected) => {
            const result = createSlidingWindow(input, n)
            expect(result.join(',')).toBe(expected.join(','))
        })
    })

    describe('solution', () => {
        const solutionTestData = [
            [input, 7],
            [createSlidingWindow(input, 1), 7],
            [createSlidingWindow(input, 3), 5],
        ]
        test.each(solutionTestData)('should create list of sums of window of size n', (input, expected) => {
            const result = solution(input)
            expect(result).toBe(expected)
        })
    })
})