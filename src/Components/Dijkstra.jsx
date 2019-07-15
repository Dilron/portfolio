import React, { Component } from 'react'
import { buildGraph, buildGrid } from './utilities'

class Dijkstra extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graph: [],
      hexPathStart: { id: '' },
      hexPathEnd: { id: '' },
      hexStartToggle: true,
      path: [],
      costEdit: true
    }
  }

  componentDidMount() {
    const setGraph = buildGraph(2)
    this.setState({graph: setGraph })
  }

  //state manager functions

  //deprecated function to set custome radius for hex grid
  // setRad = (e) => {
  //     this.setState({[e.target.name]: e.target.value})
  // }

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

  findPath = (graph, start, end) => {
    //initialize arrays for data sorting/storage and the found value
    let found = false
    let processing = [start]
    let checked = []
    var hexPath = []
    do {
      let hex = processing.shift()
      if (hex.x === end.x && hex.y === end.y && hex.z === end.z) {
        checked.push(hex)
        found = true
      } else {
        //check if hex neighbors have already been sorted then add them to the queue with hex as their origin
        hex.neighbors.forEach((ele) => {
          if (
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
            })) {
            let addHex = {
              ...graph.find((g) => {
                return ele.x === g.x && ele.y === g.y && ele.z === g.z
              })
            }
            addHex.breadCrumb = hex.id
            processing.push(addHex)
            checked.push(hex)
          }
        })
      }
    } while (found === false);
    hexPath.push(checked[checked.length - 1])
    do {
      hexPath.push(checked.find((ele) => {
        return ele.id === hexPath[hexPath.length - 1].breadCrumb
      }))
    } while (hexPath[hexPath.length - 1].breadCrumb);
    console.log(hexPath)
    this.setState({ path: [...hexPath] })
  }

  render() {
    const { graph, hexPathStart, hexPathEnd, path } = this.state
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
                        <p>id: {hex.id}</p>
                        <p>x:{hex.x} y:{hex.y} z:{hex.z}</p>
                        <p>cost:
                            <input type='number'
                            value={hex.cost}
                            min={1} max={5}
                            disabled={this.state.costEdit}
                            onChange={(e) => this.handleHexCostEdit(hex.id, e.target.value)} />
                        </p>
                        <button disabled={hexPathStart.id === hex.id} onClick={() => this.handleSetStart(hex)} >Set as Start</button>
                        <button disabled={hexPathEnd.id === hex.id} onClick={() => this.handleSetEnd(hex)} >Set as End</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </section>
        <section>
          Start: {hexPathStart.id}  <br /> End: {hexPathEnd.id}<br />
          <button onClick={() => this.findPath(graph, hexPathStart, hexPathEnd)} >Find Path </button>
          <div>
            Path: {path.reduce((acc, ele) => {
              return `${ele.id}, ` + acc
            }, '')}
          </div>
          <button onClick={this.handleToggleEdit} >Edit Costs</button>
        </section>
      </div>
    )
  }
}

export default Dijkstra

