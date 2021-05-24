var numbers = [...Array(40).keys()].map(x => ++x)

function shuffle(arr) {
    var n = arr.length
    while (n > 0) {
        var idx = Math.floor(Math.random() * n--);
        [arr[n], arr[idx]] = [arr[idx], arr[n]]
    }
    return arr;
}

class Visual {

    static init(numbers) {
        this.numstack = []

        this.svg = d3
            .select('.visual')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')

        this.bars = this.svg
            .selectAll()
            .data(numbers).enter()
            .append('rect')
            .attr('class', 'bars')
            .attr('width', 25)
            .attr('x', (d, i) => i * 30)
            .style('fill', 'grey')
    }

    static draw(numbers, idx) {
        this.bars
            .data(numbers)
            .attr('height', d => d * 10)
    }

    static runstack(delay) {
        this.numstack.forEach(function (numbers, idx) {
            setTimeout(() => Visual.draw(numbers), delay * idx)
        })
    }
}

Visual.init(numbers)

numbers = shuffle(numbers)

var sorter = new Bubble()
numbers = sorter.sort(numbers)
console.log(numbers)

Visual.runstack(10)