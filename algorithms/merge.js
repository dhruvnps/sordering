class Merge {

    merge(a, b) {
        var arr = [],
            a_idx = 0,
            b_idx = 0
        while (true) {
            arr.push(a[a_idx] < b[b_idx] ? a[a_idx++] : b[b_idx++])
            if (a_idx == a.length) return arr.concat(b.slice(b_idx))
            if (b_idx == b.length) return arr.concat(a.slice(a_idx))
        }
    }

    sort(arr) {
        if (arr.length == 1) return arr
        var mid = Math.floor(arr.length / 2)
        return this.merge(
            this.sort(arr.slice(0, mid)),
            this.sort(arr.slice(mid))
        )
    }

}