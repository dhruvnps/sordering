class Visual {

    static init(list) {
        this.queue = []

        this.svg = d3
            .select('.visual')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')

        this.bars = this.svg
            .selectAll()
            .data(list).enter()
            .append('rect')
            .attr('hidden', true)
            .style('stroke', 'black')
            .style('stroke-width', 1)
    }

    static draw(list) {
        var width = 100 / list.length
        this.bars
            .data(list)
            .attr('hidden', false)
            .attr('height', d => 100 * d.val / list.length + '%')
            .attr('width', width + '%')
            .attr('x', d => 50 + ((d.pos - list.length / 2) * width) + '%')
            .style('fill', d => d.highlight ? d.highlight : 'dimgrey')
    }

    static run(delay) {
        this.queue.forEach(function (list, idx) {
            setTimeout(() => {
                Visual.draw(list)
            }, delay * idx)
        })
    }

    static next(list) {
        this.queue.push(list)
    }
}