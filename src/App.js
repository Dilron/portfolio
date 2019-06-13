import React from 'react';
import './App.scss';

function App() {

  const scrollHandler = (e) => {
    const ele = document.getElementById(e)
    console.log(e)
    ele.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})
  }

  return (
    <div className="App">
      <section className='nav'>
        <h3 onClick={() => scrollHandler('about')} className='hover-links'>About...<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('skills')} className='hover-links'>Skills...<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('projects')} className='hover-links'>Projects...<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('fin-s')} className='hover-links'>{String.fromCharCode(0x223d)}Fin-s<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('dijkstra')} className='hover-links'>{String.fromCharCode(0x223d)}Dijkstra<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('print-radicals')} className='hover-links'>{String.fromCharCode(0x223d)}Print Radicals<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('ti-tracker')} className='hover-links'>{String.fromCharCode(0x223d)}TI Tracker<i>{String.fromCharCode(0x258b)}</i></h3>
        <h3 onClick={() => scrollHandler('contact')} className='hover-links'>Contact...<i>{String.fromCharCode(0x258b)}</i></h3>
      </section>
      <header id='about' className='name-header'>
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
      <section id='skills' className='skills display-section'>
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
      <section id='projects' className='display-section'>
        <h4>my-projects:{String.fromCharCode(0x223d)}</h4>
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
              over time.<br/>
              <br/>
              The project allowed me my first opportunity to work as part of a 
              development team. For my part, I learned a substantial amount about 
              effective strategies for working in teams, including methods for 
              pair programming, version control, and workload delineation.<br/>
              <br/>
              In two weeks we were able to build our product using PostgreSQL, 
              Express, React, and NodeJS, as well as the following additional 
              technologies, among others:<br/>
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
              A library of chart building functions with many separate 
              chart types, easy to build, and easy to integrate with animations.<br/>
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
        <div id='dijkstra' className='project-wrap dashed-border'>
          <h3>Dijkstra's Algorithm</h3>
          <div className='project-image-container'>
            <a href="https://i.imgur.com/yU1vqTu.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/yU1vqTu.png' alt='dijkstra hex grid' /></a>
          </div>
          <div className='project-description'>
            <p>
              While Dev Mountain teaches a lot in 13 weeks, there just isn't 
              enough time to get into the nitty-gritty of computer science 
              topics like algorithms, so in an attempt to further my own 
              education on some common algorithms and how they can be used,
              I started this project to learn how to implement Dijkstra's 
              Algorithm in Javascript. <br/>
              <br/>
              The initial impetus for the project, harkening back to my 
              hobbies, came from me wondering how a program can be taught to 
              find a path across a grid of hexagons, and whether there were 
              already defined methods to do so. A short bit of research later, 
              lo and behold there are many such methods, and after refining 
              the definition of what I wanted to do, I settled on Dijkstra. 
              In practice, Dijkstra's can be applied to a hex grid by mapping 
              the hexes in the same way you would a cubic graph, each hex  
              being a vertex with three identifying coordinates. <br/>
              <br/>
              I won't claim to be an expert on the topic, or even to have 
              a perfect understanding of it, but I'm happy with the implementation 
              I devised using only a medium article and the wikipedia page. 
              My application programmatically generates an array of objects 
              corresponding to vertices(or 'nodes') of the necessary graph, each 
              object containing the nodes coordinates, the cost to traverse it, 
              and identifiers for its neighbors. The function for the algorithm 
              itself takes in the starting hex and the target hex to build a 
              path to. Beginning at the starting hex, the process explores 
              each neighbor, noting what node it came from to reach it and 
              the total cost to get there, adding the unexplored neighbors of that 
              node to the queue of nodes it will explore, until it finds the 
              target hex. From there it builds a list of nodes that make up 
              the path, each pointing to the next in sequence like 
              breadcrumbs, until it creates the complete path from end to 
              start.<br/>
              <br/>
              As of this writing(Jun 12th, 2019) the application is incomplete 
              as I became too busy to finish it while at Dev Mountain. After 
              graduation I plan to revisit and finalize the implementation 
              as well as building a demonstration page to show it in practice. 
              This portfolio page will be updated with a link to the demo when it's 
              complete.<br/>
              <br/>
              My resources:<br/>
              <a href='https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e'>the Medium article</a><br/>
              <a href='https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm'>the Wiki entry</a><br/>
              <br/>
              The repo:<br/>
              <a href='https://github.com/Dilron/dijkstra-project'>https://github.com/Dilron/dijkstra-project</a>
            </p>
          </div>
        </div>
        <div id='print-radicals' className='project-wrap dashed-border'>
          <h3>Print Radicals, a network for 3d printing hobbyists</h3>
          <div className='project-image-container'>
            <a href="https://i.imgur.com/dBXowlz.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/dBXowlz.png' alt='print radicals landing page' /></a>
            <a href="https://i.imgur.com/cc0movD.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/cc0movD.png' alt='print radicals request form' /></a>
          </div>
          <div className='project-image-container'>
            <a href="https://i.imgur.com/HpOsoEm.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/HpOsoEm.png' alt='print radicals mobile landing page' /></a>
            <a href="https://i.imgur.com/pwJcXvg.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/pwJcXvg.png' alt='print radicals mobile orders' /></a>
            <a href="https://i.imgur.com/5Afazac.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/5Afazac.png' alt='print radicals mobile dashboard' /></a>
          </div>
          <div className='project-description'>
            <p>
            Print Radicals is the web application I designed and built as my personal 
            project for Dev Mountain and was the first full stack application I’ve 
            ever built. The concept came from interacting with several friends who’d 
            recently bought 3d printers. Often they’d say they were looking to get more 
            use out of their printer and would offer to print and ship things to friends 
            and only charge for shipping or even entirely for free. I wanted to make a 
            place for users like that to connect with users who wanted something printed 
            but didn’t otherwise have access to a 3d printer, and to facilitate transactions 
            between those users.<br/>
            <br/>
            On the site, users can browse completed print jobs and posted print requests, 
            and create an account to post their own requests or make bids on other users 
            requests to fulfill if they own a printer that can meet the specifications of the 
            request. When a client user receives a bid, they can review it from their dashboard 
            and decide whether to decline or accept and pay the submitted cost, which I handled 
            using Stripe. Once the payment was processed, the information from the client user 
            and the seller user is processed into an order which both users can track from the site. 
            The seller has controls that update the status of the order to inform the client and 
            once the print is complete they can make a post about the finished product. <br/>
            <br/>
            In addition to the PostgreSQL, Express, React, Node stack we had learned so far, 
            I used these additional technologies add functionality:<br/>
            <br/>
            <a href='https://stripe.com/'>Stripe</a>:<br/>
            Stripe is a library that I use in this project to safely handle user payment 
            information with having to build out the security features myself. Although the 
            service is relatively easy to integrate, in order to use the full functionality 
            that I want I need to have a business with documentation that I am otherwise 
            unable to provide. <br/>
            <br/>
            <a href='https://www.npmjs.com/package/react-responsive-carousel'>react-responsive-carousel</a>:<br/>
            react-responsive-carousel is a library that offers an auto-scrolling carousel 
            for images or other elements that is quick to integrate and customize. In 
            future projects if I need a carousel I will likely build the functionality 
            myself, but the speed with which I could integrate this was very handy.<br/>
            <br/>
            Because the payment functionality isn't complete, I won't be hosting the 
            project unless I have time to go back and finish that aspect of it. For now, 
            here's the repo:<br/>
            <br/>
            <a href='https://github.com/Dilron/fullstack-app'>https://github.com/Dilron/fullstack-app</a>
            </p>
          </div>
        </div>
        <div id='ti-tracker' className='project-wrap dashed-border'>
          <h3>TI Tracker, an unofficial tool for Twilight Imperium</h3>
          <div className='project-image-container'>
            <a href="https://i.imgur.com/zynQNX8.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/zynQNX8.png' alt='TI tracker landing page' /></a>
            <a href="https://i.imgur.com/Uq1SahP.png" target='_blank' rel='noopener noreferrer'><img className='project-image' src='https://i.imgur.com/Uq1SahP.png' alt='TI tracker game screen' /></a>
          </div>
          <div className='project-description'>
            <p>
            TI tracker is a tool to help keep track of information in the somewhat 
            complicated board game Twilight Imperium. This was my first project at 
            Dev Mountain and only used, as they called it, ¾ stack,  that being 
            React, Node, and Express, leaving out the database. Some friends and 
            I enjoy playing this game when we have the time but keeping track of 
            everything involved can be daunting even after gaining a thorough 
            understanding of the rules. My aim for this application was to ease 
            that burden a bit.<br/>
            <br/>
            At its core the functionality of this project is relatively simple, 
            but it remains one of my prouder achievements even after finishing 
            other more complex projects. It’s certainly not perfect, even the day 
            I finished and turned it in, I was already learning from mistakes I 
            made coding it. But when I look back on it, what strikes me is that 
            three weeks prior to finishing it, I didn’t know anything about any 
            of the technologies I was using, but in that time I had already learned 
            enough identify and build tools to fill a demand.<br/>
            <br/>
            The repo:<br/>
            <a href='https://github.com/Dilron/TI-Tracker-no-db'>https://github.com/Dilron/TI-Tracker-no-db</a>
            </p>
          </div>
        </div>
        {/* <div className='project-wrap dashed-border'>
          <h3></h3>
          <div className='project-image-container'>
            <img className='project-image' src='' alt='' />
            <img className='project-image' src='' alt='' />
          </div>
          <div className='project-description'>
            <p></p>
          </div>
        </div> */}
      </section>
      <section id='contact' className='display-section'>
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
