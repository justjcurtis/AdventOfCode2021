const input = require('./input')
const test = require('./testData')
const SnailNode = require('./snailNode')

const sum = (a, b) => [a, b]

const createTree = (arr, depth = 0) => {
    const value = !isNaN(arr) ? arr : undefined
    const left = isNaN(arr) ? createTree(arr[0], depth + 1) : undefined
    const right = isNaN(arr) ? createTree(arr[1], depth + 1) : undefined
    const tree = new SnailNode(value, left, right, depth);
    if (left != undefined) left.parent = tree;
    if (right != undefined) right.parent = tree;
    return tree;
};

const solution = input => {
    let tree = undefined
    let a = input[0]
    for (let i = 1; i < input.length; i++) {
        let b = input[i]
        tree = createTree(sum(a, b))
        tree.reduce()
        a = tree.collapse()
    }
    const part1 = tree.magnitude()
    return { part1 }
}

console.log(solution(input))