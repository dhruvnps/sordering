var items = new Items(12)


Visual.init(items.list)
Visual.draw(items.list)

var sorter = new Bubble()
sorter.sort(items)

Visual.run(100)