const input = [
    'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
    'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc',
    'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg',
    'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb',
    'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea',
    'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb',
    'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe',
    'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef',
    'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb',
    'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce'
]
const signals = [
    {
        i: [
            'be', 'cfbegad',
            'cbdgef', 'fgaecd',
            'cgeb', 'fdcge',
            'agebfd', 'fecdb',
            'fabcd', 'edb'
        ],
        o: ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe']
    },
    {
        i: [
            'edbfga', 'begcd',
            'cbg', 'gc',
            'gcadebf', 'fbgde',
            'acbgfd', 'abcde',
            'gfcbed', 'gfec'
        ],
        o: ['fcgedb', 'cgb', 'dgebacf', 'gc']
    },
    {
        i: [
            'fgaebd', 'cg',
            'bdaec', 'gdafb',
            'agbcfd', 'gdcbef',
            'bgcad', 'gfac',
            'gcb', 'cdgabef'
        ],
        o: ['cg', 'cg', 'fdcagb', 'cbg']
    },
    {
        i: [
            'fbegcd', 'cbd',
            'adcefb', 'dageb',
            'afcb', 'bc',
            'aefdc', 'ecdab',
            'fgdeca', 'fcdbega'
        ],
        o: ['efabcd', 'cedba', 'gadfec', 'cb']
    },
    {
        i: [
            'aecbfdg', 'fbg',
            'gf', 'bafeg',
            'dbefa', 'fcge',
            'gcbea', 'fcaegb',
            'dgceab', 'fcbdga'
        ],
        o: ['gecf', 'egdcabf', 'bgf', 'bfgea']
    },
    {
        i: [
            'fgeab', 'ca',
            'afcebg', 'bdacfeg',
            'cfaedg', 'gcfdb',
            'baec', 'bfadeg',
            'bafgc', 'acf'
        ],
        o: ['gebdcfa', 'ecba', 'ca', 'fadegcb']
    },
    {
        i: [
            'dbcfg', 'fgd',
            'bdegcaf', 'fgec',
            'aegbdf', 'ecdfab',
            'fbedc', 'dacgb',
            'gdcebf', 'gf'
        ],
        o: ['cefg', 'dcbef', 'fcge', 'gbcadfe']
    },
    {
        i: [
            'bdfegc', 'cbegaf',
            'gecbf', 'dfcage',
            'bdacg', 'ed',
            'bedf', 'ced',
            'adcbefg', 'gebcd'
        ],
        o: ['ed', 'bcgafe', 'cdgba', 'cbgef']
    },
    {
        i: [
            'egadfb', 'cdbfeg',
            'cegd', 'fecab',
            'cgb', 'gbdefca',
            'cg', 'fgcdab',
            'egfdb', 'bfceg'
        ],
        o: ['gbdfcae', 'bgc', 'cg', 'cgb']
    },
    {
        i: [
            'gcafb', 'gcf',
            'dcaebfg', 'ecagb',
            'gf', 'abcdeg',
            'gaef', 'cafbge',
            'fdbac', 'fegbdc'
        ],
        o: ['fgae', 'cfgab', 'fg', 'bagce']
    }
]
const decodedSignals = [
    {
        i: [
            1, 8, 9, 6, 4,
            5, 0, 3, 2, 7
        ], o: [8, 3, 9, 4]
    },
    {
        i: [
            6, 3, 7, 1, 8,
            5, 0, 2, 9, 4
        ], o: [9, 7, 8, 1]
    },
    {
        i: [
            6, 1, 2, 5, 9,
            0, 3, 4, 7, 8
        ], o: [1, 1, 9, 7]
    },
    {
        i: [
            0, 7, 9, 2, 4,
            1, 5, 3, 6, 8
        ], o: [9, 3, 6, 1]
    },
    {
        i: [
            8, 7, 1, 3, 2,
            4, 5, 9, 6, 0
        ], o: [4, 8, 7, 3]
    },
    {
        i: [
            5, 1, 9, 8, 0,
            2, 4, 6, 3, 7
        ], o: [8, 4, 1, 8]
    },
    {
        i: [
            3, 7, 8, 4, 0,
            6, 5, 2, 9, 1
        ], o: [4, 5, 4, 8]
    },
    {
        i: [
            9, 6, 5, 0, 2,
            1, 4, 7, 8, 3
        ], o: [1, 6, 2, 5]
    },
    {
        i: [
            6, 9, 4, 2, 7,
            8, 1, 0, 5, 3
        ], o: [8, 7, 1, 7]
    },
    {
        i: [
            3, 7, 8, 5, 1,
            6, 4, 9, 2, 0
        ], o: [4, 3, 1, 5]
    }
]
const blankKey = {
    a: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ],
    b: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ],
    c: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ],
    d: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ],
    e: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ],
    f: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ],
    g: [
        'a', 'b', 'c',
        'd', 'e', 'f',
        'g'
    ]
}
const cancelSinglesTestData = [
    [
        {
            a: ['e'],
            b: ['c'],
            c: ['d'],
            d: ['a'],
            e: ['c', 'f'],
            f: ['e', 'g'],
            g: ['b', 'd']
        },
        {
            a: ['e'],
            b: ['c'],
            c: ['d'],
            d: ['a'],
            e: ['f'],
            f: ['g'],
            g: ['b']
        }
    ],
    [
        {
            a: ['e'],
            b: ['a'],
            c: ['c'],
            d: ['e', 'g'],
            e: ['d'],
            f: ['b', 'd'],
            g: ['c', 'f']
        },
        {
            a: ['e'],
            b: ['a'],
            c: ['c'],
            d: ['g'],
            e: ['d'],
            f: ['b'],
            g: ['f']
        }
    ],
    [
        {
            a: ['d'],
            b: ['a'],
            c: ['c'],
            d: ['e', 'g'],
            e: ['e'],
            f: ['b', 'd'],
            g: ['c', 'f']
        },
        {
            a: ['d'],
            b: ['a'],
            c: ['c'],
            d: ['g'],
            e: ['e'],
            f: ['b'],
            g: ['f']
        }
    ],
    [
        {
            a: ['d'],
            b: ['c'],
            c: ['c', 'f'],
            d: ['a'],
            e: ['e', 'g'],
            f: ['b', 'd'],
            g: ['e']
        },
        {
            a: ['d'],
            b: ['c'],
            c: ['f'],
            d: ['a'],
            e: ['g'],
            f: ['b'],
            g: ['e']
        }
    ],
    [
        {
            a: ['e', 'g'],
            b: ['a'],
            c: ['b', 'd'],
            d: ['e'],
            e: ['d'],
            f: ['c'],
            g: ['c', 'f']
        },
        {
            a: ['g'],
            b: ['a'],
            c: ['b'],
            d: ['e'],
            e: ['d'],
            f: ['c'],
            g: ['f']
        }
    ],
    [
        {
            a: ['c', 'f'],
            b: ['d'],
            c: ['c'],
            d: ['e'],
            e: ['b', 'd'],
            f: ['a'],
            g: ['e', 'g']
        },
        {
            a: ['f'],
            b: ['d'],
            c: ['c'],
            d: ['e'],
            e: ['b'],
            f: ['a'],
            g: ['g']
        }
    ],
    [
        {
            a: ['e'],
            b: ['e', 'g'],
            c: ['d'],
            d: ['a'],
            e: ['b', 'd'],
            f: ['c', 'f'],
            g: ['c']
        },
        {
            a: ['e'],
            b: ['g'],
            c: ['d'],
            d: ['a'],
            e: ['b'],
            f: ['f'],
            g: ['c']
        }
    ],
    [
        {
            a: ['e'],
            b: ['d'],
            c: ['a'],
            d: ['c'],
            e: ['c', 'f'],
            f: ['b', 'd'],
            g: ['e', 'g']
        },
        {
            a: ['e'],
            b: ['d'],
            c: ['a'],
            d: ['c'],
            e: ['f'],
            f: ['b'],
            g: ['g']
        }
    ],
    [
        {
            a: ['e'],
            b: ['a'],
            c: ['c'],
            d: ['b', 'd'],
            e: ['d'],
            f: ['e', 'g'],
            g: ['c', 'f']
        },
        {
            a: ['e'],
            b: ['a'],
            c: ['c'],
            d: ['b'],
            e: ['d'],
            f: ['g'],
            g: ['f']
        }
    ],
    [
        {
            a: ['d'],
            b: ['e', 'g'],
            c: ['a'],
            d: ['e'],
            e: ['b', 'd'],
            f: ['c'],
            g: ['c', 'f']
        },
        {
            a: ['d'],
            b: ['g'],
            c: ['a'],
            d: ['e'],
            e: ['b'],
            f: ['c'],
            g: ['f']
        }
    ]
]

