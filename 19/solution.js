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

const l1Norm = ([x, y, z]) => Math.abs(x) + Math.abs(y) + Math.abs(z)
const linfNorm = ([x, y, z]) => Math.max(Math.abs(x), Math.abs(y), Math.abs(z))
const l0Norm = ([x, y, z]) => Math.min(Math.abs(x), Math.abs(y), Math.abs(z))

const vSub = (a, b) => [a.x - b.x, a.y - b.y, a.z - b.z]
const vSum = (a, b) => [a.x + b.x, a.y + b.y, a.z + b.z]

const fingerprint = (a, b) => {
    const d = vSub(a, b)
    return [l1Norm(d), linfNorm(d), l0Norm(d)].join(',')
}

const buildBeaconMap = scanner => {
    const beaconMap = {}
    for (let i = 0; i < scanner.beacons.length - 1; i++) {
        for (let j = i + 1; j < scanner.beacons.length; j++) {
            if (i == j) continue
            const fp = fingerprint(scanner.beacons[i], scanner.beacons[j])
            if (beaconMap[fp] == undefined) beaconMap[fp] = []
            beaconMap[fp].push([i, j])
        }
    }
    return beaconMap
}

const permutePoint = ({ x, y, z }, i) => {
    const permutations = [
        [x, y, z],
        [-y, x, z],
        [-x, -y, z],
        [y, -x, z],

        [-z, y, x],
        [-y, -z, x],
        [z, -y, x],
        [y, z, x],

        [z, y, -x],
        [-y, z, -x],
        [-z, -y, -x],
        [y, -z, -x],

        [x, z, -y],
        [-z, x, -y],
        [-x, -z, -y],
        [z, -x, -y],

        [x, -z, y],
        [z, x, y],
        [-x, z, y],
        [-z, -x, y],

        [-x, y, -z],
        [-y, -x, -z],
        [x, -y, -z],
        [y, x, -z],
    ]
    let [a, b, c] = permutations[i]
    return { x: a, y: b, z: c }
}

const findMatches = (known, checking) => {
    const knownFps = Object.keys(known.fingerprints)
    const checkingFps = Object.keys(checking.fingerprints)
    const both = [...knownFps, ...checkingFps]
    const matches = both.filter((fp, i) => both.indexOf(fp) == i && checkingFps.includes(fp) && knownFps.includes(fp))
    const indexMap = {}
    for (const fp of matches) {
        const [a, b] = checking.fingerprints[fp][0]
        const [c, d] = known.fingerprints[fp][0]
        indexMap[a] = c
        indexMap[b] = d
    }
    return { matches, indexMap }
}

const vEqual = (a, b) => a[0] == b[0] && a[1] == b[1] && a[2] == b[2]

const findRotationAndDistMapping = (known, unknown, matches) => {
    let rotationIndex = -1
    let distMapping = undefined
    for (const mfp of matches) {
        const [ki, kj] = known.fingerprints[mfp][0]
        const [ui, uj] = unknown.fingerprints[mfp][0]
        const [ka, kb] = [known.beacons[ki], known.beacons[kj]]
        const [ua, ub] = [unknown.beacons[ui], unknown.beacons[uj]]

        for (let i = 0; i < 24; i++) {
            const pua = permutePoint(ua, i)
            const pub = permutePoint(ub, i)
            const da = vSub(ka, pua)
            const db = vSub(kb, pub)
            if (vEqual(da, db)) {
                rotationIndex = i
                const [x, y, z] = vSub(ka, pua)
                distMapping = { x, y, z }
                break
            }
        }
        if (rotationIndex > -1) return { rotationIndex, distMapping }
    }
    return null
}

const normalizeBeacon = (beacon, radm) => {
    const rotated = permutePoint(beacon, radm.rotationIndex)
    const [x, y, z] = vSum(rotated, radm.distMapping)
    return { x, y, z }
}

const getNewKnown = (unknown, matches, radm, knownBeaconsLength, indexMap) => {
    const matchMap = {}
    for (const fp of matches) {
        matchMap[fp] = true
    }
    const fingerprints = Object.keys(unknown.fingerprints)
    const knownNewBeacons = {}
    const newBeacons = []
    const newFingerprints = {}
    for (const fp of fingerprints) {
        if (matchMap[fp]) continue
        const [ai, bi] = unknown.fingerprints[fp][0]
        let newAi = -1
        let newBi = -1
        if (knownNewBeacons[ai] == undefined) {
            const a = normalizeBeacon(unknown.beacons[ai], radm)
            if (indexMap[ai] != undefined) {
                newAi = indexMap[ai]
                knownNewBeacons[ai] = newAi
            } else {
                newAi = newBeacons.length + knownBeaconsLength
                knownNewBeacons[ai] = newAi
                newBeacons.push(a)
            }
        } else {
            newAi = knownNewBeacons[ai]
        }
        if (knownNewBeacons[bi] == undefined) {
            const b = normalizeBeacon(unknown.beacons[bi], radm)
            if (indexMap[bi] != undefined) {
                newBi = indexMap[bi]
                knownNewBeacons[bi] = newBi
            } else {
                newBi = newBeacons.length + knownBeaconsLength
                knownNewBeacons[bi] = newBi
                newBeacons.push(b)
            }
        } else {
            newBi = knownNewBeacons[bi]
        }
        newFingerprints[fp] = [
            [newAi, newBi]
        ]
    }
    return { newBeacons, newFingerprints }
}

const getAbsolute = scannerReport => {
    const known = scannerReport[0]
    const unknown = scannerReport.slice(1)
    const scannerLocations = { 0: { x: 0, y: 0, z: 0 } }
    let prevLength = unknown.length
    while (unknown.length > 0) {
        for (let i = 0; i < unknown.length; i++) {
            const { matches, indexMap } = findMatches(known, unknown[i])
            if (matches.length >= 66) {
                const radm = findRotationAndDistMapping(known, unknown[i], matches)
                if (radm == null) break
                const newKnown = getNewKnown(unknown[i], matches, radm, known.beacons.length, indexMap)
                known.beacons = [...known.beacons, ...newKnown.newBeacons]
                known.fingerprints = {...known.fingerprints, ...newKnown.newFingerprints }
                scannerLocations[unknown[i].id] = radm.distMapping
                unknown.splice(i, 1)
                break
            }
        }
        if (prevLength == unknown.length) {
            return null
        }
        prevLength = unknown.length
    }
    return { beacons: known.beacons, scannerLocations }
}

const solution = input => {
    const scannerReport = parseInput(input)
    for (let i = 0; i < scannerReport.length; i++) {
        scannerReport[i].fingerprints = buildBeaconMap(scannerReport[i])
    }
    const { beacons, scannerLocations } = getAbsolute(scannerReport)
    const part1 = beacons.length

    let max = -1
    for (let i = 0; i < scannerReport.length; i++) {
        for (let j = 0; j < scannerReport.length; j++) {
            if (i == j) continue
            const d = vSub(scannerLocations[i], scannerLocations[j])
            const l1 = l1Norm(d)
            if (l1 > max) max = l1
        }
    }
    return { part1, part2: max }
}

module.exports = { solution }