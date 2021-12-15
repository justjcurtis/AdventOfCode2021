const { parseInput, getGraph, reconstructPath, getNode, getNeighbors, aStar, heuristic, totalRisk, getLargeVal, getLargeGrid, solution } = require('./solution')
const { input, largeInput, grid, graph } = require('./testData')

describe('Day 15', () => {
    describe('parseInput', () => {
        test('should return 2d array of ints for input', () => {
            const result = parseInput(input)
            expect(result).toStrictEqual(grid)
        })
    })

    describe('getGraph', () => {
        test('should return graph for grid', () => {
            const result = getGraph(grid)
            expect(result).toStrictEqual(graph)
        })
    })

    describe('reconstructPath', () => {

    })

    describe('getNode', () => {

    })

    describe('getNeighbors', () => {

    })

    describe('aStar', () => {

    })

    describe('heuristic', () => {

    })

    describe('totalRisk', () => {

    })

    describe('getLargeVal', () => {

    })

    describe('getLargeGrid', () => {

    })

    describe('solution', () => {
        test('should return 40 and 315 for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 40, part2: 315 })
        })
    })
})