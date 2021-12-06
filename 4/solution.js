const getBlankMarkings = (x = 5, y = 5) => {
    const markings = []
    for (let a = 0; a < x; a++) {
        const row = []
        for (let b = 0; b < y; b++) {
            row.push(false)
        }
        markings.push(row)
    }
    return markings
}

const checkWin = (markings, i, j) => {
    const x = markings[0].length
    const y = markings.length
    let win = true
    //check row
    for (let c = 0; c < x; c++) {
        if (!markings[i][c]) {
            win = false
            break
        }
    }
    if (win) return true
    //check col
    for (let r = 0; r < y; r++) {
        if (!markings[r][j]) return false
    }
    return true
}

const boardValueMap = (board) => {
    const map = {}
    const x = board[0].length
    const y = board.length
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            const val = board[i][j]
            if (map[val] == undefined) {
                map[val] = []
            }
            map[val].push([i, j])
        }
    }
    return map
}

const completeBoard = (board, drawings) => {
    const x = board[0].length
    const y = board.length
    const markings = getBlankMarkings(x, y)
    const bvm = boardValueMap(board)
    let count = 0
    for (const draw of drawings) {
        count++
        if (bvm[draw] != undefined) {
            for (const [i, j] of bvm[draw]) {
                markings[i][j] = true
                const win = checkWin(markings, i, j)
                if (win) return { board, count, draw, markings }
            }
        }
    }
    return undefined
}

const getScore = win => {
    const x = win.markings[0].length
    const y = win.markings.length
    let sum = 0
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
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
        if (current == undefined) continue
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
        if (current == undefined) continue
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