const parseInput = input => {
    const parsed = []
    for (const row of input) {
        parsed.push(row.split('').map(v => parseInt(v)))
    }
    return parsed
}

const getSurrounding = (x, y, w, h) => {
    return [
        { x: x - 1, y, val: -1 },
        { x: x + 1, y, val: -1 },
        { x, y: y - 1, val: -1 },
        { x, y: y + 1, val: -1 }
    ].filter(p => (p.x >= 0 && p.x < w) && (p.y >= 0 && p.y < h))
}

const getLowPoints = depths => {
    const w = depths.length
    const h = depths[0].length
    const lows = []
    for (let x = 0; x < depths.length; x++) {
        const row = depths[x]
        for (let y = 0; y < row.length; y++) {
            const val = depths[x][y]
            if (x == 0 || depths[x - 1][y] > val) {
                if (x == w - 1 || depths[x + 1][y] > val) {
                    if (y == 0 || depths[x][y - 1] > val) {
                        if (y == h - 1 || depths[x][y + 1] > val) {
                            lows.push({ x, y, val })
                        }
                    }
                }
            }
        }
    }
    return lows
}

const getTotalRisk = points => {
    let total = 0
    for (const p of points) {
        total += p.val
    }
    return total + points.length
}

const getBasinFromLow = (low, depths, w, h, basin = {}) => {
    basin[`${low.x},${low.y}`] = low
    const surrounding = getSurrounding(low.x, low.y, w, h)
    for (const s of surrounding) {
        if (basin[`${s.x},${s.y}`] == undefined) {
            s.val = depths[s.x][s.y]
            if (s.val < 9) {
                basin = getBasinFromLow(s, depths, w, h, basin)
            }
        }
    }
    return basin
}

const get3LargestBasins = (lows, depths) => {
    const w = depths.length
    const h = depths[0].length
    const basins = []
    for (const low of lows) {
        basins.push(Object.values(getBasinFromLow(low, depths, w, h)))
    }
    basins.sort((a, b) => b.length - a.length)
    return basins.slice(0, 3)
}

const solution = input => {
    const depths = parseInput(input)
    const lows = getLowPoints(depths)
    const basins = get3LargestBasins(lows, depths)
    return { part1: getTotalRisk(lows), part2: basins.reduce((acc, basin) => acc *= basin.length, 1) }
}

module.exports = {
    parseInput,
    getSurrounding,
    getLowPoints,
    getTotalRisk,
    getBasinFromLow,
    get3LargestBasins,
    solution
}