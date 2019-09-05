import React from 'react'

export default function PrintRadicals(){
    return(
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
            between those users.<br />
              <br />
              On the site, users can browse completed print jobs and posted print requests,
              and create an account to post their own requests or make bids on other users
              requests to fulfill if they own a printer that can meet the specifications of the
              request. When a client user receives a bid, they can review it from their dashboard
              and decide whether to decline or accept and pay the submitted cost, which I handled
              using Stripe. Once the payment was processed, the information from the client user
              and the seller user is processed into an order which both users can track from the site.
              The seller has controls that update the status of the order to inform the client and
            once the print is complete they can make a post about the finished product. <br />
              <br />
              In addition to the PostgreSQL, Express, React, Node stack we had learned so far,
            I used these additional technologies add functionality:<br />
              <br />
              <a href='https://stripe.com/'>Stripe</a>:<br />
              Stripe is a library that I use in this project to safely handle user payment
              information with having to build out the security features myself. Although the
              service is relatively easy to integrate, in order to use the full functionality
              that I want I need to have a business with documentation that I am otherwise
            unable to provide. <br />
              <br />
              <a href='https://www.npmjs.com/package/react-responsive-carousel'>react-responsive-carousel</a>:<br />
              react-responsive-carousel is a library that offers an auto-scrolling carousel
              for images or other elements that is quick to integrate and customize. In
              future projects if I need a carousel I will likely build the functionality
            myself, but the speed with which I could integrate this was very handy.<br />
              <br />
              Because the payment functionality isn't complete, I won't be hosting the
              project unless I have time to go back and finish that aspect of it. For now,
            here's the repo:<br />
              <br />
              <a href='https://github.com/Dilron/fullstack-app'>https://github.com/Dilron/fullstack-app</a>
            </p>
          </div>
        </div>
    )
}