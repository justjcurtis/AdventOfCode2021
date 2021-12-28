const getAlgIndex = (image, x, y, oob) => {
    const h = image.length
    const w = image[0].length
    const pixels = [
        [{ x: x - 1, y: y - 1 }, { x, y: y - 1 }, { x: x + 1, y: y - 1 }],
        [{ x: x - 1, y }, { x, y }, { x: x + 1, y }],
        [{ x: x - 1, y: y + 1 }, { x, y: y + 1 }, { x: x + 1, y: y + 1 }],
    ]
    let output = ''
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            const { x, y } = pixels[j][i]
            if (y < 0 || x < 0 || y >= h || x >= w) output += +oob
            else output += +(image[y][x] == '#')
        }
    }
    return parseInt(output, 2)
}

const applyAlg = (image, alg, oob) => {
    const h = image.length
    const w = image[0].length
    const output = []
    for (let y = -1; y <= h; y++) {
        let row = ''
        for (let x = -1; x <= w; x++) {
            const index = getAlgIndex(image, x, y, oob)
            row += alg[index]
        }
        output.push(row)
    }

    oob = (oob == false ? alg[0] : alg[511]) == "#"
    return { image: output, oob }
}

const algN = (image, alg, n, oob = false) => {
    for (let i = 0; i < n; i++) {
        const result = applyAlg(image, alg, oob)
        image = result.image
        oob = result.oob
    }
    return { image, oob }
}

const countLit = image => image.join('').split('').reduce((acc, v) => acc += +(v == '#'), 0)

const solution = input => {
    const after2 = algN(input.image, input.alg, 2)
    const part1 = countLit(after2.image)
    const after50 = algN(after2.image, input.alg, 48, after2.oob)
    const part2 = countLit(after50.image)
    return { part1, part2 }
}

module.exports = { solution }