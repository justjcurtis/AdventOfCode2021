const getPolyPairs = polymer => {
    const pairs = {}
    for (let i = 0; i < polymer.length - 1; i++) {
        const id = `${polymer[i]}${polymer[i + 1]}`
        if (pairs[id] == undefined) {
            pairs[id] = { count: 0, inbox: [] }
        }
        pairs[id].count++
    }
    return pairs
}

const parseInsertions = insertions => {
    const result = []
    for (const str of insertions) {
        const arr = str.split(' -> ')
        result.push({ pair: arr[0], val: arr[1] })
    }
    return result
}

const doInsert = (insertion, polyPairs) => {
    if (polyPairs[insertion.pair] == undefined || polyPairs[insertion.pair].count == 0) return { didInsert: false }
    polyPairs[insertion.pair].inbox.push(insertion.val)
    return { polyPairs, didInsert: true }
}

const updatePolyPairs = (polyPairs, pairsToUpdate) => {
    const newCounts = {}
    for (const pair of pairsToUpdate) {
        const newPairs = []
        const inbox = polyPairs[pair].inbox.slice(0)
        newPairs.push(`${pair[0]}${inbox[0]}`)
        if (inbox.length > 2) {
            for (let i = 1; i < inbox.length - 1; i++) {
                newPairs.push(`${inbox[i]}${inbox[i + 1]}`)
            }
        }
        newPairs.push(`${inbox.slice(-1)[0]}${pair[1]}`)
        for (const np of newPairs) {
            if (newCounts[np] == undefined) {
                newCounts[np] = 0
            }
            newCounts[np] += polyPairs[pair].count
        }
        delete polyPairs[pair]
    }
    const newCountsArr = Object.entries(newCounts)
    for (const [pair, count] of newCountsArr) {
        if (polyPairs[pair] == undefined) polyPairs[pair] = { count: 0, inbox: [] }
        polyPairs[pair].count += count
    }
    return polyPairs
}

const doInsertions = (insertions, polyPairs, n = 1) => {
    for (let i = 0; i < n; i++) {
        const pairsToUpdate = []
        for (const insertion of insertions) {
            const result = doInsert(insertion, polyPairs)
            if (result.didInsert) {
                pairsToUpdate.push(insertion.pair)
                polyPairs = result.polyPairs
            }
        }
        polyPairs = updatePolyPairs(polyPairs, pairsToUpdate)
    }
    return polyPairs
}

const getCommonElements = (polyPairs) => {
    const pairs = Object.keys(polyPairs)
    const map = {}
    for (const pair of pairs) {
        if (map[pair[0]] == undefined) map[pair[0]] = 0
        map[pair[0]] += polyPairs[pair].count / 2
        if (map[pair[1]] == undefined) map[pair[1]] = 0
        map[pair[1]] += polyPairs[pair].count / 2
    }
    const arr = Object.entries(map)
    arr.sort((a, b) => a[1] - b[1])
    return { max: Math.ceil(arr.slice(-1)[0][1]), min: Math.ceil(arr[0][1]) }
}

const solution = input => {
    const insertions = parseInsertions(input.insertions)
    const polyPairs = getPolyPairs(input.polymer)
    const post10Pairs = doInsertions(insertions, polyPairs, 10)
    const commonPost10 = getCommonElements(post10Pairs)
    const post40Pairs = doInsertions(insertions, post10Pairs, 30)
    const commonPost40 = getCommonElements(post40Pairs)
    return { part1: commonPost10.max - commonPost10.min, part2: commonPost40.max - commonPost40.min }
}

module.exports = {
    getPolyPairs,
    parseInsertions,
    doInsert,
    updatePolyPairs,
    doInsertions,
    getCommonElements,
    solution
}