const parseDots = dots => {
    const result = []
    for (const [x, y] of dots) {
        result.push({ x, y })
    }
    return result
}

const parseFolds = folds => {
    const result = []
    for (const fold of folds) {
        const arr = fold.slice(11).split('=')
        result.push({ axis: arr[0], size: parseInt(arr[1]) })
    }
    return result
}

const foldUp = (y, dots) => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].y > y) {
            dots[i].y = y - (dots[i].y - y)
        }
    }
    return dots
}

const foldLeft = (x, dots) => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].x > x) {
            dots[i].x = x - (dots[i].x - x)
        }
    }
    return dots
}

const fold = (dots, fold) => {
    switch (fold.axis) {
        case 'x':
            return foldLeft(fold.size, dots)
        case 'y':
            return foldUp(fold.size, dots)
        default:
            throw ('Unknown fold axis')
    }
}
const getDotMap = dots => {
    const map = {}
    for (const { x, y } of dots) {
        if (map[`${x},${y}`] == undefined) map[`${x},${y}`] = true
    }
    return map
}

const countDots = dots => {
    const map = getDotMap(dots)
    return Object.keys(map).length
}

const renderDots = dots => {
    let maxX = -1
    let maxY = -1
    for (const { x, y } of dots) {
        if (x > maxX) maxX = x
        if (y > maxY) maxY = y
    }
    const dotMap = getDotMap(dots)
    const grid = []
    for (let Y = 0; Y <= maxY; Y++) {
        grid.push([])
        for (let X = 0; X <= maxX; X++) {
            const dot = dotMap[`${X},${Y}`] != undefined
            grid[Y].push(dot ? '#' : '.')
        }
    }
    return grid
}

const solution = input => {
    const dots = parseDots(input.dots)
    const folds = parseFolds(input.folds)
    const firstFoldDots = fold(dots, folds[0])
    const part1 = countDots(firstFoldDots)
    let finishedFolds = firstFoldDots
    for (let i = 1; i < folds.length; i++) {
        finishedFolds = fold(finishedFolds, folds[i])
    }
    const grid = renderDots(finishedFolds)
    const part2 = '\n' + grid.map(r => r.join('')).join('\n')
    return { part1, part2 }
}

module.exports = {
    parseDots,
    parseFolds,
    foldUp,
    foldLeft,
    fold,
    getDotMap,
    countDots,
    renderDots,
    solution
}