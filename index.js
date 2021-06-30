var items = new Items(20)


Visual.init(items.list)
Visual.draw(items.list)

var sorter = new Bubble()
sorter.sort(items)

Visual.run(50)