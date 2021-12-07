const fuelStepExp = n => ((Math.pow(n, 2)) + n) / 2

const fuelToPos = (crabs, i) => {
    let linear = 0
    let exp = 0
    for (const crab of crabs) {
        const dist = Math.abs(crab - i)
        linear += dist
        exp += fuelStepExp(dist)
    }
    return { linear, exp }
}

const ascendingCrabs = (a, b) => a - b
const ascendingLinearFuel = (a, b) => a.fuel.linear - b.fuel.linear
const ascendingExpFuel = (a, b) => a.fuel.exp - b.fuel.exp

const solution = crabs => {
    crabs.sort(ascendingCrabs)
    const min = Math.min(...crabs)
    const max = Math.max(...crabs)

    const fuleCost = []
    for (let i = min; i <= max; i++) {
        fuleCost.push({ i, fuel: fuelToPos(crabs, i) })
    }

    fuleCost.sort(ascendingLinearFuel)
    const part1 = fuleCost[0].fuel.linear

    fuleCost.sort(ascendingExpFuel)
    const part2 = fuleCost[0].fuel.exp

    return { part1, part2 }
}

module.exports = { ascendingCrabs, ascendingExpFuel, ascendingLinearFuel, fuelStepExp, fuelToPos, solution }