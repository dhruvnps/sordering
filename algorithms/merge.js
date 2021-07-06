class Merge {

    constructor(color) {
        this.color = color
    }

    sort(items) {
        items.resetAll()
        items.list = this.mergesort(items, 0).list
        items.endAll()
        items.pushToNext()
    }

    mergesort(items, start, main = items) {
        var list = items.list

        if (list.length <= 1) return items

        var left = new Items()
        var right = new Items()
        list.forEach(function (item, idx) {
            if (idx < list.length / 2) {
                left.addItem(item)
            } else {
                right.addItem(item)
            }
        })

        left = this.mergesort(left, start, main)
        right = this.mergesort(right, start + left.list.length, main)

        return this.merge(left, right, start, main)
    }

    merge(left, right, start, main) {
        var result = new Items()
        var idx = start

        while (left.list.length && right.list.length) {
            if (left.getItem(0).val <= right.getItem(0).val) {
                this.step(main, left, result, idx++)
            } else {
                this.step(main, right, result, idx++)
            }
        }

        while (left.list.length) {
            this.step(main, left, result, idx++)
        }
        while (right.list.length) {
            this.step(main, right, result, idx++)
        }

        result.resetAll()
        return result
    }

    step(main, list, result, idx) {
        result.addItem(list.getItem(0))
        main.illuminate(main.indexOf(list.getItem(0)), this.color)
        main.pushToNext()
        result.illuminate(result.list.length - 1, this.color)
        this.updateMain(main, list.getItem(0), idx)
        list.list.shift()
        result.end(result.list.length - 1)
    }

    updateMain(main, item, idx) {
        main.removeItem(item)
        main.list.splice(idx, 0, item)
        main.pushToNext()
    }

}