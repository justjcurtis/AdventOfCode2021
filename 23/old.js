const input = require('./input')
const test = require('./testData')

const xMap = {
    room: [3, 5, 7, 9],
    rhw: [1.5, 2.5, 3.5, 4.5],
    hallway: [1, 2, 4, 6, 7, 10, 11]
}

const costMap = [1, 10, 100, 1000]

const charMap = {
    '#': null,
    '.': 0,
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4
}

const pathIsBlocked = (node, j1, j2, i1, i2, x1, x2) => {
    const dir = x1 > x2 ? -1 : 1
    const aIsRoom = j1 > 0
    const bIsRoom = j2 > 0

    // if (aIsRoom) {
    //     // can leave room 
    //     if (j1 > 1) {
    //         for (let j = j2 - 2; j >= 0; j == ) {
    //             if (node.rooms[j] > 0) return true
    //         }
    //     }
    // }

    //check hallway for blockers
    const iStart = aIsRoom ? xMap.rhw[i1] : i1 + dir
    const endI = bIsRoom ? xMap.rhw[i2] : i2
    if (dir > 0) {
        for (let i = Math.ceil(iStart); i <= Math.floor(endI); i++) {
            if (node.hallway[i] > 0) return true
        }
    } else {
        for (let i = Math.floor(iStart); i >= Math.ceil(endI); i--) {
            if (node.hallway[i] > 0) return true
        }
    }
    return false
}

const getPathLength = (node, j1, j2, i1, i2) => {
    const x1 = j1 == 0 ? xMap.hallway[i1] : xMap.room[i1]
    const x2 = j2 == 0 ? xMap.hallway[i2] : xMap.room[i2]
    const blocked = pathIsBlocked(node, j1, j2, i1, i2, x1, x2)
    return blocked ? -1 : j1 + j2 + Math.abs(x1 - x2)
}

const getEmptyDepth = (node, c) => {
    const room = node.rooms[c - 1]
    let deepestEmpty = -1
    for (let j = 0; j < room.length; j++) {
        if (room[j] == 0) {
            deepestEmpty++
            continue
        }
        if (room[j] == c) continue
        return -1
    }
    return deepestEmpty
}

const getAllNextStates = node => {
    if (node.id == '002400021003341') {
        const lol = 1
    }
    const next = [];
    // hallway to room 
    for (let i = 0; i < node.hallway.length; i++) {
        const c = node.hallway[i]
        if (c == 0) continue
        const deepestEmpty = getEmptyDepth(node, c)
        if (deepestEmpty > -1) {
            const cost = getPathLength(node, 0, deepestEmpty + 1, i, c - 1) * costMap[c - 1]
            if (cost > -1) {
                const nextRooms = node.rooms.map(r => r.slice(0))
                const nextHallway = node.hallway.slice(0)
                nextHallway[i] = 0
                nextRooms[c - 1][deepestEmpty] = c
                next.push({ cost, hallway: nextHallway, rooms: nextRooms })
            }
        }
    }

    // room to..
    for (let i = 0; i < node.rooms.length; i++) {
        let isSet = true
        for (let d = node.rooms[i].length - 1; d >= 0; d--) {
            const c = node.rooms[i][d]
            if (c == 0) {
                if (d == node.rooms[i].length - 1) isSet = false
                break
            }
            if (c != i + 1) {
                isSet = false
                break
            }
        }
        if (isSet) continue
        for (let d = 0; d < node.rooms[i].length; d++) {
            const c = node.rooms[i][d]
            if (c == 0) continue;
            // room
            const deepestEmpty = getEmptyDepth(node, c)
            if (deepestEmpty > -1) {
                const cost = getPathLength(node, d + 1, deepestEmpty + 1, i, c - 1) * costMap[c - 1]
                if (cost > -1) {
                    const nextRooms = node.rooms.map(r => r.slice(0))
                    const nextHallway = node.hallway.slice(0)
                    nextRooms[c - 1][deepestEmpty] = c
                    nextRooms[i][d] = 0
                    next.push({ cost, hallway: nextHallway, rooms: nextRooms })
                }
            }
            // hallway 
            for (let j = 0; j < node.hallway.length; j++) {
                if (node.hallway[j] != 0) continue
                const cost = getPathLength(node, d + 1, 0, i, j) * costMap[c - 1]
                if (cost > -1) {
                    const nextRooms = node.rooms.map(r => r.slice(0))
                    const nextHallway = node.hallway.slice(0)
                    nextHallway[j] = c
                    nextRooms[i][d] = 0
                    next.push({ cost, hallway: nextHallway, rooms: nextRooms })
                }

            }
            break
        }
    }
    return next.map(n => getNode(n, node.thisId))
}

