const typeHandlers = {
    0: (values) => values.reduce((acc, v) => acc + v, 0),// sum
    1: (values) => values.reduce((acc, v) => acc * v, 1),// product
    2: (values) => Math.min(...values),// min
    3: (values) => Math.max(...values),// max
    5: (values) => values[0] > values[1] ? 1 : 0,// >
    6: (values) => values[0] < values[1] ? 1 : 0,// <
    7: (values) => values[0] == values[1] ? 1 : 0,// ==
}

const hb = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111'
}

const getHeader = (hex, bin = '') => {
    const obj = {}
    let hexUsed = 0
    if (bin.length < 3) {
        bin += hb[hex[hexUsed]]
        hexUsed++
    }
    if (bin.length < 6) {
        bin += hb[hex[hexUsed]]
        hexUsed++
    }
    obj.v = parseInt(bin.slice(0, 3), 2)
    obj.t = parseInt(bin.slice(3, 6), 2)
    return { obj, bin, hexUsed }
}

const readLiteralValue = (hex, bin = '') => {
    let lpb = 0
    let valueBin = ''
    let eop = false
    let i = 0
    while (!eop) {
        bin += hb[hex[i]]
        while (bin.length - lpb >= 5) {
            const group = bin.slice(lpb, lpb + 5)
            eop = group[0] == '0'
            valueBin += group.slice(1)
            lpb += 5
        }
        i++
    }
    return { value: parseInt(valueBin, 2), bin, hexUsed: i, lpb }
}

const handleOperator0 = (hex, bin = '') => {
    let i = 0
    while (bin.length < 15) {
        bin += hb[hex[i]]
        i++
    }
    const l = parseInt(bin.slice(0, 15), 2)
    let lpb = 15
    const packets = []
    while (lpb < 15 + l) {
        const packet = readPacket(hex.slice(i), bin.slice(lpb))
        i += packet.next.hexUsed
        bin += packet.bin.slice(bin.slice(lpb).length)
        lpb += packet.next.lpb
        packets.push(packet.obj)
    }
    return { packets, bin, hexUsed: i, lpb, l }
}

const handleOperator1 = (hex, bin = '') => {
    let i = 0
    while (bin.length < 11) {
        bin += hb[hex[i]]
        i++
    }
    const l = parseInt(bin.slice(0, 11), 2)
    let lpb = 11
    const packets = []
    while (packets.length < l) {
        const packet = readPacket(hex.slice(i), bin.slice(lpb))
        i += packet.next.hexUsed
        bin += packet.bin.slice(bin.slice(lpb).length)
        lpb += packet.next.lpb
        packets.push(packet.obj)
    }
    return { packets, bin, hexUsed: i, lpb, l }
}

const readPacket = (hex, bIn = '') => {
    let top = false
    if (bIn === true) {
        bIn = ''
        top = true
    }
    let { obj, bin, hexUsed } = getHeader(hex, bIn)
    let next = {}
    if (obj.t == 4) {
        const literal = readLiteralValue(hex.slice(hexUsed), bin.slice(6))
        obj.value = literal.value
        next.lpb = literal.lpb + 6
        next.hexUsed = literal.hexUsed + hexUsed
        bin += literal.bin.slice(bin.slice(6).length)
    } else {
        if (bin.length < 7) {
            bin += hb[hex[hexUsed]]
            hexUsed++
        }
        obj.tid = parseInt(bin.slice(6)[0])
        if (obj.tid == 0) {
            const sub = handleOperator0(hex.slice(hexUsed), bin.slice(7))
            obj.l = sub.l
            obj.packets = sub.packets
            next.hexUsed = sub.hexUsed + hexUsed
            next.lpb = sub.lpb + 7
            bin += sub.bin.slice(bin.slice(7).length)
        } else {
            const sub = handleOperator1(hex.slice(hexUsed), bin.slice(7))
            obj.l = sub.l
            obj.packets = sub.packets
            next.hexUsed = sub.hexUsed + hexUsed
            next.lpb = sub.lpb + 7
            bin += sub.bin.slice(bin.slice(7).length)
        }
    }
    return top ? obj : { obj, bin, next }
}

const getVersionSum = packet => {
    let tv = packet.v
    if (packet.t == 4) return tv
    for (const child of packet.packets) {
        tv += getVersionSum(child)
    }
    return tv
}

const evaluatePacket = packet => {
    const childVals = []
    for (const child of packet.packets) {
        if (child.t != 4) childVals.push(evaluatePacket(child))
        else childVals.push(child.value)
    }
    return typeHandlers[packet.t](childVals)
}

const solution = input => {
    const packet = readPacket(input, true)
    const part1 = getVersionSum(packet)
    const part2 = evaluatePacket(packet)
    return { part1, part2 }
}

module.exports = { solution }