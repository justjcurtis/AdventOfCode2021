const { part1Handler } = require('./solution')
const { input } = require('./testData')

describe('Day 2', () => {
    describe('part1Handler', () => {
        const forwardPart1TestData = [
            ['f', 1, { a: 11, d: 12, h: 13 }],
            ['f', 2, { a: 11, d: 12, h: 13 }],
            ['f', 7, { a: 11, d: 12, h: 13 }],
            ['f', 99, { a: 11, d: 12, h: 13 }],
            ['f', -5, { a: 11, d: 12, h: 13 }],
        ]
        test.each(forwardPart1TestData)('for %p command part1Handler should add %p to h', (cmd, x, { a, d, h }) => {
            const result = part1Handler(cmd, x, { a, d, h })
            expect(result.a).toBe(a)
            expect(result.d).toBe(d)
            expect(result.h).toBe(h + x)
        })

        const downPart1TestData = [
            ['d', 1, { a: 11, d: 12, h: 13 }],
            ['d', 2, { a: 11, d: 12, h: 13 }],
            ['d', 7, { a: 11, d: 12, h: 13 }],
            ['d', 99, { a: 11, d: 12, h: 13 }],
            ['d', -5, { a: 11, d: 12, h: 13 }],
        ]
        test.each(downPart1TestData)('for %p command part1Handler should add %p to d', (cmd, x, { a, d, h }) => {
            const result = part1Handler(cmd, x, { a, d, h })
            expect(result.a).toBe(a)
            expect(result.d).toBe(d + x)
            expect(result.h).toBe(h)
        })

        const upPart1TestData = [
            ['u', 1, { a: 11, d: 12, h: 13 }],
            ['u', 2, { a: 11, d: 12, h: 13 }],
            ['u', 7, { a: 11, d: 12, h: 13 }],
            ['u', 99, { a: 11, d: 12, h: 13 }],
            ['u', -5, { a: 11, d: 12, h: 13 }],
        ]
        test.each(upPart1TestData)('for %p command part1Handler should subtract %p from d', (cmd, x, { a, d, h }) => {
            const result = part1Handler(cmd, x, { a, d, h })
            expect(result.a).toBe(a)
            expect(result.d).toBe(d - x)
            expect(result.h).toBe(h)
        })
    })
})