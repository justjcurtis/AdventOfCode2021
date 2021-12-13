const { parseDots, parseFolds, foldUp, foldLeft, fold, getDotMap, countDots, renderDots, solution } = require('./solution')
const { input, parsed, postFolds, dotMaps, rendered } = require('./testData')

describe('Day 13', () => {
    describe('parseDots', () => {
        test('should return {x, y} for [x, y] of all dots', () => {
            const result = parseDots(input.dots)
            expect(result).toStrictEqual(parsed.dots)
        })
    })

    describe('parseFolds', () => {
        test('should return {axis: x||y, size:int} for fold along {axis}={int} of all folds', () => {
            const result = parseFolds(input.folds)
            expect(result).toStrictEqual(parsed.folds)
        })
    })

    describe('foldUp', () => {
        test('should fold all points where point.y > fold.y to fold.y - (point.y - fold.y)', () => {
            const result = foldUp(parsed.folds[0].size, JSON.parse(JSON.stringify(parsed.dots)))
            expect(result).toStrictEqual(postFolds.posty)
        })
    })

    describe('foldLeft', () => {
        test('should fold all points where point.x > fold.x to fold.x - (point.x - fold.x)', () => {
            const result = foldLeft(parsed.folds[1].size, JSON.parse(JSON.stringify(parsed.dots)))
            expect(result).toStrictEqual(postFolds.postx)
        })
    })

    describe('fold', () => {
        test('should perform correct fold and return dots post fold', () => {
            const dots = JSON.parse(JSON.stringify(parsed.dots))
            const postFirst = fold(dots, parsed.folds[0])
            expect(postFirst).toStrictEqual(postFolds.posty)
            const postSecond = fold(postFirst, parsed.folds[1])
            expect(postSecond).toStrictEqual(postFolds.postyx)
        })
    })

    describe('getDotMap', () => {
        const getDotMapTestData = [
            [parsed.dots, dotMaps.initial],
            [postFolds.posty, dotMaps.posty],
            [postFolds.postx, dotMaps.postx],
            [postFolds.postyx, dotMaps.postyx],
        ]
        test.each(getDotMapTestData)('should return corresponding dot map for dots', (dots, expected) => {
            const result = getDotMap(dots)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('countDots', () => {
        const countDotsTestData = [
            [parsed.dots, Object.keys(dotMaps.initial).length],
            [postFolds.posty, Object.keys(dotMaps.posty).length],
            [postFolds.postx, Object.keys(dotMaps.postx).length],
            [postFolds.postyx, Object.keys(dotMaps.postyx).length],
        ]
        test.each(countDotsTestData)('should return correct count for dots passed', (dots, expected) => {
            const result = countDots(dots)
            expect(result).toBe(expected)
        })
    })

    describe('renderDots', () => {
        const renderDotsTestData = [
            [parsed.dots, rendered.initial],
            [postFolds.posty, rendered.posty],
            [postFolds.postx, rendered.postx],
            [postFolds.postyx, rendered.postyx],
        ]
        test.each(renderDotsTestData)('should return rendered form of dots passed', (dots, expected) => {
            const result = renderDots(dots)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('solution', () => {
        test('should return 17 and long square in dot format', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 17, part2: '\n' + rendered.postyx.map(r => r.join('')).join('\n') })
        })
    })

})