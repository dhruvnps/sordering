var items = new Items(50)

Visual.init(items.list)
Visual.draw(items.list)

var sorter = new Merge('coral')
//var sorter = new Bubble('mediumaquamarine')
sorter.sort(items)

Visual.run(25)