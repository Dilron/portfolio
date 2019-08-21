import React from 'react'
import Dijkstra from './Dijkstra'

export default function DijkstraProject(){
    return(
        <div id='dijkstra' className='project-wrap dashed-border'>
          <h3>Dijkstra's Algorithm</h3>
          <Dijkstra />
          {/* <div className='project-image-container'>
            <a href="https://i.imgur.com/yU1vqTu.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/yU1vqTu.png' alt='dijkstra hex grid' /></a>
          </div> */}
          <div className='project-description'>
            <p>
              While Dev Mountain teaches a lot in 13 weeks, there just isn't
              enough time to get into the nitty-gritty of computer science
              topics like algorithms, so in an attempt to further my own
              education on some common algorithms and how they can be used,
              I started this project to learn how to implement Dijkstra's
              Algorithm in Javascript. <br />
              <br />
              The initial impetus for the project, harkening back to my
              hobbies, came from me wondering how a program can be taught to
              find a path across a grid of hexagons, and whether there were
              already defined methods to do so. A short bit of research later,
              lo and behold there are many such methods, and after refining
              the definition of what I wanted to do, I settled on Dijkstra.
              In practice, Dijkstra's can be applied to a hex grid by mapping
              the hexes in the same way you would a cubic graph, each hex
              being a vertex with three identifying coordinates. <br />
              <br />
              I won't claim to be an expert on the topic, or even to have
              a perfect understanding of it, but I'm happy with the implementation
              I devised using only a medium article and the wikipedia page.
              My application programmatically generates an array of objects
              representing the grid hexes, each object containing the coordinates
              of the vertex it represents, the cost to traverse it,
              and identifiers for its neighbors. The function for the algorithm
              itself takes in the starting hex and the target hex to build a
              path to. Beginning at the starting hex, the process explores
              each neighbor, noting what vertex it came from to reach it and
              the total cost to get there, adding the unexplored neighbors of that
              vertex to the queue of vertices it will explore, until it finds the
              target hex. From there it builds a list of vertices that make up
              the path, each pointing to the next in sequence like
              breadcrumbs, until it creates the complete path from end to
              start.<br />
              <br />
              As of this writing(Jun 12th, 2019) the application is incomplete
              as I became too busy to finish it while at Dev Mountain. After
              graduation I plan to revisit and finalize the implementation
              as well as building a demonstration page to show it in practice.
              This portfolio page will be updated with a link to the demo when it's
              complete.<br />
              <br />
              My resources:<br />
              <a href='https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e'>the Medium article</a><br />
              <a href='https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'>the Wiki entry</a><br />
              <br />
              The repo:<br />
              <a href='https://github.com/Dilron/dijkstra-project'>https://github.com/Dilron/dijkstra-project</a>
            </p>
          </div>
        </div>
    )
}