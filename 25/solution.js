const parseInput = input => input.map(line => line.split(''))

const tick = grid => {
    const w = grid[0].length
    const h = grid.length

    // east
    const eastTick = grid.map(r => r.slice(0))
    for (let j = 0; j < h; j++) {
        for (let i = 0; i < w - 1; i++) {
            if (grid[j][i] == '>' && grid[j][i + 1] == '.') {
                eastTick[j][i] = '.'
                eastTick[j][i + 1] = '>'
                i++
            }
        }
        if (grid[j][0] == '.' && grid[j][w - 1] == '>') {
            eastTick[j][0] = '>'
            eastTick[j][w - 1] = '.'
        }
    }

    // south
    const southTick = eastTick.map(r => r.slice(0))
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h - 1; j++) {
            if (eastTick[j][i] == 'v' && eastTick[j + 1][i] == '.') {
                southTick[j][i] = '.'
                southTick[j + 1][i] = 'v'
                j++
            }
        }
        if (eastTick[0][i] == '.' && eastTick[h - 1][i] == 'v') {
            southTick[0][i] = 'v'
            southTick[h - 1][i] = '.'
        }
    }
    return southTick
}

const gridHash = grid => grid.map(line => line.join('')).join('')

const stepsToStop = a => {
    let steps = 1
    while (true) {
        let b = tick(a)
        if (gridHash(a) == gridHash(b)) break
        steps++
        a = b
    }
    return steps
}

const solution = input => {
    const grid = parseInput(input)
    const part1 = stepsToStop(grid)
    return { part1 }
}

module.exports = { solution }