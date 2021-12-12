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
const paths = [
    'start,HN,dc,HN,end',
    'start,HN,dc,HN,kj,HN,end',
    'start,HN,dc,end',
    'start,HN,dc,kj,HN,end',
    'start,HN,end',
    'start,HN,kj,HN,dc,HN,end',
    'start,HN,kj,HN,dc,end',
    'start,HN,kj,HN,end',
    'start,HN,kj,dc,HN,end',
    'start,HN,kj,dc,end',
    'start,dc,HN,end',
    'start,dc,HN,kj,HN,end',
    'start,dc,end',
    'start,dc,kj,HN,end',
    'start,kj,HN,dc,HN,end',
    'start,kj,HN,dc,end',
    'start,kj,HN,end',
    'start,kj,dc,HN,end',
    'start,kj,dc,end'
]
const smallInput = [
    'start-A',
    'start-b',
    'A-c',
    'A-b',
    'b-d',
    'A-end',
    'b-end'
]
module.exports = { input, paths, smallInput }