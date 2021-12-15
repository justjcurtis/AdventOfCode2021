const input = [
    'dc-end',
    'HN-start',
    'start-kj',
    'dc-start',
    'dc-HN',
    'LN-dc',
    'HN-end',
    'kj-sa',
    'kj-HN',
    'kj-dc'
]
const graph = {
    dc: ['end', 'start', 'HN', 'LN', 'kj'],
    end: ['dc', 'HN'],
    HN: ['start', 'dc', 'end', 'kj'],
    start: ['HN', 'kj', 'dc'],
    kj: ['start', 'sa', 'HN', 'dc'],
    LN: ['dc'],
    sa: ['kj']
}
const expectedPaths = {
    1: [
        ['start', 'HN', 'dc', 'end'],
        ['start', 'HN', 'dc', 'HN', 'end'],
        [
            'start', 'HN',
            'dc', 'HN',
            'kj', 'HN',
            'end'
        ],
        ['start', 'HN', 'dc', 'kj', 'HN', 'end'],
        ['start', 'HN', 'end'],
        ['start', 'HN', 'kj', 'HN', 'dc', 'end'],
        [
            'start', 'HN',
            'kj', 'HN',
            'dc', 'HN',
            'end'
        ],
        ['start', 'HN', 'kj', 'HN', 'end'],
        ['start', 'HN', 'kj', 'dc', 'end'],
        ['start', 'HN', 'kj', 'dc', 'HN', 'end'],
        ['start', 'kj', 'HN', 'dc', 'end'],
        ['start', 'kj', 'HN', 'dc', 'HN', 'end'],
        ['start', 'kj', 'HN', 'end'],
        ['start', 'kj', 'dc', 'end'],
        ['start', 'kj', 'dc', 'HN', 'end'],
        ['start', 'dc', 'end'],
        ['start', 'dc', 'HN', 'end'],
        ['start', 'dc', 'HN', 'kj', 'HN', 'end'],
        ['start', 'dc', 'kj', 'HN', 'end']
    ],
    2: [
        [
            "start", "HN", "dc", "end"
        ],
        [
            "start", "HN", "dc", "HN", "dc", "end"
        ],
        [
            "start", "HN", "dc", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "sa", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "HN", "dc", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "dc", "end"
        ],
        [
            "start", "HN", "dc", "HN", "kj", "dc", "HN", "end"
        ],
        [
            "start", "HN", "dc", "LN", "dc", "end"
        ],
        [
            "start", "HN", "dc", "LN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "dc", "LN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "LN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "kj", "sa", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "kj", "HN", "dc", "end"
        ],
        [
            "start", "HN", "dc", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "kj", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "dc", "kj", "dc", "end"
        ],
        [
            "start", "HN", "dc", "kj", "dc", "HN", "end"
        ],
        [
            "start", "HN", "end"
        ],
        [
            "start", "HN", "kj", "sa", "kj", "HN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "sa", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "sa", "kj", "HN", "end"
        ],
        [
            "start", "HN", "kj", "sa", "kj", "dc", "end"
        ],
        [
            "start", "HN", "kj", "sa", "kj", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "HN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "LN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "LN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "kj", "HN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "HN", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "kj", "HN", "kj", "dc", "end"
        ],
        [
            "start", "HN", "kj", "HN", "kj", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "dc", "end"
        ],
        [
            "start", "HN", "kj", "dc", "HN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "dc", "HN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "HN", "kj", "dc", "LN", "dc", "end"
        ],
        [
            "start", "HN", "kj", "dc", "LN", "dc", "HN", "end"
        ],
        [
            "start", "HN", "kj", "dc", "kj", "HN", "end"
        ],
        [
            "start", "kj", "sa", "kj", "HN", "dc", "end"
        ],
        [
            "start", "kj", "sa", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "sa", "kj", "HN", "end"
        ],
        [
            "start", "kj", "sa", "kj", "dc", "end"
        ],
        [
            "start", "kj", "sa", "kj", "dc", "HN", "end"
        ],
        [
            "start", "kj", "HN", "dc", "end"
        ],
        [
            "start", "kj", "HN", "dc", "HN", "dc", "end"
        ],
        [
            "start", "kj", "HN", "dc", "HN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "HN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "kj", "HN", "dc", "LN", "dc", "end"
        ],
        [
            "start", "kj", "HN", "dc", "LN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "HN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "kj", "HN", "end"
        ],
        [
            "start", "kj", "HN", "kj", "HN", "dc", "end"
        ],
        [
            "start", "kj", "HN", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "HN", "kj", "HN", "end"
        ],
        [
            "start", "kj", "HN", "kj", "dc", "end"
        ],
        [
            "start", "kj", "HN", "kj", "dc", "HN", "end"
        ],
        [
            "start", "kj", "dc", "end"
        ],
        [
            "start", "kj", "dc", "HN", "dc", "end"
        ],
        [
            "start", "kj", "dc", "HN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "dc", "HN", "end"
        ],
        [
            "start", "kj", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "kj", "dc", "LN", "dc", "end"
        ],
        [
            "start", "kj", "dc", "LN", "dc", "HN", "end"
        ],
        [
            "start", "kj", "dc", "kj", "HN", "end"
        ],
        [
            "start", "dc", "end"
        ],
        [
            "start", "dc", "HN", "dc", "end"
        ],
        [
            "start", "dc", "HN", "dc", "HN", "end"
        ],
        [
            "start", "dc", "HN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "dc", "HN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "dc", "HN", "end"
        ],
        [
            "start", "dc", "HN", "kj", "sa", "kj", "HN", "end"
        ],
        [
            "start", "dc", "HN", "kj", "HN", "dc", "end"
        ],
        [
            "start", "dc", "HN", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "dc", "HN", "kj", "HN", "kj", "HN", "end"
        ],
        [
            "start", "dc", "HN", "kj", "dc", "end"
        ],
        [
            "start", "dc", "HN", "kj", "dc", "HN", "end"
        ],
        [
            "start", "dc", "LN", "dc", "end"
        ],
        [
            "start", "dc", "LN", "dc", "HN", "end"
        ],
        [
            "start", "dc", "LN", "dc", "HN", "kj", "HN", "end"
        ],
        [
            "start", "dc", "LN", "dc", "kj", "HN", "end"
        ],
        [
            "start", "dc", "kj", "sa", "kj", "HN", "end"
        ],
        [
            "start", "dc", "kj", "HN", "dc", "end"
        ],
        [
            "start", "dc", "kj", "HN", "dc", "HN", "end"
        ],
        [
            "start", "dc", "kj", "HN", "end"
        ],
        [
            "start", "dc", "kj", "HN", "kj", "HN", "end"
        ],
        [
            "start", "dc", "kj", "dc", "end"
        ],
        [
            "start", "dc", "kj", "dc", "HN", "end"
        ]
    ]
}
module.exports = { input, graph, expectedPaths }