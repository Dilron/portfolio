import React, {Component} from 'react'

class Dijkstra extends Component {
    constructor(props){
        super(props)
        this.state = {
            radius: 0,
            grid: [],
            graph: [],
            hexPathStart: {},
            hexPathEnd: {},
            hexStartToggle: true,
            path: []
        }
    }
    //state manager functions
    setRad = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    setGrid = (g) => {
        this.setState({grid: g})
    }

    setHexPath = (hex) => {
        if(this.state.hexStartToggle){
            console.log(`x: ${hex.x}, y: ${hex.y}, z: ${hex.z}`)
            this.setState({hexPathStart: {...hex}, hexStartToggle: !this.state.hexStartToggle})
        } else {
            console.log(`x: ${hex.x}, y: ${hex.y}, z: ${hex.z}`)
            this.setState({hexPathEnd: {...hex}, hexStartToggle: !this.state.hexStartToggle})
        }
    }
    // delta functions calculate new coords for hexes adjacent to the given hex(node). direction(path) is a boolean correllating to the direction of the new hex along that axis, 'positive' or 'negative' being based on the arbitrary decision I made about which sides of the axis would be which
    deltaX = (node, path) => {
        if(path){
            let newNode = {x: node.x, y: node.y + 1, z: node.z - 1}
            return newNode
        } else {
            let newNode = {x: node.x, y: node.y - 1, z: node.z + 1}
            return newNode
        }
    }
    deltaY = (node, path) => {
        if(path){
            let newNode = {x: node.x + 1, y: node.y, z: node.z - 1}
            return newNode
        } else {
            let newNode = {x: node.x - 1, y: node.y, z: node.z + 1}
            return newNode
        }
    }
    deltaZ = (node, path) => {
        if(path){
            let newNode = {x: node.x + 1, y: node.y - 1, z: node.z}
            return newNode
        } else {
            let newNode = {x: node.x - 1, y: node.y + 1, z: node.z}
            return newNode
        }
    }
    // the graph function programatically creates the graph array and the subsequent hex-grid
    graph = (rad) => {
        //define the first coordinates to start the origin
        const base = {
          x: 0, 
          y: 0, 
          z: 0}
        var idPrimer = 0;
        //function creates new hex objects from an object containing it's base coordinates, typically given by deltaN() of the previous hex in the sequence
        const defHex = (hex) => {
          let newHex = {
            ...hex,
            id: ++idPrimer,
            neighbors: [{...this.deltaX(hex, true)}, 
              {...this.deltaX(hex, false)}, 
              {...this.deltaY(hex, true)}, 
              {...this.deltaY(hex, false)},
              {...this.deltaZ(hex, true)}, 
              {...this.deltaZ(hex, false)}]
          }
          return newHex
        }
        //begin process by defining the origin: hex at 0, 0, 0
        const origin = defHex(base)
        //the array of objects that will ultimately define the grid and an array of key hex objects to facilitate creating the graph
        const hexGrid = [{...origin}]
        const keyHex = [{...origin}]
        //function to create the graph. iterates for radius amount of times, creating a new step outward on the grid. progresses linearly, clock-wise to create each hex in the step before advancing to the next
        for(let i = 1; i <= rad; i++){
          let initHex = defHex(this.deltaZ(keyHex[keyHex.length - 1], false))
          hexGrid.push({...initHex})
          keyHex.push({...initHex})
          for(let j = 0; j < i; j++){
            let nextHex = defHex(this.deltaY(hexGrid[hexGrid.length - 1], true))
            hexGrid.push(nextHex)
          }
          for(let j = 0; j < i; j++){
            let nextHex = defHex(this.deltaZ(hexGrid[hexGrid.length - 1], true))
            hexGrid.push(nextHex)
          }
          for(let j = 0; j < i; j++){
            let nextHex = defHex(this.deltaX(hexGrid[hexGrid.length - 1], false))
            hexGrid.push(nextHex)
          }
          for(let j = 0; j < i; j++){
            let nextHex = defHex(this.deltaY(hexGrid[hexGrid.length - 1], false))
            hexGrid.push(nextHex)
          }
          for(let j = 0; j < i; j++){
            let nextHex = defHex(this.deltaZ(hexGrid[hexGrid.length - 1], false))
            hexGrid.push(nextHex)
          }
          for(let j = 0; j < i - 1; j++){
            let nextHex = defHex(this.deltaX(hexGrid[hexGrid.length - 1], true))
            hexGrid.push(nextHex)
          }
        }
        //function to turn the created graph into an array of sorted, mappable sub arrays, each representing a column
        const buildGrid = (hexGraph) => {
            const columnNum = (rad * 2) + 1;
            var columnSort = []
            for(let i = 0; i < columnNum; i++){
              columnSort.push([])
            }
            const sortMedian = (columnNum - 1)/2
            hexGraph.forEach((ele) => {
              columnSort[sortMedian + ele.x].push({...ele})
            })
            columnSort.forEach((ele) => {
                ele.sort((a, b) => {
                    if(a.z > b.z){
                        return 1
                    } else if(a.z < b.z) {
                        return -1
                    } else {
                        return 0
                    }
                })
            })
            return columnSort
        }
        this.setState({graph: hexGrid})
        const finalGrid = buildGrid(hexGrid)
        this.setState({graph: hexGrid})
        return finalGrid
    }

