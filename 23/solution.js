const Heap = require('../util/Heap')
const chars = ['A', 'B', 'C', 'D']
const costMap = [1, 10, 100, 1000]
const roomMap = [2, 4, 6, 8]

const searchGrid = lines => {
    const queue = Heap.FromArray([
        [0, lines.slice(1, -1).map(row => row.split('').slice(1, -1))]
    ], (a, b) => a[0] < b[0])

    const visited = new Map()
    while (queue.length) {
        const [cost, grid] = queue.pop()
        let rr = grid.slice(1)
        if (roomMap.every((x, t) => rr.every(row => row[x] === chars[t])))
            return cost
        rr = null

        let done = false
        let hallwayItemsCost = 0
        while (!done) {
            let tempCost = 0
            gridLoop:
                for (let x = 0; x < grid[0].length; x++) {
                    const c = chars.indexOf(grid[0][x])
                    if (c < 0) continue
                    const room = roomMap[c]
                    const roomRows = grid.slice(1)
                    for (let r = 0; r < roomRows.length; r++) {
                        const char = roomRows[r][room]
                        if (!(char == chars[c] || char == '.')) continue gridLoop
                    }
                    const [min, max] = x < room ? [x, room] : [room, x]
                    const hallway = grid[0].slice(1 + min, max)
                    for (let h = 0; h < hallway.length; h++) {
                        if (hallway[h] != '.') continue gridLoop
                    }
                    const dx = Math.abs(x - room)
                    const dy = grid.filter((row, i) => i > 0 && row[room] === '.').length
                    grid[0][x] = '.'
                    grid[dy][room] = chars[c]
                    tempCost += (dx + dy) * costMap[c]
                }
            done = tempCost == 0
            hallwayItemsCost += tempCost
        }

        const topItems = []
        for (let i = 0; i < chars.length; i++) {
            const x = roomMap[i]
            const roomRows = grid.slice(1)

            const room = []
            let depth = -1
            let shouldMove = false
            for (let r = 0; r < roomRows.length; r++) {
                const rc = roomRows[r][x]
                if (depth < 0 && rc != '.') depth = r
                if (!shouldMove && (rc != '.' && rc != chars[i])) shouldMove = true
                room.push(rc)
            }

            if (!shouldMove) continue
            topItems.push([chars.indexOf(grid[depth + 1][x]), [x, depth + 1]])
        }

        const newStates = hallwayItemsCost && topItems.length === 0 ? [
            [hallwayItemsCost + cost, grid]
        ] : []

        topItems.reduce(
                (states, [type, [x, y]]) =>
                grid[0]
                .map((c, x) => [c, x])
                .filter(([c, x]) => !roomMap.includes(x) && c === '.')
                .map(([, x]) => x)
                .filter(h_x => grid[0].slice(Math.min(x, h_x), 1 + Math.max(x, h_x)).every(c => c === '.'))
                .reduce((states, h_x) => {
                    const state = grid.map(row => row.slice(0))
                    state[0][h_x] = chars[type]
                    state[y][x] = '.'
                    const new_cost = hallwayItemsCost + cost + (Math.abs(h_x - x) + y) * costMap[type]
                    return [...states, [new_cost, state]]
                }, states),
                newStates
            )
            .map(([cost, state]) => [state.join(), cost, state])
            .filter(([key, new_cost]) => !visited.has(key) || new_cost < visited.get(key))
            .forEach(([key, new_cost, state]) => {
                visited.set(key, new_cost)
                queue.push([new_cost, state])
            })
    }
}

const solution = input => {
    const part1 = searchGrid(input)
    const part2 = searchGrid(
        [
            ...input.slice(0, 3),
            ...['  #D#C#B#A#  ', '  #D#B#A#C#  '],
            ...input.slice(3)
        ]
    )
    return { part1, part2 }
}

module.exports = { solution }