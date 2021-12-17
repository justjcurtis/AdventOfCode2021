const parseTarget = input => {
    const data = input.slice(13)
    const [a, b] = data.split(', ')
    const X = a.slice(2).split('..').map(v => parseInt(v))
    const Y = b.slice(2).split('..').map(v => parseInt(v))
    return { x: { min: X[0], max: X[1] }, y: { min: Y[0], max: Y[1] } }
}

const simX = (v, min, max) => {
    if (min < 0 || max < 0) throw ('not implemented for negative x targets')
    let x = 0
    let i = 0
    while (true) {
        if (x >= min && x <= max) return { i, x }
        if (v <= 0 || x > max) return { i: -1 }
        x += v
        v += v == 0 ? 0 : v < 0 ? 1 : -1
        i++
    }
}

const simY = (v, min, max) => {
    let y = 0
    let i = 0
    let maxY = 0
    while (true) {
        if (y < min && v < 0) return { i: -1 }
        if (y >= min && y <= max) return { i, y, maxY }
        y += v
        if (y > maxY) maxY = y
        v--
        i++
    }
}

const getPossibleXVels = D => {
    let v = D.max
    let vels = []
    while (true) {
        const t = simX(v, D.min, D.max)
        if (t.i > -1) {
            vels.push({ v, ...t })
        }
        v += v > 0 ? -1 : 1
        if (v == 0) break
    }
    return vels
}

const getPossibleYVels = D => {
    let v = Math.max(Math.abs(D.min), Math.abs(D.max))
    let vels = []
    while (true) {
        const t = simY(v, D.min, D.max)
        if (t.i > -1) {
            vels.push({ v, ...t })
        }
        v--
        if (v < D.min) break
    }
    return vels
}

const simXY = (xV, yV, target) => {
    let x = 0
    let y = 0
    let i = 0
    while (true) {
        if (x >= target.x.min && x <= target.x.max) {
            if (y >= target.y.min && y <= target.y.max) {
                return true
            }
        }
        if ((y < target.y.min && yV < 0) ||
            ((x < target.x.min && xV <= 0) || x > target.x.max)
        ) return false

        y += yV
        x += xV
        yV--
        xV += xV == 0 ? 0 : xV < 0 ? 1 : -1
        i++
    }
}

const solution = input => {
    const target = parseTarget(input)
    const xVels = getPossibleXVels(target.x)
    const yVels = getPossibleYVels(target.y)
    let maxY = undefined
    const distinctXY = []
    for (const yV of yVels) {
        for (const xV of xVels) {
            const findsTarget = simXY(xV.v, yV.v, target)
            if (findsTarget) {
                if (maxY == undefined) maxY = yV.maxY
                distinctXY.push({ x: xV.v, y: yV.v })
            }
        }
    }

    return { part1: maxY, part2: distinctXY.length }
}

module.exports = { solution }