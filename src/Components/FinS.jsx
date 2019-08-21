import React from 'react'

export default function FinS(){
    return(
        <div id='fin-s' className='project-wrap dashed-border'>
          <h3>Fin-S, a visualizer for financial literacy</h3>
          <div className='project-image-container'>
            <a href="https://i.imgur.com/vNFeqbH.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/vNFeqbH.png' alt='fin s landing page' /></a>
            <a href="https://i.imgur.com/zfmO68L.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/zfmO68L.png' alt='fin s dashboard' /></a>
          </div>
          <div className='project-image-container'>
            <a href="https://i.imgur.com/Y51DuLq.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/Y51DuLq.png' alt='fin s mobile landing page' /></a>
            <a href="https://i.imgur.com/OCDmYpy.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/OCDmYpy.png' alt='fin s mobile dashboard' /></a>
            <a href="https://i.imgur.com/iD4ezTQ.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/iD4ezTQ.png' alt='fin s mobile profile' /></a>
          </div>
          <div className='project-description'>
            <p>
              For my final/group project at Dev Mountain, my group created
              Fin-s, a web application designed to help users visualize their
              debts and expenses, and plan their way towards financial autonomy.
              Users could enter general information about their finances and see
              a chart of how their deficits were changing over time. Adjustable
              settings allowed the user to see how changes in their payment
              plan would effect the timeframe of their debt. Using their account,
              users could revisit the site and see the change as it happened
              over time.<br />
              <br />
              The project allowed me my first opportunity to work as part of a
              development team. For my part, I learned a substantial amount about
              effective strategies for working in teams, including methods for
              pair programming, version control, and workload delineation.<br />
              <br />
              In two weeks we were able to build our product using PostgreSQL,
              Express, React, and NodeJS, as well as the following additional
              technologies, among others:<br />
              <br />
              <a href='https://fullcalendar.io/'>fullcalendar</a>:<br />
              A library that allowed us to quickly integrate a calendar view
              with a suite of useful customization options.<br />
              <br />
              <a href='http://momentjs.com/docs/'>Moment.js</a>:<br />
              A toolset that simplifies interaction with Javascripts Date
              object and integrates with fullcalendar.<br />
              <br />
              <a href='https://www.chartjs.org/'>Chart.js</a>:<br />
              A library of chart building functions with many separate
              chart types, easy to build, and easy to integrate with animations.<br />
              <br />
              <a href='https://www.mongodb.com/'>MongoDB</a>:<br />
              A document oriented database service that we used to augment our
              information storage to more easily interact with fullcalendar and
              ChartJS.<br />
              <br />
              The hosted site: <a href='https://fin-s.us/#/'>https://fin-s.us/#/</a> <br />
              The repo:<a href='https://github.com/fin-s/fin-s'>https://github.com/fin-s/fin-s</a>
            </p>
          </div>
        </div>
    )
}