const parseInput = input => input.map(r => r.split('').map(v => parseInt(v)))

const getGraph = grid => {
    const graph = {}
    for (let i = 0; i < grid.length; i++) {
        graph[i] = {}
        for (let j = 0; j < grid[i].length; j++) {
            graph[i][j] = { pos: { i, j }, val: grid[i][j], id: `${i},${j}` }
        }
    }
    graph.height = grid.length
    graph.width = grid[0].length
    return graph
}

const reconstructPath = (cameFrom, current) => {
    const path = [current]
    while (cameFrom[current.id] != undefined) {
        current = cameFrom[current.id]
        path.push(current)
    }
    path.reverse()
    return path
}

const getNode = (graph, i, j) => {
    if (i < 0 || j < 0 || i >= graph.height || j >= graph.width) return
    return graph[i][j]
}

const getNeighbors = ({ i, j }, graph, large) => {
    return [
        getNode(graph, i - 1, j, large),
        getNode(graph, i + 1, j, large),
        getNode(graph, i, j - 1, large),
        getNode(graph, i, j + 1, large)
    ].filter(v => v != undefined)
}

const aStar = (start, goal, h, graph) => {
    const openSet = {}
    openSet[start.id] = start
    const cameFrom = {}
    const gScore = {}
    gScore[start.id] = 0
    const fScore = {}
    fScore[start.id] = h(start, goal)

    while (Object.keys(openSet).length > 0) {
        const oArr = Object.entries(openSet)
        oArr.sort((a, b) => fScore[a[0]] - fScore[b[0]])
        let current = openSet[oArr[0][0]]
        if (current.id == goal.id) return reconstructPath(cameFrom, current)

        delete openSet[current.id]
        const neighbors = getNeighbors(current.pos, graph)
        for (const neighbor of neighbors) {
            const tentativeGScore = gScore[current.id] + neighbor.val * 10
            if (gScore[neighbor.id] == undefined || tentativeGScore < gScore[neighbor.id]) {
                cameFrom[neighbor.id] = current
                gScore[neighbor.id] = tentativeGScore
                fScore[neighbor.id] = tentativeGScore + h(neighbor, goal)
                if (openSet[neighbor.id] == undefined) openSet[neighbor.id] = neighbor
            }
        }
    }
    return undefined
}

const heuristic = (node, goal) => {
    const d = (goal.pos.i - node.pos.i) + (goal.pos.j - node.pos.j)
    return d * 4
}

const totalRisk = path => path.reduce((acc, n) => acc + n.val, 0) - path[0].val

const getLargeVal = (graph, i, j) => {
    const oI = i % graph.height
    const oJ = j % graph.width
    const oVal = graph[oI][oJ].val
    let val = ((oVal + (Math.floor(i / graph.height)) + (Math.floor(j / graph.width))) % 9)
    if (val == 0) val = 9
    return val
}

const getLargeGrid = (grid, graph) => {
    const large = JSON.parse(JSON.stringify(grid))
    for (let i = 0; i < grid.length * 5; i++) {
        if (i >= grid.length) large.push([])
        for (let j = 0; j < grid[0].length * 5; j++) {
            if (i >= graph.height || j >= graph.width) {
                const val = getLargeVal(graph, i, j)
                large[i].push(val)
            } else {
                continue
            }
        }
    }
    return large
}

const logWithColor = (string, highlights) => {
    let logString = ''
    let high = false
    for (let i = 0; i < string.length; i++) {
        if (highlights.includes(i)) {
            if (!high) {
                logString += '\x1b[7m'
                high = true
            }
        } else {
            if (high) {
                logString += '\x1b[0m'
                high = false
            }
        }
        logString += string[i]
    }
    logString += '\x1b[0m'
    console.log(logString)
}


const renderGrid = (grid, path) => {
    const highlightMap = {}
    for (const n of path) {
        highlightMap[n.id] = true
    }
    for (let i = 0; i < grid.length; i++) {
        let string = grid[i].join('')
        const highlights = []
        for (let j = 0; j < grid[i].length; j++) {
            if (highlightMap[`${i},${j}`]) highlights.push(j)
        }
        logWithColor(string, highlights)
    }
}

const solution = input => {
    const grid = parseInput(input)
    const graph = getGraph(grid)
    const start = graph[0][0]
    const goal = graph[graph.height - 1][graph.width - 1]
    console.time('smallSearch')
    const path = aStar(start, goal, heuristic, graph)
    console.timeEnd('smallSearch')
    const part1 = totalRisk(path)

    const largeGrid = getLargeGrid(grid, graph)
    const largeGraph = getGraph(largeGrid)
    const largeGoal = largeGraph[largeGraph.height - 1][largeGraph.width - 1]
    console.time('largeSearch')
    const largePath = aStar(start, largeGoal, heuristic, largeGraph)
    console.timeEnd('largeSearch')
    const part2 = totalRisk(largePath)
    return { part1, part2 }
}