const parseInput = input => {
    const hallway = [
        charMap[input[1][1]],
        charMap[input[1][2]],
        charMap[input[1][4]],
        charMap[input[1][6]],
        charMap[input[1][8]],
        charMap[input[1][10]],
        charMap[input[1][11]],
    ]
    const rooms = [
        [charMap[input[2][3]], charMap[input[3][3]]],
        [charMap[input[2][5]], charMap[input[3][5]]],
        [charMap[input[2][7]], charMap[input[3][7]]],
        [charMap[input[2][9]], charMap[input[3][9]]]
    ]
    return { hallway, rooms, cost: 0 }
}

const getNeighbors = node => {
    if (node._n == null) {
        node._n = getAllNextStates(node)
    }
    return node._n
}

const getNode = ({ hallway, rooms, cost, prevId = '' }) => {
    const thisId = hallway.join('') + '-' + rooms.map(r => r.join('.')).join(' ')
    return {
        thisId,
        id: prevId + '_' + thisId,
        hallway,
        rooms,
        cost,
        _n: null
    }
}

const reconstructPath = (cameFrom, current) => {
    const path = [current]
    let totalCost = 0
    while (cameFrom[current.id] != undefined) {
        current = cameFrom[current.id]
        totalCost += current.cost
        path.push(current)
    }
    path.reverse()
    return { path, cost: totalCost }
}

const checkDone = node => node.hallway.filter(v => v > 0).length == 0 && node.rooms.every((r, i) => r.every(v => v == i + 1))

const heuristic = (node) => node.cost

const aStar = (start, isDone, h) => {
    const gScore = {}
    gScore[start.id] = 0

    const fScore = {}
    fScore[start.id] = h(start)

    const openSet = {}
    openSet[fScore[start.id]] = [start]
    const openMap = {}
    let openCount = 1

    openMap[start.id] = true

    const cameFrom = {}
    const paths = []
    while (openCount > 0) {
        const fScores = Object.keys(openSet)
        let current = openSet[fScores[0]][0]
        if (isDone(current)) return reconstructPath(cameFrom, current)

        openSet[fScores[0]].splice(0, 1)
        if (openSet[fScores[0]].length == 0) delete openSet[fScores[0]]
        delete openMap[current.id]
        openCount--
        const neighbors = getNeighbors(current)
        for (const neighbor of neighbors) {
            const tentativeGScore = gScore[current.id] + neighbor.cost
            if (gScore[neighbor.id] == undefined || tentativeGScore < gScore[neighbor.id]) {
                cameFrom[neighbor.id] = current
                gScore[neighbor.id] = tentativeGScore
                fScore[neighbor.id] = tentativeGScore + h(neighbor)
                if (openMap[neighbor.id] == undefined) {
                    if (openSet[fScore[neighbor.id]] == undefined) openSet[fScore[neighbor.id]] = []
                    openSet[fScore[neighbor.id]].push(neighbor)
                    openMap[neighbor.id] = true
                    openCount++
                }
            }
        }
    }

    return undefined
}

const solution = input => {
    const start = getNode(parseInput(input))
    const cheapestPath = aStar(start, checkDone, heuristic)
    return { part1: cheapestPath.cost }
}

console.log(solution(input))