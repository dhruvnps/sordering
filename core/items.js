class Items {

    constructor(length) {
        this.list = []
        for (let pos = 0; pos < length; pos++) {
            var val = pos + 1
            this.list.push(new Item(val, pos))
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

    swap(idx1, idx2) {
        var tmp = this.list[idx1]
        this.list[idx1] = this.list[idx2]
        this.list[idx2] = tmp
        tmp = this.list[idx1].pos
        this.list[idx1].pos = this.list[idx2].pos
        this.list[idx2].pos = tmp
    }

    reset(...idxs) {
        for (var idx of idxs)
            this.list[idx].highlight = false
    }

    compare(...idxs) {
        for (var idx of idxs)
            this.list[idx].highlight = 'grey'
    }

    illuminate(...idxs) {
        for (var idx of idxs)
            this.list[idx].highlight = 'mediumaquamarine'
    }

    end(...idxs) {
        for (var idx of idxs)
            this.list[idx].highlight = 'grey'
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
    constructor(val, pos) {
        this.val = val
        this.pos = pos
        this.highlight = false
    }
}