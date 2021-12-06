const drawings = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1]
const boards = [
    [[22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19]],

    [[99, 99, 99, 99, 99],
    [8, 2, 23, 4, 99],
    [21, 9, 14, 16, 99],
    [6, 10, 3, 18, 99],
    [1, 12, 20, 15, 99]],

    [[3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6]],

    [[14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7]]
]

const expectedCompletions = [
    {
        board: [
            [22, 13, 17, 11, 0],
            [8, 2, 23, 4, 24],
            [21, 9, 14, 16, 7],
            [6, 10, 3, 18, 5],
            [1, 12, 20, 15, 19]
        ],
        count: 14,
        draw: 16,
        markings: [
            [false, false, true, true, true],
            [false, true, true, true, true],
            [true, true, true, true, true],
            [false, true, false, false, true],
            [false, false, false, false, false]
        ]
    },
    undefined,
    {
        board: [
            [3, 15, 0, 2, 22],
            [9, 18, 13, 17, 5],
            [19, 8, 7, 25, 23],
            [20, 11, 10, 24, 4],
            [14, 21, 16, 12, 6]
        ],
        count: 15,
        draw: 13,
        markings: [
            [false, false, true, true, false],
            [true, false, true, true, true],
            [false, false, true, false, true],
            [false, true, true, true, true],
            [true, true, true, false, false]
        ]
    },
    {
        board: [
            [14, 21, 17, 24, 4],
            [10, 16, 15, 9, 19],
            [18, 8, 23, 26, 20],
            [22, 11, 13, 6, 5],
            [2, 0, 12, 3, 7]
        ],
        count: 12,
        draw: 24,
        markings: [
            [true, true, true, true, true],
            [false, false, false, true, false],
            [false, false, true, false, false],
            [false, true, false, false, true],
            [true, true, false, false, true]
        ]
    }
]

const winBoards = [
    [
        [[true, true, true, true, true],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, false, true],
        [true, true, false, false, true]],
        0, 3
    ],

    [
        [[true, true, false, true, true],
        [false, false, false, true, false],
        [false, false, true, true, false],
        [false, true, false, true, true],
        [true, true, false, true, true]],
        1, 3
    ],

    [
        [[false, false, false, true, false],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, false, true],
        [true, true, true, true, true]],
        4, 4
    ],
]

const nonWinBoards = [
    [
        [[true, true, false, true, true],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, false, true],
        [true, true, false, false, true]]
    ],
    [
        [[true, true, false, true, true],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, true, true],
        [true, true, false, true, true]]
    ],

    [
        [[false, false, false, true, false],
        [false, false, false, true, false],
        [false, false, true, false, false],
        [false, true, false, false, true],
        [true, true, true, false, true]]
    ],
]

module.exports = { boards, drawings, expectedCompletions, winBoards, nonWinBoards }