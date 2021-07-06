class Visual {

    static init(items) {
        this.queue = []
        this.timeouts = []

        this.svg = d3
            .select('.visual')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')

        this.bars = this.svg
            .selectAll()
            .data(items.list).enter()
            .append('rect')
            .attr('hidden', true)
            .style('stroke', 'black')
            .style('stroke-width', 1)

        this.draw(items.list, 0)
    }

    static draw(list, ms) {
        var width = 100 / list.length
        this.bars
            .data(list)
            .attr('hidden', false)
            .attr('width', width + '%')
            .attr('x', (d, i) => 50 + ((i - list.length / 2) * width) + '%')
            .style('fill', d => d.highlight ? d.highlight : 'dimgrey')
            .transition().duration(ms)
            .attr('height', d => 100 * d.val / list.length + '%')
    }

    static run(delay) {
        this.queue.forEach(function (list, idx) {
            Visual.timeouts.push(
                setTimeout(() => {
                    Visual.draw(list, 50)
                }, delay * idx))
        })
        this.queue = []
    }

    static stop() {
        for (var timeout in this.timeouts) clearTimeout(timeout)
        this.queue = []
    }

    static next(list) {
        this.queue.push(list)
    }
}