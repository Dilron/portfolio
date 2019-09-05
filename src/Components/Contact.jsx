import React from 'react'

export default function Contact(){
    return(
        <section id='contact' className='display-section'>
        <h4>contact:{String.fromCharCode(0x223d)}</h4>
        <div className='contact-wrap dashed-border'>
          <p>
            email:<br />
            linked-in:<br />
            git-hub:<br />
          </p>
          <p>
            <a href='mailto:dillonokelle@gmail.com' target='_blank' rel='noopener noreferrer'>dillonokelley@gmail.com</a><br />
            <a href='https://www.linkedin.com/in/dillonokelley/'>linkedin.com/in/dillonokelley/</a><br />
            <a href='https://github.com/Dilron'>github.com/Dilron</a><br />
          </p>
        </div>
      </section>
    )
}