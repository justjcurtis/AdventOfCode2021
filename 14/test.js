const { getPolyPairs, parseInsertions, doInsert, updatePolyPairs, doInsertions, getCommonElements, solution } = require('./solution')
const { input, initialPolyPairs, parsedInsertions, postNNInsertion, postNInsertions } = require('./testData')

describe('Day 14', () => {
    describe('getPolyPairs', () => {
        test('should return pairs map for test polymer', () => {
            const result = getPolyPairs(input.polymer)
            expect(result).toStrictEqual(initialPolyPairs)
        })
    })

    describe('parseInsertions', () => {
        test('should return parsed insertions for test insertions', () => {
            const result = parseInsertions(input.insertions)
            expect(result).toStrictEqual(parsedInsertions)
        })
    })

    describe('doInsert', () => {
        test('should insert insertion output into pair inbox', () => {
            const result = doInsert(parsedInsertions[7], JSON.parse(JSON.stringify(initialPolyPairs)))
            expect(result).toStrictEqual({
                polyPairs: postNNInsertion,
                didInsert: true
            })
        })
        test('shouldn\'t insert insertion for pair not in polyPairs', () => {
            const result = doInsert(parsedInsertions[0], JSON.parse(JSON.stringify(initialPolyPairs)))
            expect(result).toStrictEqual({ didInsert: false })
        })
    })

    describe('updatePolyPairs', () => {
        test('should update polyPairs at specified pairs', () => {
            const result = updatePolyPairs(JSON.parse(JSON.stringify(postNNInsertion)), ['NN'])
            expect(result).toStrictEqual({
                NC: { count: 2, inbox: [] },
                CB: { count: 1, inbox: [] },
                CN: { count: 1, inbox: [] }
            })
        })
    })

    describe('doInsertions', () => {
        const doInsertionsTestData = [
            [1, postNInsertions[1]],
            [5, postNInsertions[5]],
            [10, postNInsertions[10]],
            [50, postNInsertions[50]],
            [100, postNInsertions[100]],
        ]
        test.each(doInsertionsTestData)('given test input and %p insertions should return %p', (n, expected) => {
            const result = doInsertions(parsedInsertions, JSON.parse(JSON.stringify(initialPolyPairs)), n)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('getCommonElements', () => {
        const getCommonElementsTestData = [
            [2, 1, 1, postNInsertions[1]],
            [46, 13, 5, postNInsertions[5]],
            [1749, 161, 10, postNInsertions[10]],
            [2249856140964081, 1072715253807, 50, postNInsertions[50]],
            [2.535298019313139e+30, 1.7572465431910842e+24, 100, postNInsertions[100]],
        ]
        test.each(getCommonElementsTestData)('should return {max: %p, min: %p} for post %p insertions', (max, min, _, polyPairs) => {
            const result = getCommonElements(JSON.parse(JSON.stringify(polyPairs)))
            expect(result).toStrictEqual({ max, min })
        })
    })

    describe('solution', () => {
        test('should return 1588 and 2188189693529', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 1588, part2: 2188189693529 })
        })
    })
})