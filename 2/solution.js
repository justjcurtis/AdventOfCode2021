const part1Handler = (cmd, x, { a, d, h }) => {
    switch (cmd[0]) {
        case 'f':
            h += x
            break;
        case 'd':
            d += x
            break;
        case 'u':
            d -= x
            break;
        default:
            throw ('unknown command: ', cmd)
    }
    return { a, d, h }
}

const part2Handler = (cmd, x, { a, d, h }) => {
    switch (cmd[0]) {
        case 'f':
            h += x
            d += a * x
            break;
        case 'd':
            a += x
            break;
        case 'u':
            a -= x
            break;
        default:
            throw ('unknown command: ', cmd)
    }
    return { a, d, h }
}

const solution = (input, cmdHandler) => {
    let h = 0
    let d = 0
    let a = 0
    for (const cmd of input) {
        const x = parseInt(cmd.split(' ')[1])
        const { a: A, d: D, h: H } = cmdHandler(cmd[0], x, { a, d, h })
        a = A
        d = D
        h = H
    }
    return h * d
}

module.exports = { part1Handler, part2Handler, solution }