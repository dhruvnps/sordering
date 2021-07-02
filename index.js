var items = new Items(30)

Visual.init(items.list)
Visual.draw(items.list)

var sorter = new Bubble()
sorter.sort(items)
console.log(items);

Visual.run(20)