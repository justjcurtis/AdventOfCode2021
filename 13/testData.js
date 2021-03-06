const dots = [
    [6, 10],
    [0, 14],
    [9, 10],
    [0, 3],
    [10, 4],
    [4, 11],
    [6, 0],
    [6, 12],
    [4, 1],
    [0, 13],
    [10, 12],
    [3, 4],
    [3, 0],
    [8, 4],
    [1, 10],
    [2, 14],
    [8, 10],
    [9, 0]
]
const folds = [
    'fold along y=7',
    'fold along x=5',
]
const input = { dots, folds }
const parsed = {
    dots: [
        { x: 6, y: 10 }, { x: 0, y: 14 },
        { x: 9, y: 10 }, { x: 0, y: 3 },
        { x: 10, y: 4 }, { x: 4, y: 11 },
        { x: 6, y: 0 }, { x: 6, y: 12 },
        { x: 4, y: 1 }, { x: 0, y: 13 },
        { x: 10, y: 12 }, { x: 3, y: 4 },
        { x: 3, y: 0 }, { x: 8, y: 4 },
        { x: 1, y: 10 }, { x: 2, y: 14 },
        { x: 8, y: 10 }, { x: 9, y: 0 }
    ],
    folds: [{ axis: 'y', size: 7 }, { axis: 'x', size: 5 }]
}
const postFolds = {
    posty: [
        { x: 6, y: 4 }, { x: 0, y: 0 },
        { x: 9, y: 4 }, { x: 0, y: 3 },
        { x: 10, y: 4 }, { x: 4, y: 3 },
        { x: 6, y: 0 }, { x: 6, y: 2 },
        { x: 4, y: 1 }, { x: 0, y: 1 },
        { x: 10, y: 2 }, { x: 3, y: 4 },
        { x: 3, y: 0 }, { x: 8, y: 4 },
        { x: 1, y: 4 }, { x: 2, y: 0 },
        { x: 8, y: 4 }, { x: 9, y: 0 }
    ],
    postx: [
        { x: 4, y: 10 }, { x: 0, y: 14 },
        { x: 1, y: 10 }, { x: 0, y: 3 },
        { x: 0, y: 4 }, { x: 4, y: 11 },
        { x: 4, y: 0 }, { x: 4, y: 12 },
        { x: 4, y: 1 }, { x: 0, y: 13 },
        { x: 0, y: 12 }, { x: 3, y: 4 },
        { x: 3, y: 0 }, { x: 2, y: 4 },
        { x: 1, y: 10 }, { x: 2, y: 14 },
        { x: 2, y: 10 }, { x: 1, y: 0 }
    ],
    postyx: [
        { x: 4, y: 4 }, { x: 0, y: 0 },
        { x: 1, y: 4 }, { x: 0, y: 3 },
        { x: 0, y: 4 }, { x: 4, y: 3 },
        { x: 4, y: 0 }, { x: 4, y: 2 },
        { x: 4, y: 1 }, { x: 0, y: 1 },
        { x: 0, y: 2 }, { x: 3, y: 4 },
        { x: 3, y: 0 }, { x: 2, y: 4 },
        { x: 1, y: 4 }, { x: 2, y: 0 },
        { x: 2, y: 4 }, { x: 1, y: 0 }
    ]
}
const dotMaps = {
    initial: {
        '6,10': true,
        '0,14': true,
        '9,10': true,
        '0,3': true,
        '10,4': true,
        '4,11': true,
        '6,0': true,
        '6,12': true,
        '4,1': true,
        '0,13': true,
        '10,12': true,
        '3,4': true,
        '3,0': true,
        '8,4': true,
        '1,10': true,
        '2,14': true,
        '8,10': true,
        '9,0': true
    },
    posty: {
        '6,4': true,
        '0,0': true,
        '9,4': true,
        '0,3': true,
        '10,4': true,
        '4,3': true,
        '6,0': true,
        '6,2': true,
        '4,1': true,
        '0,1': true,
        '10,2': true,
        '3,4': true,
        '3,0': true,
        '8,4': true,
        '1,4': true,
        '2,0': true,
        '9,0': true
    },
    postx: {
        '4,10': true,
        '0,14': true,
        '1,10': true,
        '0,3': true,
        '0,4': true,
        '4,11': true,
        '4,0': true,
        '4,12': true,
        '4,1': true,
        '0,13': true,
        '0,12': true,
        '3,4': true,
        '3,0': true,
        '2,4': true,
        '2,14': true,
        '2,10': true,
        '1,0': true
    },
    postyx: {
        '4,4': true,
        '0,0': true,
        '1,4': true,
        '0,3': true,
        '0,4': true,
        '4,3': true,
        '4,0': true,
        '4,2': true,
        '4,1': true,
        '0,1': true,
        '0,2': true,
        '3,4': true,
        '3,0': true,
        '2,4': true,
        '2,0': true,
        '1,0': true
    },
}
const rendered = {
    initial: [
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ]
    ],
    posty: [
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ],
        [
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????', '??????',
            '??????', '??????', '??????'
        ]
    ],
    postx: [
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????']
    ],
    postyx: [
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????'],
        ['??????', '??????', '??????', '??????', '??????']
    ],
}
module.exports = { input, parsed, postFolds, dotMaps, rendered }