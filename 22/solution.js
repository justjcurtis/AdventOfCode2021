const input = require('./input')
const test = require('./testData')

const parseInput = input => {
    const parsed = []
    for (const line of input) {
        const action = line.split(' ')[0] == 'on'
        const ranges = line.split(' ')[1]
        const [xStr, yStr, zStr] = ranges.split(',').map(str => str.slice(2))
        const x = xStr.split('..').map(Number)
        const y = yStr.split('..').map(Number)
        const z = zStr.split('..').map(Number)
        parsed.push({ action, x, y, z })
    }
    return parsed
}