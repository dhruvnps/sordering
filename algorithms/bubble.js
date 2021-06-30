class Bubble {

    sort(items) {
        var list = items.list
        var length = items.list.length,
            n = length
        for (let i = 0; i < length; i++) {
            n--
            for (let i = 0; i < n; i++) {
                if (list[i].val > list[i + 1].val) {
                    items.swap(i, i + 1)
                }
                if (i + 1 == n) {
                    items.endItem(n)
                }
            }
        }
        items.endAll()
    }

}