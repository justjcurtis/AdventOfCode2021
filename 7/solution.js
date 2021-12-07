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

const ascendingLinearFuel = (a, b) => a.linear - b.linear
const ascendingExpFuel = (a, b) => a.exp - b.exp

const solution = crabs => {
    const min = Math.min(...crabs)
    const max = Math.max(...crabs)

    const fuleCost = []
    for (let i = min; i <= max; i++) {
        fuleCost.push(fuelToPos(crabs, i))
    }

    fuleCost.sort(ascendingLinearFuel)
    const part1 = fuleCost[0].linear

    fuleCost.sort(ascendingExpFuel)
    const part2 = fuleCost[0].exp

    return { part1, part2 }
}

module.exports = { ascendingExpFuel, ascendingLinearFuel, fuelStepExp, fuelToPos, solution }