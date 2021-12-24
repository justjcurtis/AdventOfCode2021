const getModelNumber = (input, min = false) => {
    const pairs = []
    for (let i = 0; i < 14; i++) {
        pairs.push([parseInt(input[i * 18 + 5].slice(6)), parseInt(input[i * 18 + 15].slice(6))]);
    }

    const stack = []
    const keys = {}
    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i]
        if (a > 0) {
            stack.push([i, b]);
        } else {
            var [j, bj] = stack.pop();
            keys[i] = [j, bj + a];
        }
    }

    const output = {}
    const iters = Object.keys(keys)
    for (const key of iters) {
        const [a, b] = keys[key]
        output[key] = min ? Math.max(1, 1 + b) : Math.min(9, 9 + b)
        output[a] = min ? Math.max(1, 1 - b) : Math.min(9, 9 - b)
    }

    let result = ''
    for (let i = 0; i < 14; i++) {
        result += output[i]
    }

    return parseInt(result)
}

const solution = input => {
    const part1 = getModelNumber(input)
    const part2 = getModelNumber(input, true)
    return { part1, part2 }
}