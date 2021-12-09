const parseInput = input => {
    const parsed = []
    for (const row of input) {
        parsed.push(row.split('').map(v => parseInt(v)))
    }
    return parsed
}

const getSurrounding = (x, y, w, h, depths) => {
    const surrounding = [
        { x: x - 1, y },
        { x: x + 1, y },
        { x, y: y - 1 },
        { x, y: y + 1 }
    ].filter(p => (p.x >= 0 && p.x < w) && (p.y >= 0 && p.y < h))
    return surrounding.map(p => ({ ...p, val: depths[p.x][p.y] }))
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
                    const surrounding = getSurrounding(x, y, w, h, depths)
                    const isLow = surrounding.filter(s => s.val < val).length == 0
                    if (isLow) lows.push({ x, y, val })
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

const getBasinFromLow = (low, depths, basin = {}) => {
    basin[`${low.x},${low.y}`] = low
    const w = depths.length
    const h = depths[0].length
    const surrounding = getSurrounding(low.x, low.y, w, h, depths).filter(s => s.val < 9)
    for (const s of surrounding) {
        if (basin[`${s.x},${s.y}`] == undefined) {
            basin = getBasinFromLow(s, depths, basin)
        }
    }
    return basin
}

const get3LargestBasins = (lows, depths) => {
    const basins = []
    for (const low of lows) {
        basins.push(Object.values(getBasinFromLow(low, depths)))
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