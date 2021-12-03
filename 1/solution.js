const input = require('./input')

const createSlidingWindow = (input, n = 3) => {
    const windowed = []
    for (let i = 0; i <= input.length - n; i++) {
        let sum = 0
        for (let j = 0; j < n; j++) {
            sum += input[i + j]
        }
        windowed.push(sum)
    }
    return windowed
}

const solution = (input) => {
    let count = 0
    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] < input[i]) {
            count++
        }
    }
    return count
}

module.exports = { solution, createSlidingWindow }

// console.log("Part 1:", solution(input)) // 1602
// console.log("Part 2:", solution(createSlidingWindow(input))) // 1633