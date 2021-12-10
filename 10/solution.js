const closes = ')}]>'

const pairMap = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
}

const cost = {
    error: {
        ')': -3,
        ']': -57,
        '}': -1197,
        '>': -25137,
    },
    complete: {
        ')': 1,
        ']': 2,
        '}': 3,
        '>': 4,
    }
}

const reduceRE = /\(\)|\[\]|\{\}|\<\>/g

const lineReduce = (line) => reduceRE.test(line) ? lineReduce(line.replace(reduceRE, '')) : line

const getScore = line => {
    const reduced = lineReduce(line)
    let score = 0
    for (let i = reduced.length - 1; i >= 0; i--) {
        const c = reduced[i]
        const e = reduced[reduced.length - i]
        if (closes.includes(e)) return cost.error[e]
        score *= 5
        score += cost.complete[pairMap[c]]
    }
    return score
}

const middleEntry = arr => {
    arr.sort((a, b) => a - b)
    return arr[(arr.length - 1) / 2]
}

const solution = input => {
    let corruptScore = 0
    let completionScores = []
    for (const line of input) {
        const score = getScore(line)
        if (score < 0) {
            corruptScore -= score
            continue
        }
        completionScores.push(score)
    }
    return { part1: corruptScore, part2: middleEntry(completionScores) }
}

module.exports = {
    lineReduce,
    getScore,
    middleEntry,
    solution
}