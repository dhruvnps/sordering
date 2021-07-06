class Merge {

    constructor(color) {
        this.color = color
    }

    sort(items) {
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

        while (left.list.length && right.list.length) {
            if (left.getItem(0).val <= right.getItem(0).val) {
                result.addItem(left.getItem(0))
                result.illuminate(result.list.length - 1, this.color)
                left.list.shift()
            } else {
                result.addItem(right.getItem(0))
                result.illuminate(result.list.length - 1, this.color)
                right.list.shift()
            }
            this.updateMain(main, result, start)
            result.end(result.list.length - 1)
        }

        while (left.list.length) {
            result.addItem(left.getItem(0))
            result.illuminate(result.list.length - 1, this.color)
            left.list.shift()
            this.updateMain(main, result, start)
            result.end(result.list.length - 1)
        }
        while (right.list.length) {
            result.addItem(right.getItem(0))
            result.illuminate(result.list.length - 1, this.color)
            right.list.shift()
            this.updateMain(main, result, start)
            result.end(result.list.length - 1)
        }

        result.resetAll()
        return result
    }

    updateMain(main, result, start) {
        main.list = main.list
            .slice(0, start)
            .concat(
                result.list,
                main.list.slice(start + result.list.length))
        main.pushToNext()
    }

}