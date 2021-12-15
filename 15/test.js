const { parseInput, getGraph, reconstructPath, getNode, getNeighbors, aStar, heuristic, totalRisk, getLargeVal, getLargeGrid, solution } = require('./solution')
const { input, largeInput, grid, graph, path, largePath } = require('./testData')

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
        test('should return expected path for input', () => {
            const start = graph[0][0]
            const goal = graph[graph.height - 1][graph.width - 1]
            const result = aStar(start, goal, heuristic, graph)
            expect(result).toStrictEqual(path)
        })
        test('should return expected path for largeInput', () => {
            const largeGraph = getGraph(parseInput(largeInput))
            const start = largeGraph[0][0]
            const goal = largeGraph[largeGraph.height - 1][largeGraph.width - 1]
            const result = aStar(start, goal, heuristic, largeGraph)
            expect(result).toStrictEqual(largePath)
        })
    })

    describe('heuristic', () => {

    })

    describe('totalRisk', () => {

    })

    describe('getLargeVal', () => {

    })

    describe('getLargeGrid', () => {
        test('should return expected large grid for test input', () => {
            const result = getLargeGrid(grid, graph)
            expect(result).toStrictEqual(parseInput(largeInput))
        })
    })

    describe('solution', () => {
        test('should return 40 and 315 for test input', () => {
            const result = solution(input)
            expect(result).toStrictEqual({ part1: 40, part2: 315 })
        })
    })
})