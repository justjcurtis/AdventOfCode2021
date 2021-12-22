const input = require('./input')
const test = require('./testData')

const parsePixels = pixels => parseInt(pixels.map(row => row.join('')).join('').split('').map(v => v == '.' ? '0' : '1').join(''), 2)

const getPixelArray = (image, x, y, oob) => {
    const pixels = [
        [{ x: x - 1, y: y - 1 }, { x, y: y - 1 }, { x: x + 1, y: y - 1 }],
        [{ x: x - 1, y }, { x, y }, { x: x + 1, y }],
        [{ x: x - 1, y: y + 1 }, { x, y: y + 1 }, { x: x + 1, y: y + 1 }],
    ]
    let output = [
        [],
        [],
        []
    ]
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            const { x, y } = pixels[j][i]
            if (y < 0 || x < 0 || y >= image.length || x >= image[0].length) output[j].push(oob ? '#' : '.')
            else output[j].push(image[y][x])
        }
    }
    return output
}

const crop = image => {
    const cropped = []
    for (let i = 3; i < image.length - 3; i++) {
        cropped.push(image[i].slice(3, image[i].length - 3))
    }
    return cropped
}

const applyAlg = (image, alg, oob) => {
    const output = []
    for (let y = -4; y <= image.length + 3; y++) {
        let row = ''
        for (let x = -4; x <= image[0].length + 3; x++) {
            const index = parsePixels(getPixelArray(image, x, y, oob))
            row += alg[index]
        }
        output.push(row)
    }

    oob = (oob == false ? alg[0] : alg[511]) == "#"
    return { image: crop(output), oob }
}

const algN = (image, alg, n, oob = false) => {
    let current = JSON.parse(JSON.stringify(image))
    for (let i = 0; i < n; i++) {
        const result = applyAlg(current, alg, oob)
        current = result.image
        oob = result.oob
    }
    return { image: current, oob }
}

const countLit = image => image.reduce((acc, row) => [...acc, ...row], []).filter(v => v == "#").length

const solution = input => {
    const after2 = algN(input.image, input.alg, 2)
    const part1 = countLit(after2.image)
    const after50 = algN(after2.image, input.alg, 48, after2.oob)
    const part2 = countLit(after50.image)
    return { part1, part2 }
}

console.log(solution(input))