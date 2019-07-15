
// delta functions calculate new coords for hexes adjacent to the given hex(node). direction(path) is a boolean correllating to the direction of the new hex along that axis, 'positive' or 'negative' being based on the arbitrary decision I made about which sides of the axis would be which
function deltaX(node, path) {
    if (path) {
        let newNode = { x: node.x, y: node.y + 1, z: node.z - 1 }
        return newNode
    } else {
        let newNode = { x: node.x, y: node.y - 1, z: node.z + 1 }
        return newNode
    }
}
function deltaY(node, path) {
    if (path) {
        let newNode = { x: node.x + 1, y: node.y, z: node.z - 1 }
        return newNode
    } else {
        let newNode = { x: node.x - 1, y: node.y, z: node.z + 1 }
        return newNode
    }
}
function deltaZ(node, path) {
    if (path) {
        let newNode = { x: node.x + 1, y: node.y - 1, z: node.z }
        return newNode
    } else {
        let newNode = { x: node.x - 1, y: node.y + 1, z: node.z }
        return newNode
    }
}

// the graph function programatically creates the graph array and the subsequent hex-grid
export function buildGraph(radius) {
    //define the first coordinates to start the origin
    const base = {
        x: 0,
        y: 0,
        z: 0
    }
    var idPrimer = 0;
    //function creates new hex objects from an object containing it's base coordinates, typically given by deltaN() of the previous hex in the sequence
    const defHex = (hex) => {
        let newHex = {
            ...hex,
            id: ++idPrimer,
            cost: 1,
            neighbors: [{ ...deltaX(hex, true) },
            { ...deltaX(hex, false) },
            { ...deltaY(hex, true) },
            { ...deltaY(hex, false) },
            { ...deltaZ(hex, true) },
            { ...deltaZ(hex, false) }]
        }
        return newHex
    }
    //begin process by defining the origin: hex at 0, 0, 0
    const origin = defHex(base)
    //the array of objects that will ultimately define the grid and an array of key hex objects to facilitate creating the graph
    const hexGrid = [{ ...origin }]
    const keyHex = [{ ...origin }]
    //function to create the graph. iterates for radius amount of times, creating a new step outward on the grid. progresses linearly, clock-wise to create each hex in the step before advancing to the next
    for (let i = 1; i <= radius; i++) {
        let initHex = defHex(deltaZ(keyHex[keyHex.length - 1], false))
        hexGrid.push({ ...initHex })
        keyHex.push({ ...initHex })
        for (let j = 0; j < i; j++) {
            let nextHex = defHex(deltaY(hexGrid[hexGrid.length - 1], true))
            hexGrid.push(nextHex)
        }
        for (let j = 0; j < i; j++) {
            let nextHex = defHex(deltaZ(hexGrid[hexGrid.length - 1], true))
            hexGrid.push(nextHex)
        }
        for (let j = 0; j < i; j++) {
            let nextHex = defHex(deltaX(hexGrid[hexGrid.length - 1], false))
            hexGrid.push(nextHex)
        }
        for (let j = 0; j < i; j++) {
            let nextHex = defHex(deltaY(hexGrid[hexGrid.length - 1], false))
            hexGrid.push(nextHex)
        }
        for (let j = 0; j < i; j++) {
            let nextHex = defHex(deltaZ(hexGrid[hexGrid.length - 1], false))
            hexGrid.push(nextHex)
        }
        for (let j = 0; j < i - 1; j++) {
            let nextHex = defHex(deltaX(hexGrid[hexGrid.length - 1], true))
            hexGrid.push(nextHex)
        }
    }
    return hexGrid
}

//function to turn the created graph into an array of sorted, mappable sub arrays, each representing a column
export function buildGrid(hexGraph) {
    //radius variable is a holdover from when radius was editable
    const rad = 2
    const columnNum = (rad * 2) + 1;
    var columnSort = []
    for (let i = 0; i < columnNum; i++) {
        columnSort.push([])
    }
    const sortMedian = (columnNum - 1) / 2
    hexGraph.forEach((ele) => {
        columnSort[sortMedian + ele.x].push({ ...ele })
    })
    columnSort.forEach((ele) => {
        ele.sort((a, b) => {
            if (a.z > b.z) {
                return 1
            } else if (a.z < b.z) {
                return -1
            } else {
                return 0
            }
        })
    })
    return columnSort
}