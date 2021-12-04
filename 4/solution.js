const { boards, drawings } = require('./input')

const getBlankMarkings = () => [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
]

const checkWin = (markings, i, j) => {
    let win = true
    //check row
    for (let c = 0; c < 5; c++) {
        if (!markings[i][c]) {
            win = false
            break
        }
    }
    if (win) return true
    //check col
    for (let r = 0; r < 5; r++) {
        if (!markings[r][j]) return false
    }
    return true
}

const completeBoard = (board, drawings) => {
    // refactor to use board value map to optimise
    const markings = getBlankMarkings()
    let count = 0
    for (const draw of drawings) {
        count++
        for (let i = 0; i < 5; i++) {
            const row = board[i]
            for (let j = 0; j < 5; j++) {
                const val = row[j]
                if (val == draw) {
                    markings[i][j] = true
                    const win = checkWin(markings, i, j)
                    if (win) return { board, count, draw, markings }
                }
            }
        }
    }
    return undefined
}

const getScore = win => {
    let sum = 0
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (!win.markings[i][j]) {
                sum += win.board[i][j]
            }
        }
    }
    return sum * win.draw
}

const getFirstBoardToWin = (boards, drawings) => {
    let minWin = undefined
    for (const board of boards) {
        const current = completeBoard(board, drawings)
        if (minWin == undefined || minWin.count > current.count) {
            minWin = current
        }
    }
    return getScore(minWin)
}

const getLastBoardToWin = (boards, drawings) => {
    let maxWin = undefined
    for (const board of boards) {
        const current = completeBoard(board, drawings)
        if (maxWin == undefined || maxWin.count < current.count) {
            maxWin = current
        }
    }
    return getScore(maxWin)
}

module.exports = {
    checkWin,
    completeBoard,
    getBlankMarkings,
    getFirstBoardToWin,
    getLastBoardToWin,
    getScore
}