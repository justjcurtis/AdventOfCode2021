const SnailNode = require('./snailNode')

const createTree = (arr, depth = 0) => {
    const value = !isNaN(arr) ? arr : undefined
    const left = isNaN(arr) ? createTree(arr[0], depth + 1) : undefined
    const right = isNaN(arr) ? createTree(arr[1], depth + 1) : undefined
    const tree = new SnailNode(value, left, right, depth);
    if (left != undefined) left.parent = tree;
    if (right != undefined) right.parent = tree;
    return tree;
};

const getAllOpts = len => {
    const opts = []
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j) continue
            opts.push([i, j])
        }
    }
    return opts
}

const solution = input => {
    let tree = undefined
    let a = input[0]
    for (let i = 1; i < input.length; i++) {
        let b = input[i]
        tree = createTree([a, b])
        tree.reduce()
        a = tree.collapse()
    }
    const part1 = tree.magnitude()
    const allOpts = getAllOpts(input.length)
    const mags = []
    for (const opt of allOpts) {
        const mag = createTree([input[opt[0]], input[opt[1]]]).reduce().magnitude()
        mags.push(mag)
    }
    return { part1, part2: Math.max(...mags) }
}

module.exports = { solution }