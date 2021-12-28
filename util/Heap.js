class Heap {
    constructor(compare = (a, b) => a < b) {
        this._data = []
        this.compare = compare
        this.length = 0
    }

    static FromArray(arr, compare) {
        const heap = new Heap(compare)
        for (let i = 0; i < arr.length; i++) {
            heap.push(arr[i])
        }
        return heap
    }

    _leftChildIndex(i) {
        return i * 2 + 1
    }

    _rightChildIndex(i) {
        return i * 2 + 2
    }

    _parentIndex(i) {
        return Math.ceil((i - 2) / 2)
    }

    _hasLeftChild(i) {
        const leftI = this._leftChildIndex(i)
        return this._data[leftI] != undefined
    }

    _hasRightChild(i) {
        const rightI = this._rightChildIndex(i)
        return this._data[rightI] != undefined
    }

    _hasParent(i) {
        return i > 0
    }

    _checkIndex(i) {
        if (i >= this._data.length || (i < 0)) throw (`Index out of bounds: ${i}`)
    }

    _swap(i, j) {
        this._checkIndex(i)
        this._checkIndex(j)
        const temp = this._data[i]
        this._data[i] = this._data[j]
        this._data[j] = temp
    }

    _bubbleUp() {
        let i = this._data.length - 1
        while (this._hasParent(i)) {
            let pi = this._parentIndex(i)
            if (this.compare(this._data[pi], this._data[i])) break
            this._swap(i, pi)
            i = pi
        }
    }

    _bubbleDown() {
        let pi = 0
        while (this._hasLeftChild(pi)) {
            const li = this._leftChildIndex(pi)
            const ri = this._rightChildIndex(pi)
            const l = this._data[li]
            const r = this._data[ri]
            let smi = li
            if (r != undefined && this.compare(r, l)) smi = ri
            if (this.compare(this._data[pi], this._data[smi])) break
            this._swap(pi, smi)
            pi = smi
        }
    }

    peek() {
        return this._data[0]
    }

    pop() {
        if (this.length == 0) return undefined
        const maxIndex = this._data.length - 1
        const item = this._data[0]
        this._data[0] = this._data[maxIndex]
        this._data = this._data.slice(0, maxIndex)
        this.length--;
        this._bubbleDown()
        return item
    }

    push(item) {
        this._data.push(item)
        this.length++;
        this._bubbleUp()
    }

    toArray(sorted = true) {
        const arr = this._data.slice(0)
        if (sorted) arr.sort((a, b) => +(this.compare(b, a)) - 0.5)
        return arr
    }
}

module.exports = Heap