const delay = 20

var items = new Items(40)

Visual.init(items)

var n = 0
var sorters = [
    new Bubble('mediumaquamarine'),
    new Merge('coral'),
]

d3.select('h1').html(sorters[n].constructor.name)

sorters[n].sort(items)
Visual.run(delay)

function prev() {
    n = mod((n - 1), sorters.length)
    runNew()
}

function next() {
    n = mod((n + 1), sorters.length)
    runNew()
}

function runNew() {
    d3.select('h1').html(sorters[n].constructor.name)

    items.shuffle()
    Visual.stop()
    sorters[n].sort(items)
    Visual.run(delay)
}

function mod(n, m) {
    return ((n % m) + m) % m
}