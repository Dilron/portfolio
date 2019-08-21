import React from 'react';
import DijkstraProject from './Components/DijkstraProject'
import About from './Components/About'
import Skills from './Components/Skills'
import FinS from './Components/FinS'
import PrintRadicals from './Components/PrintRadicals';
import TITracker from './Components/TITracker';
import Contact from './Components/Contact';
import './App.scss';

function App() {

  const scrollHandler = (e) => {
    const ele = document.getElementById(e)
    console.log(e)
    ele.scrollIntoView({ block: "start", inline: "nearest", behavior: 'smooth' })
  }

  return (
    <div className="App">
      <header id='about' className='name-header'>
        <h1>Dillon O'Kelley</h1>
        <h2>Web Developer...{String.fromCharCode(0x258b)} </h2>
      </header>
      <div className='content'>
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
        <section>
          <About />
          <Skills />
          <section id='projects' className='display-section'>
            <h4>my-projects:{String.fromCharCode(0x223d)}</h4>
            <FinS />
            <DijkstraProject />
            <PrintRadicals />
            <TITracker />
          </section>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

//project jsx template
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