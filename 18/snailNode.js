class SnailNode {
    constructor(value, left, right, depth, parent) {
        this.value = value
        this.left = left
        this.right = right
        this.depth = depth
        this.parent = parent
    }

    getRightVal() {
        if (this.value != undefined) return this
        return this.right.getRightVal()
    }

    getLeftVal() {
        if (this.value != undefined) return this
        return this.left.getLeftVal()
    }

    leftAdj() {
        if (this.parent) return this.parent.left !== this ? this.parent.left.getRightVal() : this.parent.leftAdj()
        return undefined
    }

    rightAdj() {
        if (this.parent) return this.parent.right !== this ? this.parent.right.getLeftVal() : this.parent.rightAdj()
        return undefined
    }

    collapse() {
        if (this.value != undefined)
            return this.value;
        else return [this.left.collapse(), this.right.collapse()];
    }

    nextToExplode() {
        if (this.value != undefined) return undefined
        if (this.depth == 4) return this
        const leftExplode = this.left.nextToExplode();
        if (leftExplode != undefined && leftExplode.value == undefined)
            return leftExplode
        const rightExplode = this.right.nextToExplode();
        if (rightExplode != undefined && rightExplode.value == undefined)
            return rightExplode
        return undefined
    }

    nextToSplit() {
        if (this.value != undefined) {
            if (this.value > 9) return this
            return undefined
        }
        const leftSplit = this.left.nextToSplit()
        if (leftSplit != undefined) return leftSplit

        const rightSplit = this.right.nextToSplit()
        if (rightSplit != undefined) return rightSplit

        return undefined
    }

    explode() {
        const leftAdj = this.leftAdj()
        const rightAdj = this.rightAdj()
        if (leftAdj != undefined)
            leftAdj.value += this.left.value
        if (rightAdj != undefined)
            rightAdj.value += this.right.value
        delete this.left
        delete this.right
        this.value = 0
    }

    split() {
        const newLeft = new SnailNode(
            Math.floor(this.value / 2),
            undefined,
            undefined,
            this.depth + 1,
            this)
        this.left = newLeft;

        const newRight = new SnailNode(
            Math.ceil(this.value / 2),
            undefined,
            undefined,
            this.depth + 1,
            this)
        this.right = newRight

        delete this.value
    }

    reduce() {
        let reduced = false
        while (!reduced) {
            reduced = true
            const toExplode = this.nextToExplode()
            const toSplit = this.nextToSplit()
            if (toExplode != undefined) {
                reduced = false;
                toExplode.explode()
            } else if (toSplit != undefined) {
                reduced = false
                toSplit.split()
            }
        }
        return this
    }

    magnitude() {
        if (this.value != undefined) return this.value
        return this.left.magnitude() * 3 + this.right.magnitude() * 2
    }
}

module.exports = SnailNode