class Items {

    constructor(length = 0) {
        this.list = []
        for (let idx = 0; idx < length; idx++) {
            this.list.push(new Item(idx + 1))
        }
        this.shuffle()
    }

    shuffle() {
        var n = this.list.length
        while (n > 0) {
            var m = Math.floor(Math.random() * n--);
            this.swap(n, m)
        }
    }

    indexOf(item) {
        return this.list.indexOf(item)
    }

    getItem(idx) {
        return this.list[idx]
    }

    addItem(item) {
        this.list.push(item)
    }

    removeItem(item) {
        var idx = this.list.indexOf(item)
        this.list.splice(idx, 1)
    }

    swap(idx1, idx2) {
        var tmp = this.getItem(idx1).val
        this.getItem(idx1).val = this.getItem(idx2).val
        this.getItem(idx2).val = tmp
    }

    reset(...idxs) {
        for (var idx of idxs)
            this.getItem(idx).highlight = false
    }

    resetAll() {
        for (var item of this.list)
            item.highlight = false
    }

    compare(...idxs) {
        for (var idx of idxs)
            this.getItem(idx).highlight = 'grey'
    }

    illuminate(...idxs) {
        var color = idxs.pop()
        for (var idx of idxs)
            this.getItem(idx).highlight = color
    }

    end(...idxs) {
        for (var idx of idxs)
            this.getItem(idx).highlight = 'grey'
    }

    endAll() {
        for (var item of this.list)
            item.highlight = 'grey'
    }

    pushToNext() {
        Visual.next(this.list.map(a => ({ ...a })))
    }
}

class Item {
    constructor(val) {
        this.val = val
        this.highlight = false
    }
}