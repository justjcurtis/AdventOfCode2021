const parseInput = input => {
    const parsed = []
    for (const line of input) {
        parsed.push(line.split('').map(v => parseInt(v)))
    }
    return parsed
}

const getSurrounding = (x, y, w, h) => {
    return [
        { x: x - 1, y, val: -1 },
        { x: x + 1, y, val: -1 },
        { x, y: y - 1, val: -1 },
        { x, y: y + 1, val: -1 },

        { x: x - 1, y: y - 1, val: -1 },
        { x: x + 1, y: y + 1, val: -1 },
        { x: x + 1, y: y - 1, val: -1 },
        { x: x - 1, y: y + 1, val: -1 }
    ].filter(p => (p.x >= 0 && p.x < w) && (p.y >= 0 && p.y < h))
}


const flash = ({ x, y }, octos, flashmap) => {
    if (flashmap[`${x},${y}`] != undefined) return { octos, flashmap }
    octos[x][y] = 0
    flashmap[`${x},${y}`] = true
    const w = octos.length
    const h = octos[0].length
    const toFlash = []
    const surrounding = getSurrounding(x, y, w, h)
    for (const s of surrounding) {
        if (flashmap[`${s.x},${s.y}`] == undefined) {
            octos[s.x][s.y]++;
            if (octos[s.x][s.y] > 9) {
                toFlash.push({ x: s.x, y: s.y })
            }
        }
    }
    for (let p of toFlash) {
        const postFlash = flash(p, octos.slice(0), flashmap)
        octos = postFlash.octos
        flashmap = postFlash.flashmap
    }
    return { octos, flashmap }
}

const step = (octos, flashmap = {}) => {
    const toFlash = []
    for (let x = 0; x < octos.length; x++) {
        for (let y = 0; y < octos[x].length; y++) {
            octos[x][y]++;
            if (octos[x][y] > 9) toFlash.push({ x, y })
        }
    }
    for (let p of toFlash) {
        const postFlash = flash(p, octos.slice(0), flashmap)
        octos = postFlash.octos
        flashmap = postFlash.flashmap
    }
    return { octos, flashCount: Object.keys(flashmap).length }
}

const stepN = (octos, n) => {
    let flashCount = 0
    for (let i = 0; i < n; i++) {
        const result = step(octos.slice(0))
        octos = result.octos
        flashCount += result.flashCount

    }
    return { octos, flashCount }
}

const solution = (input) => {
    let octos = parseInput(input)
    const w = octos.length
    const h = octos[0].length
    const post100 = stepN(JSON.parse(JSON.stringify(octos)), 100)
    let i = 0
    while (true) {
        const result = step(octos.slice(0))
        octos = result.octos
        i++
        if (result.flashCount == w * h) break
    }
    return { part1: post100.flashCount, part2: i }
}