const keys = [
    {
        a: ['e'],
        b: ['c'],
        c: ['d'],
        d: ['a'],
        e: ['f'],
        f: ['g'],
        g: ['b']
    },
    {
        a: ['e'],
        b: ['a'],
        c: ['c'],
        d: ['g'],
        e: ['d'],
        f: ['b'],
        g: ['f']
    },
    {
        a: ['d'],
        b: ['a'],
        c: ['c'],
        d: ['g'],
        e: ['e'],
        f: ['b'],
        g: ['f']
    },
    {
        a: ['d'],
        b: ['c'],
        c: ['f'],
        d: ['a'],
        e: ['g'],
        f: ['b'],
        g: ['e']
    },
    {
        a: ['g'],
        b: ['a'],
        c: ['b'],
        d: ['e'],
        e: ['d'],
        f: ['c'],
        g: ['f']
    },
    {
        a: ['f'],
        b: ['d'],
        c: ['c'],
        d: ['e'],
        e: ['b'],
        f: ['a'],
        g: ['g']
    },
    {
        a: ['e'],
        b: ['g'],
        c: ['d'],
        d: ['a'],
        e: ['b'],
        f: ['f'],
        g: ['c']
    },
    {
        a: ['e'],
        b: ['d'],
        c: ['a'],
        d: ['c'],
        e: ['f'],
        f: ['b'],
        g: ['g']
    },
    {
        a: ['e'],
        b: ['a'],
        c: ['c'],
        d: ['b'],
        e: ['d'],
        f: ['g'],
        g: ['f']
    },
    {
        a: ['d'],
        b: ['g'],
        c: ['a'],
        d: ['e'],
        e: ['b'],
        f: ['c'],
        g: ['f']
    }
]
const sortedSignals = [
    {
        i: [
            'cf', 'dgcfbea',
            'dcabfg', 'gbefda',
            'dbfc', 'gadbf',
            'ebfcga', 'gfdac',
            'gecda', 'fac'
        ],
        o: ['gabedcf', 'dfgac', 'dfgcba', 'bdcf']
    },
    {
        i: [
            'dgabfe', 'adfcg',
            'caf', 'fc',
            'fcegdab', 'bafgd',
            'ecafbg', 'eacgd',
            'fbcadg', 'fbdc'
        ],
        o: ['bcfdga', 'cfa', 'gfdaecb', 'fc']
    },
    {
        i: [
            'bfdeag', 'cf',
            'agdec', 'fgdba',
            'dfacbg', 'fgcaeb',
            'afcdg', 'fbdc',
            'fca', 'cgfdaeb'
        ],
        o: ['cf', 'cf', 'bgcdfa', 'caf']
    },
    {
        i: [
            'bcgefa', 'fca',
            'dafgbc', 'adegc',
            'dbfc', 'cf',
            'dgbaf', 'gfadc',
            'beagfd', 'bfacged'
        ],
        o: ['gbdcfa', 'fgacd', 'edabgf', 'fc']
    },
    {
        i: [
            'gdbacef', 'caf',
            'fc', 'agcdf',
            'eadcg', 'cbfd',
            'fbadg', 'cbgdfa',
            'efbdga', 'cbaefg'
        ],
        o: ['fdbc', 'dfebgac', 'afc', 'acfdg']
    },
    {
        i: [
            'agbfd', 'cf',
            'facbdg', 'defcabg',
            'cafbeg', 'gcaed',
            'dfbc', 'dafebg',
            'dfagc', 'fca'
        ],
        o: ['gbdecaf', 'bcdf', 'cf', 'afebgcd']
    },
    {
        i: [
            'agdfc', 'fca',
            'gabcdef', 'fcbd',
            'ebcgaf', 'bdafeg',
            'fgbad', 'aedcg',
            'cadbgf', 'cf'
        ],
        o: ['dbfc', 'adgbf', 'fdcb', 'cgdeafb']
    },
    {
        i: [
            'dcbfga', 'adfgeb',
            'gfadb', 'cbaegf',
            'dceag', 'fc',
            'dfcb', 'afc',
            'ecadfbg', 'gfdac'
        ],
        o: ['fc', 'dagebf', 'acgde', 'adgfb']
    },
    {
        i: [
            'dfebga', 'cbagdf',
            'cdfb', 'gdcea',
            'cfa', 'fabdgce',
            'cf', 'gfcbea',
            'dfgba', 'agcdf'
        ],
        o: ['fabgced', 'afc', 'cf', 'cfa']
    },
    {
        i: [
            'fadcg', 'fac',
            'eadbgcf', 'badfg',
            'fc', 'dgaebf',
            'fdbc', 'adcgfb',
            'cegda', 'cbfgea'
        ],
        o: ['cfdb', 'acfdg', 'cf', 'gdfab']
    }
]
module.exports = { blankKey, cancelSinglesTestData, decodedSignals, input, keys, signals, sortedSignals }