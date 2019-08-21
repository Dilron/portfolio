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
      costEdit: true
    }
  }

  componentDidMount() {
    this.setGrid()
  }

  //state manager functions

  setGrid = () => {
    const setGraph = buildGraph(2)
    this.setState({graph: setGraph })
  }

  handleSetStart = (hex) => {
    this.setState({hexPathStart: {...hex}})
  }

  handleSetEnd = (hex) => {
    this.setState({hexPathEnd: {...hex}})
  }

  handleHexCostEdit = (hexId, cost) => {
    const newGraph = this.state.graph
    newGraph[newGraph.findIndex((ele) => ele.id === hexId)].cost = cost
    this.setState({graph: [...newGraph]})
  }

  handleToggleEdit = () => {
    this.setState({ costEdit: !this.state.costEdit })
  }

  //seems to be a problem with object copies retaining old values, might need lodash for this shit
  findAgain = () => {
    const {graph, hexPathStart, hexPathEnd} = this.state;
    let procGraph = [...graph];
    let start = procGraph.find(ele => ele.id === hexPathStart.id);
    let end = procGraph.find(ele => ele.id === hexPathEnd.id);
    start.accCost = 0;
    let processing = [start];
    console.log('log from pathing start: ', graph, hexPathStart, hexPathEnd, procGraph, start, end);
    do {
      let hex = processing.shift();
      hex.neighbors.forEach(ele => {
        let neighbor = procGraph.find(pg => pg.x === ele.x && pg.y === ele.y && pg.z === ele.z);
        if (neighbor) 
        {
          if (hex.accCost + neighbor.cost < neighbor.accCost){
            neighbor.accCost = hex.accCost + neighbor.cost
            neighbor.breadCrumb = hex.id
            processing.push(neighbor)
          }
        }
      })
    } while(processing.length > 0)
    let foundPath = [end];
    do{
      foundPath.push(procGraph.find(ele => ele.id === foundPath[foundPath.length - 1].breadCrumb))
    } while(foundPath[foundPath.length - 1].breadCrumb)
    procGraph.forEach(ele => {
      ele.breadCrumb = null;
      ele.accCost = 9999;
    })
    this.setState({path: [...foundPath], graph: procGraph})
  }

  render() {
    const { graph, hexPathStart, hexPathEnd, path, costEdit } = this.state
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
        <section>
          Start: {hexPathStart ? hexPathStart.id : '  '}  End: {hexPathEnd ? hexPathEnd.id : '  '}<br />
          Path: {path.reduce((acc, ele) => {
            return `${ele.id}, ` + acc
          }, '')} <br/>
          <button disabled={!costEdit} onClick={() => this.findAgain()} >Find Path </button>
          <button onClick={this.handleToggleEdit} >Edit Costs</button>
          {/* <button onClick={this.setGrid} >Reset Grid</button> */}
        </section>
      </div>
    )
  }
}

export default Dijkstra

