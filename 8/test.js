const { blankKey, cancelSinglesTestData, decodedSignals, input, signals, keys, sortedSignals } = require('./testData')
const { cancelSingles, decodeSignal, evalSig, evalSignal, filterOpts, getKey, handleSig, missingChars, parseLine, replaceSignal, solution } = require('./solution')

describe('Day 8', () => {
    describe('cancelSingles', () => {
        test.each(cancelSinglesTestData)('given %p should return %p', (key, expected) => {
            const result = cancelSingles(key)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('decodeSignal', () => {
        const decodeSignalTestData = []
        for (let i = 0; i < signals.length; i++) {
            decodeSignalTestData.push([signals[i], decodedSignals[i]])
        }
        test.each(decodeSignalTestData)('given signal %p should return %p', (signal, expected) => {
            const result = decodeSignal(signal)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('evalSig', () => {
        const evalSigTestData = [
            ['abcefg', 0],
            ['cf', 1],
            ['acdeg', 2],
            ['acdfg', 3],
            ['bcdf', 4],
            ['abdfg', 5],
            ['abdefg', 6],
            ['acf', 7],
            ['abcdef', 8],
            ['abcdfg', 9],
            ['abcefg', 0],
            ['fc', 1],
            ['caged', 2],
            ['facgd', 3],
            ['cbfd', 4],
            ['afgdb', 5],
            ['fabgde', 6],
            ['caf', 7],
            ['cbeafd', 8],
            ['bcdagf', 9],
        ]
        test.each(evalSigTestData)('given %p should return %p', (sig, expected) => {
            const result = evalSig(sig)
            expect(result).toBe(expected)
        })
    })

    describe('evalSignal', () => {
        const evalSignalTestData = []
        for (let i = 0; i < signals.length; i++) {
            evalSignalTestData.push([sortedSignals[i], decodedSignals[i]])
        }
        test.each(evalSignalTestData)('given %p should return %p', (signal, expected) => {
            const result = evalSignal(signal)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('filterOpts', () => {
        const filterOptsTestData = [
            ['abcdefg'.split(''), 'gfa', 'afg'.split('')],
            ['abdeg'.split(''), 'f', ''.split('')],
            ['bcf'.split(''), 'bd', 'b'.split('')],
        ]
        test.each(filterOptsTestData)('given %p opts and %p only should return %p', (opts, only, expected) => {
            const result = filterOpts(opts, only)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('getKey', () => {
        test('get key should return blank key', () => {
            const result = getKey()
            expect(result).toStrictEqual(blankKey)
        })
    })

    describe('handleSig', () => {
        test('should return expected key for given sig', () => {
            let key = getKey()
            const result = handleSig(signals[0].i[0], key)
            expect(result).toStrictEqual({
                a: ['a', 'b', 'd', 'e', 'g'],
                b: ['c', 'f'],
                c: ['a', 'b', 'd', 'e', 'g'],
                d: ['a', 'b', 'd', 'e', 'g'],
                e: ['c', 'f'],
                f: ['a', 'b', 'd', 'e', 'g'],
                g: ['a', 'b', 'd', 'e', 'g']
            })

        })
    })

    describe('missingChars', () => {
        const missingCharsTestData = [
            ['', 'abcdefg'],
            ['abcdefg', ''],
            ['cf', 'abdeg'],
            ['abdeg', 'cf'],
            ['bcdf', 'aeg'],
            ['aeg', 'bcdf'],
        ]
        test.each(missingCharsTestData)('given %p should return %p', (chars, expected) => {
            const result = missingChars(chars).join('')
            expect(result).toBe(expected)
        })
    })

    describe('parseLine', () => {
        const parseLineTestData = []
        for (let i = 0; i < input.length; i++) {
            parseLineTestData.push([input[i], signals[i]])
        }
        test.each(parseLineTestData)('given %p should return %p', (line, expected) => {
            const result = parseLine(line)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('replaceSignal', () => {
        const replaceSignalTestData = []
        for (let i = 0; i < signals.length; i++) {
            replaceSignalTestData.push([signals[i], keys[i], decodedSignals[i]])
        }
        test.each(replaceSignalTestData)('given signal %p and key %p should return decoded signal %p', (signal, key, expected) => {
            const result = replaceSignal(signal, key)
            expect(result).toStrictEqual(expected)
        })
    })

    describe('solution', () => {
        test('should return expected result for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ "part1": 26, "part2": 61229 })
        })
    })
})