const input = require('./input')

const parseInput = input => {
    const scannerReport = []
    for (const line of input) {
        if (line.length < 1) continue
        if (line.startsWith('---')) {
            scannerReport.push({ id: scannerReport.length, beacons: [] })
            continue
        }
        const [x, y, z] = line.split(',')
        scannerReport[scannerReport.length - 1].beacons.push({ x: parseInt(x), y: parseInt(y), z: parseInt(z) })
    }
    return scannerReport
}

const testPoint = [-1, 2, -3]

const permutePoint = ([x, y, z], i) => {
    const permutations = [
        [x, y, z],
        [x, z, y],
        [y, x, z],
        [y, z, x],
        [z, x, y],
        [z, y, x],

        [-x, -y, -z],
        [-x, -z, -y],
        [-y, -x, -z],
        [-y, -z, -x],
        [-z, -x, -y],
        [-z, -y, -x],

        [-x, -y, z],
        [-x, -z, y],
        [-y, -x, z],
        [-y, -z, x],
        [-z, -x, y],
        [-z, -y, x],

        [-x, y, z],
        [-x, z, y],
        [-y, x, z],
        [-y, z, x],
        [-z, x, y],
        [-z, y, x],

        [x, -y, -z],
        [x, -z, -y],
        [y, -x, -z],
        [y, -z, -x],
        [z, -x, -y],
        [z, -y, -x],

        [x, y, -z],
        [x, z, -y],
        [y, x, -z],
        [y, z, -x],
        [z, x, -y],
        [z, y, -x],

        [x, -y, z],
        [x, -z, y],
        [y, -x, z],
        [y, -z, x],
        [z, -x, y],
        [z, -y, x],

        [-x, y, -z],
        [-x, z, -y],
        [-y, x, -z],
        [-y, z, -x],
        [-z, x, -y],
        [-z, y, -x],
    ]
    return permutations[i]
}