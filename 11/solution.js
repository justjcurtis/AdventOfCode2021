const parseInput = input => {
    const parsed = []
    for (const line of input) {
        parsed.push(line.split('').map(v => parseInt(v)))
    }
    return parsed
}

const getSurrounding = (x, y) => {
    return [
        { x: x - 1, y },
        { x: x + 1, y },
        { x, y: y - 1 },
        { x, y: y + 1 },

        { x: x - 1, y: y - 1 },
        { x: x + 1, y: y + 1 },
        { x: x + 1, y: y - 1 },
        { x: x - 1, y: y + 1 }
    ].filter(p => (p.x >= 0 && p.x < 10) && (p.y >= 0 && p.y < 10))
}


const flash = ({ x, y }, octos, flashmap) => {
    if (flashmap[`${x},${y}`] != undefined) return { octos, flashmap }
    octos[x][y] = 0
    flashmap[`${x},${y}`] = true
    const toFlash = []
    const surrounding = getSurrounding(x, y)
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

const solution = (input) => {
    let octos = parseInput(input)
    let flashCount = 0
    let i = 0
    while (true) {
        const result = step(octos)
        octos = result.octos
        if (i < 100) flashCount += result.flashCount
        i++
        if (result.flashCount == 100) break
    }
    return { part1: flashCount, part2: i }
}