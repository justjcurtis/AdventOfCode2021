const input = [
    '2199943210',
    '3987894921',
    '9856789892',
    '8767896789',
    '9899965678'
]
const depths = [
    [
        2, 1, 9, 9, 9,
        4, 3, 2, 1, 0
    ],
    [
        3, 9, 8, 7, 8,
        9, 4, 9, 2, 1
    ],
    [
        9, 8, 5, 6, 7,
        8, 9, 8, 9, 2
    ],
    [
        8, 7, 6, 7, 8,
        9, 6, 7, 8, 9
    ],
    [
        9, 8, 9, 9, 9,
        6, 5, 6, 7, 8
    ]
]
const lows = [
    { x: 0, y: 1, val: 1 },
    { x: 0, y: 9, val: 0 },
    { x: 2, y: 2, val: 5 },
    { x: 4, y: 6, val: 5 }
]

const basins = [
    [
        { x: 0, y: 1, val: 1 },
        { x: 0, y: 0, val: 2 },
        { x: 1, y: 0, val: 3 }
    ], [
        { x: 0, y: 9, val: 0 },
        { x: 1, y: 9, val: 1 },
        { x: 2, y: 9, val: 2 },
        { x: 1, y: 8, val: 2 },
        { x: 0, y: 8, val: 1 },
        { x: 0, y: 7, val: 2 },
        { x: 0, y: 6, val: 3 },
        { x: 1, y: 6, val: 4 },
        { x: 0, y: 5, val: 4 }
    ], [
        { x: 2, y: 2, val: 5 },
        { x: 1, y: 2, val: 8 },
        { x: 1, y: 3, val: 7 },
        { x: 2, y: 3, val: 6 },
        { x: 3, y: 3, val: 7 },
        { x: 3, y: 2, val: 6 },
        { x: 3, y: 1, val: 7 },
        { x: 2, y: 1, val: 8 },
        { x: 4, y: 1, val: 8 },
        { x: 3, y: 0, val: 8 },
        { x: 3, y: 4, val: 8 },
        { x: 2, y: 4, val: 7 },
        { x: 1, y: 4, val: 8 },
        { x: 2, y: 5, val: 8 }
    ], [
        { x: 4, y: 6, val: 5 },
        { x: 3, y: 6, val: 6 },
        { x: 3, y: 7, val: 7 },
        { x: 2, y: 7, val: 8 },
        { x: 4, y: 7, val: 6 },
        { x: 4, y: 8, val: 7 },
        { x: 3, y: 8, val: 8 },
        { x: 4, y: 9, val: 8 },
        { x: 4, y: 5, val: 6 }
    ]
]
module.exports = { basins, depths, input, lows }