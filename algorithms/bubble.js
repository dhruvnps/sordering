class Bubble {

    sort(arr) {
        arr = arr.slice()
        var swapped = true,
            n = arr.length
        while (swapped) {
            n--
            swapped = false
            for (let i = 0; i < n; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                    swapped = true
                }
                Visual.numstack.push(arr.slice())
            }
        }
        return arr
    }

}