const getFishMap = fish => {
    const map = {}
    for (let i = 0; i < 9; i++) {
        map[i] = 0
    }
    for (const f of fish) {
        map[f]++
    }
    return map
}

const tick = (fishMap, n) => {
    for (let i = 0; i < n; i++) {
        const newFish = fishMap[0]
        for (let j = 0; j < 8; j++) {
            fishMap[j] = fishMap[j + 1]
        }
        fishMap[8] = newFish
        fishMap[6] += newFish
    }
    return fishMap
}

const countMap = map => Object.values(map).reduce((v, acc) => acc + v, 0)

const solution = (fish, days) => countMap(tick(getFishMap(fish), days))

module.exports = { countMap, getFishMap, solution, tick }