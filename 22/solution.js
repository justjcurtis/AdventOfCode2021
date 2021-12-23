const parseInput = input => {
    const parsed = []
    for (const line of input) {
        const on = line.split(' ')[0] == 'on'
        const ranges = line.split(' ')[1]
        const [xStr, yStr, zStr] = ranges.split(',').map(str => str.slice(2))
        const x = xStr.split('..').map(Number)
        const y = yStr.split('..').map(Number)
        const z = zStr.split('..').map(Number)
        parsed.push({ on, ranges: [x, y, z] })
    }
    return parsed
}

const getVolume = c => c.reduce((acc, [min, max]) => acc *= max + 1 - min, 1)

const getCollision = (a, b) => {
    const min = Math.max(a[0], b[0])
    const max = Math.min(a[1], b[1])
    return min >= max ? undefined : [min, max]
}

const getOverwriteVolume = (a, cuboids) => {
    const overwrites = []
    cuboidsLoop:
        for (let i = 0; i < cuboids.length; i++) {
            const collisions = []
            for (let j = 0; j < 3; j++) {
                const collision = getCollision(a[j], cuboids[i].ranges[j])
                if (collision == undefined) {
                    overwrites.push(0)
                    continue cuboidsLoop
                }
                collisions.push(collision)
            }
            overwrites.push(
                getVolume(collisions) -
                getOverwriteVolume(collisions, cuboids.slice(1 + i))
            )
        }
    return overwrites.reduce((acc, cur) => acc + cur, 0)
}

const countLit = cuboids => {
    let total = 0
    for (let i = 0; i < cuboids.length; i++) {
        if (cuboids[i].on)
            total += getVolume(cuboids[i].ranges) -
            getOverwriteVolume(cuboids[i].ranges, cuboids.slice(i + 1))
    }
    return total
}

const minMaxFilter = (min, max) => {
    const filterRange = [min, max]
    const filter = (instruction => {
        for (const range of instruction.ranges) {
            if (getCollision(range, filterRange) == undefined) return false
        }
        return true
    })
    return filter
}

const solution = input => {
    const cuboids = parseInput(input)
    const part1 = countLit(cuboids.filter(minMaxFilter(-50, 50)))
    const part2 = countLit(cuboids)
    return { part1, part2 }
}

module.export = { solution }