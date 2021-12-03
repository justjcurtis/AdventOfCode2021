const epsilonGammaFromBinMap = binMap => {
    let e = ''
    let g = ''
    for (const m of binMap) {
        if (m['0'] < m['1']) {
            g += '1'
            e += '0'
        } else if (m['0'] > m['1']) {
            g += '0'
            e += '1'
        } else {
            throw "equal bits, what do ?"
        }
    }
    return { e: parseInt(e, 2), g: parseInt(g, 2) }
}

const binMapForInput = input => {
    const l = input[0].length
    const binMap = []
    for (const bin of input) {
        for (let i = 0; i < l; i++) {
            if (binMap[i] == undefined) {
                binMap.push({ '0': 0, '1': 0 })
            }
            binMap[i][bin[i]]++
        }
    }
    return binMap
}

const solution1 = input => {
    const binMap = binMapForInput(input)
    const { e, g } = epsilonGammaFromBinMap(binMap)
    return e * g
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

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
    } else {
        return reduction(input, bias, i + 1)
    }
}

const solution2 = (input) => {
    let oxy = reduction(input.slice(0), mcbPos)
    let co2 = reduction(input.slice(0), lcbPos)
    return parseInt(oxy, 2) * parseInt(co2, 2)
}

module.exports = { solution1, epsilonGammaFromBinMap, binMapForInput, solution2, mcbPos, lcbPos, reduction }