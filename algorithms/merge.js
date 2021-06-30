// class Merge {

//     merge(a, b) {
//         var list = [],
//             a_idx = 0,
//             b_idx = 0
//         while (true) {
//             list.push(a[a_idx] < b[b_idx] ? a[a_idx++] : b[b_idx++])
//             if (a_idx == a.length) return list.concat(b.slice(b_idx))
//             if (b_idx == b.length) return list.concat(a.slice(a_idx))
//         }
//     }

//     sort(list) {
//         if (list.length == 1) return list
//         var mid = Math.floor(list.length / 2)
//         var ret = this.merge(
//             this.sort(list.slice(0, mid)),
//             this.sort(list.slice(mid))
//         )
//         Visual.numstack.push(ret)
//         return ret
//     }

// }