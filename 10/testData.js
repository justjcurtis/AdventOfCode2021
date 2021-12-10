const input = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]'
]
const reduced = [
    '[({([[{{',
    '({[<{(',
    '{([(<[}>{{[(',
    '((((<{<{{',
    '[[<[)<([',
    '[{[{(]}([{[{(',
    '<{[{[{{[[',
    '[<(<(<(<))><((',
    '<{([([>(<<{{',
    '<{([',
]

const scores = [
    288957,
    5566,
    -1197,
    1480781,
    -3,
    -57,
    995444,
    -3,
    -25137,
    294,
]

module.exports = { input, reduced, scores }