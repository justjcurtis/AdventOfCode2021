const getGraph = input => {
    const graph = {}
    for (const line of input) {
        const [a, b] = line.split('-')
        if (graph[a] == undefined) {
            graph[a] = []
        }
        graph[a].push(b)
        if (graph[b] == undefined) {
            graph[b] = []
        }
        graph[b].push(a)
    }
    return graph
}

const countOccurrences = (path, n) => path.filter(c => c == n).length

const getPaths = (graph, maxForOneSmall = 1, path = ['start']) => {
    maxForOneSmall = Math.max(maxForOneSmall, 1)
    let paths = []
    const last = path.slice(-1)
    for (const next of graph[last]) {
        if (next == 'start') continue
        if (next == 'end') {
            paths.push([...path, 'end'])
            continue
        }
        if (next == next.toLowerCase()) {
            const occurrences = countOccurrences(path, next) + 1
            if (occurrences > maxForOneSmall) {
                continue
            }
            if (occurrences == maxForOneSmall) {
                paths = [...paths, ...getPaths(graph, maxForOneSmall - 1, [...path, next])]
                continue
            }
        }
        paths = [...paths, ...getPaths(graph, maxForOneSmall, [...path, next])]
    }
    return paths
}

const solution = input => {
    const G = getGraph(input)
    const part1 = getPaths(G, 1).length
    const part2 = getPaths(G, 2).length
    return { part1, part2 }
}