    findPath = (graph, start, end) => {
      //initialize arrays for info sorting/storage and the found value to 
        let found = false
        let processing = [start]
        let checked = []
        var hexPath = []
        do{
          let hex = processing.shift()
          if(hex.x === end.x && hex.y === end.y && hex.z === end.z){
            checked.push(hex)
            found = true
          } else {
            //check if hex neighbors have already been sorted then add them to the queue with hex as their origin
            hex.neighbors.forEach((ele) => {
              if(
              !checked.find((check) => {
                return ele.x === check.x && ele.y === check.y && ele.z === check.z
              })
              &&
              !processing.find((proc) => {
                return ele.x === proc.x && ele.y === proc.y && ele.z === proc.z
              })
              &&
              graph.find((gf) => {
                return ele.x === gf.x && ele.y === gf.y && ele.z === gf.z
              })){
                let addHex = {...graph.find((g) => {
                return ele.x === g.x && ele.y === g.y && ele.z === g.z
              })}
                addHex.breadCrumb = hex.id
                processing.push(addHex)
                checked.push(hex)
              }
            })
          }
        } while (found === false);
        hexPath.push(checked[checked.length - 1])
        do{
          hexPath.push(checked.find((ele) => {
            return ele.id === hexPath[hexPath.length - 1].breadCrumb
          }))
        } while(hexPath[hexPath.length - 1].breadCrumb);
        console.log(hexPath)
        this.setState({path: [...hexPath]})
      }

    render(){
        const {radius, grid, graph, hexPathStart, hexPathEnd, path} = this.state
        return(
            <div className='app-container'>
                Graph
                <input type='number' 
                name='radius'
                onChange={(e) => this.setRad(e)} 
                />
                <button onClick={() => this.setGrid(this.graph(radius))} >Create Hex Graph</button>
                <button onClick={() => this.findPath(graph, hexPathStart, hexPathEnd)} >Find Path </button>
                <div>
                  Path: {path.reduce((acc, ele) => {
                    return acc + `${ele.id}, `
                  }, '')}
                </div>
                <div className='grid-container'>
                    {grid.map((ele, i) => {
                        if(i%2 === 1){
                            return(
                                <div key={i} className='hex-column'>
                                    {ele.map((hex) => {
                                        return(
                                            <div onClick={() => this.setHexPath(hex)} 
                                            key={hex.id} 
                                            className='hex-1'>id: {hex.id} x:{hex.x} y:{hex.y} z:{hex.z} </div>
                                        )
                                    })}
                                </div>
                            )
                        } else {
                            return(
                                <div key={i} className='hex-column'>
                                    {ele.map((hex) => {
                                        return(
                                            <div onClick={() => this.setHexPath(hex)} 
                                            key={hex.id} 
                                            className='hex-2'>id: {hex.id} x:{hex.x} y:{hex.y} z:{hex.z}</div>
                                        )
                                    })}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Dijkstra