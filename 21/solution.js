const roll = (prev) => prev == 100 ? 1 : prev + 1

const parseInput = input => {
    return { prev: 0, p1: { pos: parseInt(input[0].slice(27)), score: 0, rollCount: 0 }, p2: { pos: parseInt(input[1].slice(27)), score: 0, rollCount: 0 } }
}

const playerMove = (p, prev) => {
    const a = roll(prev)
    const b = roll(a)
    const c = roll(b)
    prev = c
    p.pos = (((p.pos - 1) + (a + b + c)) % 10) + 1
    p.score += p.pos
    p.rollCount += 3
    return prev
}

const play = ({ p1, p2, prev }) => {
    while (true) {
        prev = playerMove(p1, prev)
        if (p1.score >= 1000) break
        prev = playerMove(p2, prev)
        if (p2.score >= 1000) break
    }
    return { p1, p2, prev }
}

const qDie = [
    { roll: 3, times: 1 },
    { roll: 4, times: 3 },
    { roll: 5, times: 6 },
    { roll: 6, times: 7 },
    { roll: 7, times: 6 },
    { roll: 8, times: 3 },
    { roll: 9, times: 1 }
]

const playQuantum = ({ p1, p2 }, turn = 1) => {
    if (p1.score >= 21) return 1;
    if (p2.score >= 21) return 0;

    const current = turn ? p1 : p2
    let sum = 0
    for (let q = 0; q < 7; q++) {
        const outcome = qDie[q]
        const prevPos = current.pos;
        const prevScore = current.score;
        current.pos = ((current.pos - 1 + outcome.roll) % 10) + 1;
        current.score += current.pos;
        sum += outcome.times * playQuantum({ p1, p2 }, !turn)
        current.pos = prevPos
        current.score = prevScore
    }
    return sum
}

const solution = input => {
    const gamestate = parseInput(input)
    const result = play(JSON.parse(JSON.stringify(gamestate)))
    const part1 = result.p1.score > result.p2.score ?
        result.p2.score * (result.p1.rollCount + result.p2.rollCount) :
        result.p1.score * (result.p1.rollCount + result.p2.rollCount);
    const part2 = playQuantum(gamestate)

    return { part1, part2 }
}

module.exports = { solution }