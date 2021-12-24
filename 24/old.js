const inp = (state, key, value) => {
    state[key] = value
}

const add = (state, a, b) => {
    state[a] += b
}

const mul = (state, a, b) => {
    state[a] *= b
}

const div = (state, a, b) => {
    state[a] /= b
}

const mod = (state, a, b) => {
    state[a] %= b
}

const eql = (state, a, b) => {
    state[a] = +(state[a] == b)
}

const parseInput = input => {
    const instructions = []
    for (const line of input) {
        const [action, a, b] = line.split(' ')
        const instruction = { action, a }
        if (b !== undefined) {
            if (!isNaN(b)) instruction.b = parseInt(b)
            else instruction.b = b
        }
        instructions.push(instruction)
    }
    return instructions
}

const actions = {
    'inp': { id: 'inp', fn: inp },
    'add': { id: 'add', fn: add },
    'mul': { id: 'mul', fn: mul },
    'div': { id: 'div', fn: div },
    'mod': { id: 'mod', fn: mod },
    'eql': { id: 'eql', fn: eql },
}

const checkModelNumber = (instructions, model) => {
    let state = {
        w: 0,
        x: 0,
        y: 0,
        z: 0
    }
    let m = 0
    for (const i of instructions) {
        if (i.action == actions.inp.id) {
            let mn = model[m]
            m++
            actions[i.action].fn(state, i.a, mn)
            continue
        }
        let b = i.b
        if (isNaN(i.b)) b = state[b]
        actions[i.action].fn(state, i.a, b)
        continue
    }
    return state['z'] == 0
}

const solution = input => {
    const instructions = parseInput(input)
    let hvmn = null
    for (let i = 99999999999999; i > 9999999999999; i--) {
        const str = `${i}`
        if (str.includes('0')) continue
        if (checkModelNumber(instructions, str)) {
            hvmn = i
            break
        }
    }

    return { part1: hvmn }
}

const input = require('./input')

console.time('a')
console.log(solution(input))
console.timeEnd('a')