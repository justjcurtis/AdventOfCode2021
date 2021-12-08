const W = 'abcdefg'.split('')

const codes = {
    'abcefg': 0,
    'cf': 1,
    'acdeg': 2,
    'acdfg': 3,
    'bcdf': 4,
    'abdfg': 5,
    'abdefg': 6,
    'acf': 7,
    'abcdef': 8,
    'abcdfg': 9,
}

const nums = {
    0: 'abcefg',
    1: 'cf',
    2: 'acdeg',
    3: 'acdfg',
    4: 'bcdf',
    5: 'abdfg',
    6: 'abdefg',
    7: 'acf',
    8: 'abcdef',
    9: 'abcdfg',
}

const uniqueLengths = {
    2: 1,
    3: 7,
    4: 4,
    7: 8
}

const getKey = () => {
    const key = {}
    for (const wire of W) {
        key[wire] = W
    }
    return key
}

const missingChars = chars => W.filter(c => !chars.includes(c))

const filterOpts = (opts, only) => opts.filter(c => only.includes(c))

const parseLine = line => {
    const [I, O] = line.split(' | ')
    const i = I.split(' ')
    const o = O.split(' ')
    return { i, o }
}

const handleSig = (sig, key) => {
    const lens = Object.keys(uniqueLengths)
    for (const len of lens) {
        if (len >= 6) continue
        if (sig.length == len) {
            const lenChars = nums[uniqueLengths[len]]
            const missingLenChars = missingChars(lenChars)
            for (const char of sig) {
                key[char] = filterOpts(key[char], lenChars)
            }
            const missing = missingChars(sig)
            for (const char of missing) {
                key[char] = filterOpts(key[char], missingLenChars)
            }
        }
    }
    if (sig.length == 6) {
        const missing = missingChars(sig)
        for (const char of missing) {
            key[char] = filterOpts(key[char], ['c', 'd', 'e'])
        }
    }
    return key
}

const cancelSingles = key => {
    const known = []
    const toCancel = []
    for (const a of W) {
        if (key[a].length == 1) {
            known.push(key[a][0])
            continue
        }
        if (key[a].length > 1) {
            toCancel.push(a)
        }
    }
    for (const a of toCancel) {
        key[a] = key[a].filter(char => !known.includes(char))
    }
    return key
}

const evalSig = sig => {
    if (uniqueLengths[sig.length] != undefined)
        return uniqueLengths[sig.length]
    sig = sig.split('').sort().join('')
    return codes[sig]
}

const evalSignal = signal => {
    for (let i = 0; i < signal.i.length; i++) {
        signal.i[i] = evalSig(signal.i[i])
    }
    for (let i = 0; i < signal.o.length; i++) {
        signal.o[i] = evalSig(signal.o[i])
    }
    return signal
}

const replaceSignal = (signal, key) => evalSignal(parseLine(`${signal.i.join(' ')} | ${signal.o.join(' ')}`.replace(/[abcdefg]/g, (m) => key[m])))

const decodeSignal = (signal) => {
    let key = getKey()
    for (const sig of signal.i) {
        key = handleSig(sig, key)
    }
    key = cancelSingles(key)
    return replaceSignal(signal, key)
}

const solution = input => {
    const dec = []
    for (const line of input) {
        dec.push(decodeSignal(parseLine(line)))
    }
    let easyNumCount = 0
    let total = 0
    const easyNums = Object.values(uniqueLengths)
    for (const d of dec) {
        easyNumCount += d.o.filter(v => easyNums.includes(v)).length
        total += parseInt(d.o.join(''))
    }
    return { part1: easyNumCount, part2: total }
}

module.exports = {
    cancelSingles,
    decodeSignal,
    evalSig,
    evalSignal,
    filterOpts,
    getKey,
    handleSig,
    missingChars,
    parseLine,
    replaceSignal,
    solution
}