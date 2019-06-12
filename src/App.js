import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className='nav'>
        <h3 className='hover-links'>About...<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 className='hover-links'>Skills...<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 className='hover-links'>Projects...<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 className='hover-links'>Contact...<i>{String.fromCharCode(0x258b)}</i></h3>
      </section>
      <header className='name-header'>
        <h1>Dillon O'Kelley</h1>
        <h2>Web Developer...{String.fromCharCode(0x258b)} </h2>
      </header>
      <section className='about display-section'>
        <h4>about-me:{String.fromCharCode(0x223d)}</h4>
        <p className='dashed-border'>
          Outside of my work life, my activities focus around my family, 
          my friends, and my hobbies. Spending time with those close to me 
          most commonly involves trying new foods and enjoying as many movies, 
          plays, and concerts as possible. After that, my hobbies involve any 
          and all things nerdy. Videogames, Boardgames, Tabletop RPGs, and 
          Tabletop Wargames all fall under the purview of my interests. I 
          would even credit some of my enthusiasm for coding to that fact. Learning 
          and manipulating interlocking sets of rules is something I've engaged 
          in for as long as I've been able to play games and I hope to bring 
          that practice to bear in my work.
        </p>
      </section>
      <section className='skills display-section'>
        <h4>skills:{String.fromCharCode(0x223d)}</h4>
        <div className='skills-wrap dashed-border'>
          <p>
            technology.language:<br/>
            technology.language:<br/>
            technology.language:<br/>
            technology.language:<br/>
            technology.library:<br/>
            technology.library:<br/>
            technology.library:<br/>
            technology.runtime-env:<br/>
            technology.framework:<br/>
            technology.version-ctrl:<br/>
          </p>
          <p>
            <img className='skills-thumbnail' src='https://i.imgur.com/xF7krX0.png' alt='js thumbnail' /> Javascript<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/LP5RZUf.png' alt='html thumbnail' /> HTML 5<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/CblPifK.png' alt='css thumbnail' /> CSS<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/ePwHfE6.png' alt='postgres thumbnail' /> PostgreSQL<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/AXRiLe0.png' alt='react thumbnail' /> React JS<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/hZY5jSW.png' alt='redux thumbnail' /> React Redux<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/XxtdEou.png' alt='sass thumbnail' /> Sass<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/fbg4ejN.png' alt='node thumbnail' /> Node JS<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/808F26L.png' alt='express thumbnail' /> Express<br/>
            <img className='skills-thumbnail' src='https://i.imgur.com/VRSYaF1.png' alt='git hub thumbnail' /> Git Hub<br/>
          </p>
        </div>
      </section>
      <section className='display-section'>
        <h4>my-projects:{String.fromCharCode(0x223d)}</h4>
        <div className='project-wrap dashed-border'>
          <h3>Fin-S, a visualizer for financial literacy</h3>
          <div className='project-image-container'>
            <img className='project-image' src='https://i.imgur.com/vNFeqbH.png' alt='fin s landing page' />
            <img className='project-image' src='https://i.imgur.com/zfmO68L.png' alt='fin s dashboard' />
          </div>
          <div className='project-description'>
            <p>
              For my final/group project at Dev Mountain, my group created
              Fin-s, a web application designed to help users visualize their 
              depts and expenses, and plan their way towards financial autonamy. 
              Users could enter general information about their finances and see
              a chart of how their deficits were changing over time. Adjustable
              settings allowed the user to see how changes in their payment 
              plan would effect the timeframe of their debt. Using their account, 
              users could revisit the site and see the change as it happened 
              over time.<br/>
              <br/>
              The project allowed me my first opportunity to work as part of a 
              development team. For my part, I learned a substantial amount about 
              effective strategies for working in teams, including methods for 
              pair programming, version control, and workload delineation.<br/>
              <br/>
              In two weeks we were able to build our product using PostgreSQL, 
              Express, React, and NodeJS, as well as the following additional 
              technologies, amoung others:<br/>
              <br/>
              <a href='https://fullcalendar.io/'>fullcalendar</a>:<br/>
              A library that allowed us to quickly integrate a calendar view 
              with a suite of useful customization options.<br/>
              <br/>
              <a href='http://momentjs.com/docs/'>Moment.js</a>:<br/>
              A toolset that simplifies interaction with Javascripts Date 
              object and integrates with fullcalendar.<br/>
              <br/>
              <a href='https://www.chartjs.org/'>Chart.js</a>:<br/>
              A library of chart building functions with many seperate 
              chart types, easy to build, and easy to inegrate with animations.<br/>
              <br/>
              <a href='https://www.mongodb.com/'>MongoDB</a>:<br/>
              A document oriented database service that we used to augment our 
              information storage to more easily interact with fullcalendar and 
              ChartJS.<br/>
              <br/>
              As of this writing(Jun 11th, 2019) the project is technically 
              unfinished, but within the next several days it will be completed 
              and hosted, and I'll update this page with a link to the live site. <br/>
              <br/>
              The repo:<a href='https://github.com/fin-s/fin-s'>https://github.com/fin-s/fin-s</a>
            </p>
          </div>
        </div>
        <div className='project-wrap dashed-border'>
          <h3>Dijkstra's Algorithm</h3>
          <div className='project-image-container'>
            <img src='https://i.imgur.com/yU1vqTu.png' alt='dijkstra hex grid' />
          </div>
          <div className='project-description'>
            <p>
              While Dev Mountain teaches a lot, in 13 weeks there just isn't 
              enough time to get into the nitty-gritty of computer science 
              topics like algorithms, so in an attempt to further my own 
              education on some common algorithms and how they can be used,
              I started this project to learn how to implement Dijkstra's 
              Algorithm in Javascript. <br/>
              <br/>
              The initial impetus for the project, harkening back to my 
              hobbies, came from me wondering how a program can be taught to 
              find a path across a grid of hexagons, and whether there were 
              already defined methods to do so. A short bit of reasearch later, 
              lo and behold there are many such methods, and after refining 
              the definition of what I wanted to do, I settled on Dijkstra.
            </p>
          </div>
        </div>
      </section>
      <section className='display-section'>
        <h4>contact:{String.fromCharCode(0x223d)}</h4>
        <div className='contact-wrap dashed-border'>
          <p>
            email:<br/>
            linked-in:<br/>
            git-hub:<br/>
          </p>
          <p>
            <a href='mailto:dillonokelle@gmail.com' target='_blank' rel='noopener noreferrer'>dillonokelley@gmail.com</a><br/>
            <a href='https://www.linkedin.com/in/dillonokelley/'>linkedin.com/in/dillonokelley/</a><br/>
            <a href='https://github.com/Dilron'>github.com/Dilron</a><br/>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
