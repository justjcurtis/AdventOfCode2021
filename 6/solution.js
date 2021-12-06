const getFishMap = fish => {
    const map = new Array(9).fill(0)
    for (const f of fish) {
        map[f]++
    }
    return map
}

const tick = (fishMap, n) => {
    const newFishMap = fishMap.slice(0)
    for (let i = 0; i < n; i++) {
        const newFish = newFishMap[0]
        for (let j = 0; j < 8; j++) {
            newFishMap[j] = newFishMap[j + 1]
        }
        newFishMap[8] = newFish
        newFishMap[6] += newFish
    }
    return newFishMap
}

const solution = (fish, days) => tick(getFishMap(fish), days).reduce((v, acc) => acc + v, 0)

module.exports = { getFishMap, solution, tick }