const { cardinal, diagonal, horizontal, input, mapped, parsed, points, vertical } = require('./testData')
const {
    countThreshold,
    getPoints,
    isCardinal,
    isDiagonal,
    isHorizontal,
    isVertical,
    mapLines,
    newGrid,
    parseInput,
    parseLine,
    solution
} = require('./solution')

describe('Day 5', () => {
    describe('countThreshold', () => {
        const countThresholdDefaultTestData = [
            [12, 'all', mapped.all],
            [5, 'straight', mapped.straight],
            [4, 'diagonal', mapped.diagonal],
        ]

        test.each(countThresholdDefaultTestData)('should return %p for %p grid with default threshold (2)', (expected, _, grid) => {
            const result = countThreshold(grid)
            expect(result).toBe(expected)
        })

        const countThresholdTestData = [
            [5, 0, 'all', mapped.all],
            [5, 0, 'straight', mapped.straight],
            [5, 0, 'diagonal', mapped.diagonal],
            [3, 2, 'all', mapped.all],
            [3, 0, 'straight', mapped.straight],
            [3, 0, 'diagonal', mapped.diagonal],
            [2, 12, 'all', mapped.all],
            [2, 5, 'straight', mapped.straight],
            [2, 4, 'diagonal', mapped.diagonal],
            [1, 39, 'all', mapped.all],
            [1, 21, 'straight', mapped.straight],
            [1, 23, 'diagonal', mapped.diagonal],
        ]

        test.each(countThresholdTestData)('given threshold %p should return %p for %p grid', (threshold, expected, _, grid) => {
            const result = countThreshold(grid, threshold)
            expect(result).toBe(expected)
        })
    })
    describe('getPoints', () => {
        const getPointsTestData = []
        for (let i = 0; i < parsed.length; i++) {
            getPointsTestData.push([parsed[i], points[i]])
        }
        test.each(getPointsTestData)('given %p should return %p', (line, expected) => {
            const result = getPoints(line)
            expect(result).toStrictEqual(expected)
        })
    })
    describe('isCardinal', () => {
        const isCardinalTestData = []
        for (let i = 0; i < parsed.length; i++) {
            isCardinalTestData.push([parsed[i], cardinal[i]])
        }
        test.each(isCardinalTestData)('given %p should return %p', (line, expected) => {
            const result = isCardinal(line)
            expect(result).toBe(expected)
        })
    })
    describe('isDiagonal', () => {
        const isDiagonalTestData = []
        for (let i = 0; i < parsed.length; i++) {
            isDiagonalTestData.push([parsed[i], diagonal[i]])
        }
        test.each(isDiagonalTestData)('given %p should return %p', (line, expected) => {
            const result = isDiagonal(line)
            expect(result).toBe(expected)
        })
    })
    describe('isHorizontal', () => {
        const isHorizontalTestData = []
        for (let i = 0; i < parsed.length; i++) {
            isHorizontalTestData.push([parsed[i], horizontal[i]])
        }
        test.each(isHorizontalTestData)('given %p should return %p', (line, expected) => {
            const result = isHorizontal(line)
            expect(result).toBe(expected)
        })
    })
    describe('isVertical', () => {
        const isVerticalTestData = []
        for (let i = 0; i < parsed.length; i++) {
            isVerticalTestData.push([parsed[i], vertical[i]])
        }
        test.each(isVerticalTestData)('given %p should return %p', (line, expected) => {
            const result = isVertical(line)
            expect(result).toBe(expected)
        })
    })
    describe('mapLines', () => {
        const straightLines = parsed.slice(0).filter(line => isCardinal(line))
        const diagonalLines = parsed.slice(0).filter(line => isDiagonal(line))
        const mapLinesTestData = [
            ['all lines', mapped.all, parsed],
            ['cardinal lines', mapped.straight, straightLines],
            ['diagonal lines', mapped.diagonal, diagonalLines],
        ]
        test.each(mapLinesTestData)('given %p should return %p', (_, expected, lines) => {
            const grid = newGrid(10, 10)
            const result = mapLines(lines, grid)
            expect(result).toStrictEqual(expected)
        })
        test('should used given grid and add to it with new line mappings', () => {
            const resultA = mapLines(diagonalLines, mapped.straight)
            expect(resultA).toStrictEqual(mapped.all)

            const resultB = mapLines(straightLines, mapped.diagonal)
            expect(resultB).toStrictEqual(mapped.all)
        })
    })
    describe('newGrid', () => {
        test('should return 1000x1000 2d array', () => {
            const grid = newGrid()
            expect(grid.length).toBe(1000)
            for (const row of grid) {
                expect(row.length).toBe(1000)
            }
        })
        const gridSizeTestData = [
            [23, 87],
            [4, 11],
            [19, 36],
        ]
        test.each(gridSizeTestData)('should return 2d array of size %p,%p according to input ', (x, y) => {
            const grid = newGrid(x, y)
            expect(grid.length).toBe(x)
            for (const row of grid) {
                expect(row.length).toBe(y)
            }
        })
        test('should return 2d array filled with 0s', () => {
            const grid = newGrid(10, 17)
            for (const row of grid) {
                for (const cell of row) {
                    expect(cell).toBe(0)
                }
            }
        })
    })
    describe('parseInput', () => {
        const parseInputTestData = [
            [input, parsed]
        ]
        test.each(parseInputTestData)('should return expected lines data', (input, expected) => {
            const result = parseInput(input)
            expect(result).toStrictEqual(expected)
        })
    })
    describe('parseLine', () => {
        const parseLineTestData = []
        for (let i = 0; i < input.length; i++) {
            parseLineTestData.push([input[i], parsed[i]])
        }
        test.each(parseLineTestData)('should parse each line as expected', (line, expected) => {
            const result = parseLine(line)
            expect(result).toStrictEqual(expected)
        })
    })
    describe('solution', () => {
        test('should return expected counts for all & straight', () => {
            const result = solution(input)
            expect(result.all).toBe(12)
            expect(result.straight).toBe(5)
        })
    })
})