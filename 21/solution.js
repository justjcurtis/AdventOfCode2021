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
    return { p, prev }
}

const play = ({ p1, p2, prev }) => {
    while (true) {
        const p1Move = playerMove(p1, prev)
        p1 = p1Move.p
        prev = p1Move.prev
        if (p1.score >= 1000) break
        const p2Move = playerMove(p2, prev)
        p2 = p2Move.p
        prev = p2Move.prev
        if (p2.score >= 1000) break
    }
    return { p1, p2, prev }
}
const move = (p, r) => {
    const pos = (((p.pos - 1) + r) % 10) + 1
    const score = pos + p.score
    return { pos, score }
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

const playQuantum = ({ p1, p2 }, p1Turn = true, roll = -1) => {
    let newP1 = { score: p1.score, pos: p1.pos }
    let newP2 = { score: p2.score, pos: p2.pos }
    const wins = [0, 0]
    if (roll > 0) {
        if (p1Turn) {
            newP2 = move(newP2, roll)
            if (newP2.score >= 21) return [0, 1]
        } else {
            newP1 = move(newP1, roll)
            if (newP1.score >= 21) return [1, 0]
        }
    }
    for (const q of qDie) {
        const newWins = playQuantum({ p1: {...newP1 }, p2: {...newP2 } }, !p1Turn, q.roll)
        wins[0] += newWins[0] * q.times
        wins[1] += newWins[1] * q.times
    }
    return wins
}

const solution = input => {
    const gamestate = parseInput(input)
    const result = play(JSON.parse(JSON.stringify(gamestate)))
    const part1 = result.p1.score > result.p2.score ?
        result.p2.score * (result.p1.rollCount + result.p2.rollCount) :
        result.p1.score * (result.p1.rollCount + result.p2.rollCount)

    const qResult = playQuantum(gamestate)
    return { part1, part2: Math.max(...qResult) }
}

module.exports = { solution }