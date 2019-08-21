import React from 'react'

export default function TITracker(){
    return(
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
            that burden a bit.<br />
              <br />
              At its core the functionality of this project is relatively simple,
              but it remains one of my prouder achievements even after finishing
              other more complex projects. It’s certainly not perfect, even the day
              I finished and turned it in, I was already learning from mistakes I
              made coding it. But when I look back on it, what strikes me is that
              when I started the program, I didn’t know anything about any
              of the technologies I used. In three weeks I had already
            learned enough to design and build this app in three days.<br />
              <br />
              The repo:<br />
              <a href='https://github.com/Dilron/TI-Tracker-no-db'>https://github.com/Dilron/TI-Tracker-no-db</a>
            </p>
          </div>
        </div>
    )
}