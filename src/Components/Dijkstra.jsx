import React, { Component } from 'react'
import { buildGraph, buildGrid } from './utilities'

class Dijkstra extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graph: [],
      hexPathStart: null,
      hexPathEnd: null,
      hexStartToggle: true,
      path: [],
      costEdit: true,
      cost: ''
    }
  }

  componentDidMount() {
    this.setGrid()
  }

  //state manager functions

  setGrid = () => {
    const setGraph = buildGraph(2)
    this.setState({ graph: setGraph })
  }

  handleSetStart = (hex) => {
    this.setState({ hexPathStart: { ...hex } })
  }

  handleSetEnd = (hex) => {
    this.setState({ hexPathEnd: { ...hex } })
  }

  handleHexCostEdit = (hexId, cost) => {
    const newGraph = this.state.graph
    newGraph[newGraph.findIndex((ele) => ele.id === hexId)].cost = cost
    this.setState({ graph: [...newGraph] })
  }

  handleToggleEdit = () => {
    this.setState({ costEdit: !this.state.costEdit })
  }

  //this function is the actual logic of my implementation of Dijkstras algorithm. It pulls user entered values from state to find the shortest path from start to end, as explained in the entry for it in my portfolio
  findPath = () => {
    const { graph, hexPathStart, hexPathEnd } = this.state;
    //reference variables
    let procGraph = [...graph];
    let start = procGraph.find(ele => ele.id === hexPathStart.id);
    let end = procGraph.find(ele => ele.id === hexPathEnd.id);
    start.accCost = 0;
    //the processing array will hold the queue of hex nodes that need to have a distance calculated
    let processing = [start];
    // the first do/while advances through the queue of hex nodes, identifying each nodes neighbors and updating their cost if it is less than their previously calculated cost. If their cost was updated, it also updates their 'breadcrumb' to point to the node they were updated from and adds them back to the processing array
    //this method actually ends up finding the shortest path from the start to all nodes in the graph
    do {
      let hex = processing.shift();
      hex.neighbors.forEach(ele => {
        let neighbor = procGraph.find(pg => pg.x === ele.x && pg.y === ele.y && pg.z === ele.z);
        if (neighbor) {
          if (hex.accCost + neighbor.cost < neighbor.accCost) {
            neighbor.accCost = hex.accCost + neighbor.cost
            neighbor.breadCrumb = hex.id
            processing.push(neighbor)
          }
        }
      })
    } while (processing.length > 0)
    //foundPath is the array that will be updated to record the shortest path from start to end
    let foundPath = [end];
    let foundCost = end.accCost
    //the second do/while pushes hexes into the foundPath array based on the breadcrumb value assigned by the first loop until it has created the whole path from end to start
    do {
      foundPath.push(procGraph.find(ele => ele.id === foundPath[foundPath.length - 1].breadCrumb))
    } while (foundPath[foundPath.length - 1].breadCrumb)
    //this process resets the values of the hexes on the graph so they will not corrupt future runs
    procGraph.forEach(ele => {
      ele.breadCrumb = null;
      ele.accCost = 9999;
    })
    this.setState({ path: [...foundPath], graph: procGraph, cost: foundCost })
  }

  render() {
    const { graph, hexPathStart, hexPathEnd, path, costEdit, cost } = this.state
    return (
      <div className='app-container'>
        <section className='grid-container'>
          {buildGrid(graph).map((ele, i) => {
            return (
              <div key={i} className='hex-column'>
                {ele.map((hex) => {
                  return (
                    <div key={hex.id} className={path.find(ele => ele.id === hex.id) ? 'hex-border border-path' : 'hex-border '} >
                      <div className={`hex-element hex-tone-${hex.cost}`}>
                        <p>id:{hex.id}</p>
                        {/* <p>x:{hex.x} y:{hex.y} z:{hex.z}</p> */}
                        <p>cost:
                          <select disabled={this.state.costEdit} onChange={(e) => this.handleHexCostEdit(hex.id, e.target.value)} >
                            <option value={1} >1</option>
                            <option value={2} >2</option>
                            <option value={3} >3</option>
                            <option value={4} >4</option>
                            <option value={5} >5</option>
                          </select>
                        </p>
                        <button disabled={hexPathStart ? hexPathStart.id === hex.id : false} onClick={() => this.handleSetStart(hex)} >Set as Start</button>
                        <button disabled={hexPathEnd ? hexPathEnd.id === hex.id : false} onClick={() => this.handleSetEnd(hex)} >Set as End</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </section>
        <section className='djSubSection'>
          <p>
            Start: {hexPathStart ? hexPathStart.id : '  '} -
            End: {hexPathEnd ? hexPathEnd.id : '  '}
          </p>
          <p>
            Path: {path.reduce((acc, ele) => {
              return `${ele.id}, ` + acc
            }, '')}
          </p>
          <p>
            Cost: {cost}
          </p>
          <div>
            <button disabled={!costEdit} onClick={() => this.findPath()} >Find Path </button>
            <button onClick={this.handleToggleEdit} >Edit Costs</button>
          </div>
          
          {/* <button onClick={this.setGrid} >Reset Grid</button> */}
        </section>
      </div>
    )
  }
}

export default Dijkstra

