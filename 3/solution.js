const mcbPos = (input, i) => {
    const counter = { '0': 0, '1': 0 }
    for (const bin of input) {
        counter[bin[i]]++
    }
    return counter['0'] > counter['1'] ? '0' : counter['1'] > counter['0'] ? '1' : '1'
}

const lcbPos = (input, i) => {
    const mcb = mcbPos(input, i)
    return mcb == '0' ? '1' : '0'
}

const epsilonGamma = input => {
    let g = ''
    let e = ''
    for (let i = 0; i < input[0].length; i++) {
        g += mcbPos(input, i)
        e += g.slice(-1) == '0' ? '1' : '0'
    }
    e = parseInt(e, 2)
    g = parseInt(g, 2)
    return { e, g }
}

const reduction = (input, bias, i = 0) => {
    const x = bias(input, i)
    const saved = []
    for (let bin of input) {
        if (bin[i] == x) {
            saved.push(bin)
        }
    }

    if (saved.length == 1) {
        return saved[0]
    } else if (saved.length > 1) {
        return reduction(saved, bias, i + 1)
    }

    return reduction(input, bias, i + 1)
}

const solution1 = input => {
    const { e, g } = epsilonGamma(input)
    return e * g
}


const solution2 = (input) => {
    let oxy = reduction(input.slice(0), mcbPos)
    let co2 = reduction(input.slice(0), lcbPos)
    return parseInt(oxy, 2) * parseInt(co2, 2)
}

module.exports = { solution1, epsilonGamma, solution2, mcbPos, lcbPos, reduction }