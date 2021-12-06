const { boards, drawings, expectedCompletions, nonWinBoards, winBoards } = require('./testData')
const { checkWin, completeBoard, getBlankMarkings, getFirstBoardToWin, getLastBoardToWin, getScore } = require('./solution')

describe('Day 4', () => {
    describe('checkWin', () => {
        test.each(winBoards)('should return true for winning board', (markings, i, j) => {
            const result = checkWin(markings, i, j)
            expect(result).toBe(true)
        })
        test.each(nonWinBoards)('should return false for non winning board', (markings) => {
            const x = markings[0].length
            const y = markings.length
            for (let i = 0; i < x; i++) {
                for (let j = 0; j < y; j++) {
                    const result = checkWin(markings, i, j)
                    expect(result).toBe(false)
                }
            }
        })
    })
    describe('completeBoard', () => {
        const completeTestData = [
            [1, expectedCompletions[0], boards[0]],
            [2, expectedCompletions[1], boards[1]],
            [3, expectedCompletions[2], boards[2]],
            [4, expectedCompletions[3], boards[3]],
        ]
        test.each(completeTestData)('given board %p from test data should return %p', (_, expected, board) => {
            const result = completeBoard(board, drawings)
            expect(result).toStrictEqual(expected)
        })
    })
    describe('getBlankMarkings', () => {
        const markingsTestData = [
            [5, 5],
            [1, 15],
            [13, 22],
            [101, 123],
        ]
        test.each(markingsTestData)('should have size corresponding to input %p,%p and all values false', (i, j) => {
            const result = getBlankMarkings(i, j)
            expect(result.length).toBe(i)
            for (let a = 0; a < i; a++) {
                expect(result[a].length).toBe(j)
                for (let b = 0; b < j; b++) {
                    expect(result[a][b]).toBe(false)
                }
            }
        })
        test('should have default size 5,5 given no input and all values false', () => {
            const result = getBlankMarkings()
            expect(result.length).toBe(5)
            for (let a = 0; a < 5; a++) {
                expect(result[a].length).toBe(5)
                for (let b = 0; b < 5; b++) {
                    expect(result[a][b]).toBe(false)
                }
            }
        })
    })
    describe('getFirstBoardToWin', () => {
        test('should return expected first board to win hash', () => {
            const result = getFirstBoardToWin(boards, drawings)
            expect(result).toBe(4512)
        })
        test('should return undefined when no boards come first', () => {
            const result = getFirstBoardToWin([boards[1]], drawings)
            expect(result).toBe(undefined)
        })
    })
    describe('getLastBoardToWin', () => {
        test('should return expected last board to win hash', () => {
            const result = getLastBoardToWin(boards, drawings)
            expect(result).toBe(1924)
        })
        test('should return undefined when no boards come last', () => {
            const result = getLastBoardToWin([boards[1]], drawings)
            expect(result).toBe(undefined)
        })
    })
    describe('getScore', () => {
        const scoreTestData = [
            [1, 2192, completeBoard(boards[0], drawings)],
            [2, undefined, completeBoard(boards[1], drawings)],
            [3, 1924, completeBoard(boards[2], drawings)],
            [4, 4512, completeBoard(boards[3], drawings)],
        ]
        test.each(scoreTestData)('given board %p from test data, should return %p', (_, expected, win) => {
            const result = getScore(win)
            expect(result).toBe(expected)
        })
    })
})