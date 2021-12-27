const MinHeap = {
    siftDown(h, i = 0, v = h[i]) {
        if (i < h.length) {
            let k = v[0]
            while (1) {
                let j = i * 2 + 1
                if (j + 1 < h.length && h[j][0] > h[j + 1][0]) j++;
                if (j >= h.length || k <= h[j][0]) break
                h[i] = h[j]
                i = j
            }
            h[i] = v
        }
    },
    pop(h) {
        return this.exchange(h, h.pop())
    },
    exchange(h, v) {
        if (!h.length) return v
        let w = h[0]
        this.siftDown(h, 0, v)
        return w
    },
    push(h, v) {
        let k = v[0],
            i = h.length,
            j
        while ((j = (i - 1) >> 1) >= 0 && k < h[j][0]) {
            h[i] = h[j]
            i = j
        }
        h[i] = v
        return h
    }
}

const chars = ['A', 'B', 'C', 'D']
const costMap = [1, 10, 100, 1000]
const roomMap = [2, 4, 6, 8]

const searchGrid = lines => {
    const queue = [
        [0, lines.slice(1, -1).map(row => row.split('').slice(1, -1))]
    ]

    const visited = new Map()
    while (queue.length) {
        const [cost, grid] = MinHeap.pop(queue)
        if (roomMap.every((x, t) => grid.slice(1).every(row => row[x] === chars[t])))
            return cost

        let done = false
        let hallwayItemsCost = 0
        while (!done) {
            const tempCost = grid[0]
                .map((c, x) => [chars.indexOf(c), x])
                .filter(([t]) => t >= 0)
                .filter(([t]) => grid.every((row, i) => i == 0 || row[roomMap[t]] === chars[t] || row[roomMap[t]] === '.'))
                .filter(([t, x]) => grid[0].slice(1 + Math.min(x, roomMap[t]), Math.max(x, roomMap[t])).every(c => c === '.'))
                .map(([t, x]) => {
                    const dx = Math.abs(x - roomMap[t])
                    const dy = grid.filter((row, i) => i > 0 && row[roomMap[t]] === '.').length
                    grid[0][x] = '.'
                    grid[dy][roomMap[t]] = chars[t]
                    return (dx + dy) * costMap[t]
                })
                .reduce((sum, c) => sum + c, 0)
            done = tempCost === 0
            hallwayItemsCost += tempCost
        }

        const top_items = chars.map((_, t) => t)
            .map(t => [t, grid.slice(1).map(row => row[roomMap[t]])])
            .filter(([t, room]) => room.some(c => c !== '.' && c !== chars[t]))
            .map(([t, room]) => [roomMap[t], room.findIndex(c => c !== '.')])
            .map(([x, depth]) => [chars.indexOf(grid[depth + 1][x]), [x, depth + 1]])

        const newStates = hallwayItemsCost && top_items.length === 0 ? [
            [hallwayItemsCost + cost, grid]
        ] : []

        top_items.reduce(
                (states, [type, [x, y]]) =>
                grid[0]
                .map((c, x) => [c, x])
                .filter(([c, x]) => !roomMap.includes(x) && c === '.')
                .map(([, x]) => x)
                .filter(h_x => grid[0].slice(Math.min(x, h_x), 1 + Math.max(x, h_x)).every(c => c === '.'))
                .reduce((states, h_x) => {
                    const state = grid.map(row => row.map(c => c))
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
                MinHeap.push(queue, [new_cost, state])
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

const input = require('./input')
console.log(solution(input))