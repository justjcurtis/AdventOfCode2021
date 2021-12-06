const newGrid = (x = 1000, y = 1000) => {
    const grid = []
    const row = []
    for (let j = 0; j < y; j++) {
        row.push(0)
    }
    for (let i = 0; i < x; i++) {
        grid.push(row.slice(0))
    }
    return grid
}

const parseLine = line => {
    const [aString, bString] = line.split(' -> ')
    const aVals = aString.split(',')
    const bVals = bString.split(',')
    const a = { x: parseInt(aVals[0]), y: parseInt(aVals[1]) }
    const b = { x: parseInt(bVals[0]), y: parseInt(bVals[1]) }
    return { a, b }
}

const parseInput = input => {
    const lines = []
    for (const line of input) {
        lines.push(parseLine(line))
    }
    return lines
}

const isHorizontal = ({ a, b }) => a.y == b.y
const isVertical = ({ a, b }) => a.x == b.x
const isCardinal = (line) => isHorizontal(line) || isVertical(line)
const isDiagonal = line => !isCardinal(line)

const getPoints = ({ a, b }) => {
    const points = []
    const horizontal = isHorizontal({ a, b })
    const vertical = isVertical({ a, b })
    const diagonal = isDiagonal({ a, b })
    if (horizontal) {
        for (let i = Math.min(a.x, b.x); i <= Math.max(a.x, b.x); i++) {
            points.push({ x: i, y: a.y })
        }
        return points
    }
    if (vertical) {
        for (let i = Math.min(a.y, b.y); i <= Math.max(a.y, b.y); i++) {
            points.push({ x: a.x, y: i })
        }
        return points
    }
    if (a.x > b.x) {
        const t = a
        a = b
        b = t
    }
    if (diagonal) {
        let y = a.y
        if (a.y < b.y) {
            for (let i = a.x; i <= b.x; i++) {
                points.push({ x: i, y })
                y++
            }
        } else {
            for (let i = a.x; i <= b.x; i++) {
                points.push({ x: i, y })
                y--
            }
        }
        return points
    }
    throw ('unknown line')
}

const mapLines = (lines, grid = undefined) => {
    if (grid == undefined) grid = newGrid()
    for (const line of lines) {
        const points = getPoints(line)
        for (const point of points) {
            grid[point.x][point.y]++
        }
    }
    return grid
}

const countThreshold = (grid, min = 2) => {
    let count = 0
    for (const row of grid) {
        for (const point of row) {
            if (point >= min) count++
        }
    }
    return count
}

const solution = input => {
    const lines = parseInput(input)
    const straight = lines.slice(0).filter(line => isCardinal(line))
    const diagonal = lines.slice(0).filter(line => isDiagonal(line))
    const straightGrid = mapLines(straight)
    const fullGrid = mapLines(diagonal, JSON.parse(JSON.stringify(straightGrid)))
    return { straight: countThreshold(straightGrid), all: countThreshold(fullGrid) }
}

module.exports = {
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
}