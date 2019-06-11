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
        <p>
            Outside of my work life, my activities focus around my family, 
          my friends, and my hobbies. Spending time with those close to me 
          most commonly involves good food and , I'll be engaged in the latter. 
        </p>
      </section>
      <section className='skills display-section'>
        <h4>skills:{String.fromCharCode(0x223d)}</h4>
        <div className='skills-wrap'>
          <p>
            technology-language:<br/>
            technology-language:<br/>
            technology-language:<br/>
            technology-language:<br/>
            technology-library:<br/>
            technology-library:<br/>
            technology-library:<br/>
            technology-runtime-env:<br/>
            technology-framework:<br/>
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
          </p>
        </div>
      </section>
      <section className='display-section'>
        <h4>projects:{String.fromCharCode(0x223d)}</h4>
        <p></p>
      </section>
      <section className='display-section'>
        <h4>contact:{String.fromCharCode(0x223d)}</h4>
        <div className='contact-wrap'>
          <p>
            email:<br/>
            linked-in:<br/>
            git-hub:<br/>
          </p>
          <p>
            dillonokelley@gmail.com<br/>
            <a href='https://www.linkedin.com/in/dillonokelley/'>linkedin.com/in/dillonokelley/</a><br/>
            <a href='https://github.com/Dilron'>github.com/Dilron</a><br/>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
