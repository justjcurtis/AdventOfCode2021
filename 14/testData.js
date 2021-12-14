const polymer = 'NNCB'
const insertions = [
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C'
]
const input = { polymer, insertions }
const initialPolyPairs = {
    NN: { count: 1, inbox: [] },
    NC: { count: 1, inbox: [] },
    CB: { count: 1, inbox: [] }
}
const parsedInsertions = [
    { pair: 'CH', val: 'B' },
    { pair: 'HH', val: 'N' },
    { pair: 'CB', val: 'H' },
    { pair: 'NH', val: 'C' },
    { pair: 'HB', val: 'C' },
    { pair: 'HC', val: 'B' },
    { pair: 'HN', val: 'C' },
    { pair: 'NN', val: 'C' },
    { pair: 'BH', val: 'H' },
    { pair: 'NC', val: 'B' },
    { pair: 'NB', val: 'B' },
    { pair: 'BN', val: 'B' },
    { pair: 'BB', val: 'N' },
    { pair: 'BC', val: 'B' },
    { pair: 'CC', val: 'N' },
    { pair: 'CN', val: 'C' }
]
const postNNInsertion = {
    NN: { count: 1, inbox: ['C'] },
    NC: { count: 1, inbox: [] },
    CB: { count: 1, inbox: [] }
}
const postNInsertions = {
    1: {
        CH: { count: 1, inbox: [] },
        HB: { count: 1, inbox: [] },
        NC: { count: 1, inbox: [] },
        CN: { count: 1, inbox: [] },
        NB: { count: 1, inbox: [] },
        BC: { count: 1, inbox: [] }
    },
    5: {
        HN: { count: 1, inbox: [] },
        NH: { count: 1, inbox: [] },
        CH: { count: 6, inbox: [] },
        HB: { count: 8, inbox: [] },
        NC: { count: 3, inbox: [] },
        BC: { count: 8, inbox: [] },
        HC: { count: 1, inbox: [] },
        CN: { count: 6, inbox: [] },
        BH: { count: 3, inbox: [] },
        HH: { count: 3, inbox: [] },
        NB: { count: 19, inbox: [] },
        BB: { count: 19, inbox: [] },
        BN: { count: 15, inbox: [] },
        CC: { count: 3, inbox: [] }
    },
    10: {
        CB: { count: 115, inbox: [] },
        BH: { count: 81, inbox: [] },
        HN: { count: 27, inbox: [] },
        NH: { count: 27, inbox: [] },
        CH: { count: 21, inbox: [] },
        HB: { count: 26, inbox: [] },
        NC: { count: 42, inbox: [] },
        HC: { count: 76, inbox: [] },
        BC: { count: 120, inbox: [] },
        CN: { count: 102, inbox: [] },
        HH: { count: 32, inbox: [] },
        NB: { count: 796, inbox: [] },
        BB: { count: 812, inbox: [] },
        BN: { count: 735, inbox: [] },
        CC: { count: 60, inbox: [] }
    },
    50: {
        CB: { count: 417295900884, inbox: [] },
        BH: { count: 409517158835, inbox: [] },
        HN: { count: 133133602581, inbox: [] },
        NH: { count: 133133602581, inbox: [] },
        CH: { count: 299942619809, inbox: [] },
        HB: { count: 396930889810, inbox: [] },
        NC: { count: 304750146785, inbox: [] },
        HC: { count: 312528888834, inbox: [] },
        BC: { count: 809419263718, inbox: [] },
        CN: { count: 709459778644, inbox: [] },
        HH: { count: 230121872582, inbox: [] },
        NB: { count: 1124501572629423, inbox: [] },
        BB: { count: 1124540341543964, inbox: [] },
        BN: { count: 1124096862997563, inbox: [] },
        CC: { count: 404709631859, inbox: [] }
    },
    100: {
        CB: { count: 6.636023911669772e+23, inbox: [] },
        BH: { count: 6.633834681711427e+23, inbox: [] },
        HN: { count: 2.154169158484891e+23, inbox: [] },
        NH: { count: 2.154169158484891e+23, inbox: [] },
        CH: { count: 5.0051464614943835e+23, inbox: [] },
        HB: { count: 6.630292433229636e+23, inbox: [] },
        NC: { count: 5.0064994800178315e+23, inbox: [] },
        HC: { count: 5.008688709976175e+23, inbox: [] },
        BC: { count: 1.3264963326375962e+24, inbox: [] },
        CN: { count: 1.1638981143205814e+24, inbox: [] },
        HH: { count: 3.779315130220143e+23, inbox: [] },
        NB: { count: 1.2676483167948237e+30, inbox: [] },
        BB: { count: 1.2676483758866811e+30, inbox: [] },
        BN: { count: 1.2676476535466574e+30, inbox: [] },
        CC: { count: 6.632481663187982e+23, inbox: [] }
    },
}
module.exports = { input, initialPolyPairs, parsedInsertions, postNNInsertion, postNInsertions }