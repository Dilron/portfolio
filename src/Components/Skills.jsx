import React from 'react'

export default function Skills(){
    return(
        <section id='skills' className='skills display-section'>
        <h4>skills:{String.fromCharCode(0x223d)}</h4>
        <div className='skills-wrap dashed-border'>
          <p>
            technology.language:<br />
            technology.language:<br />
            technology.language:<br />
            technology.language:<br />
            technology.library:<br />
            technology.library:<br />
            technology.library:<br />
            technology.runtime-env:<br />
            technology.framework:<br />
            technology.version-ctrl:<br />
          </p>
          <p>
            <img className='skills-thumbnail' src='https://i.imgur.com/xF7krX0.png' alt='js thumbnail' /> Javascript<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/LP5RZUf.png' alt='html thumbnail' /> HTML 5<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/CblPifK.png' alt='css thumbnail' /> CSS<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/ePwHfE6.png' alt='postgres thumbnail' /> PostgreSQL<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/AXRiLe0.png' alt='react thumbnail' /> React JS<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/hZY5jSW.png' alt='redux thumbnail' /> React Redux<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/XxtdEou.png' alt='sass thumbnail' /> Sass<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/fbg4ejN.png' alt='node thumbnail' /> Node JS<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/808F26L.png' alt='express thumbnail' /> Express<br />
            <img className='skills-thumbnail' src='https://i.imgur.com/VRSYaF1.png' alt='git hub thumbnail' /> Github<br />
          </p>
        </div>
      </section>
    )
}