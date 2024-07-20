import React from 'react'
import './Hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    
    <div className="hero" >

      <div className="offset" id='home'></div>

        <h1>HEY, I'M <span>REMYA</span></h1>
        
        <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>

        <div className="hero-contact">

            <AnchorLink className='ancchor' href='#contact' offset={50}>
            
              <div className="contact">Contact Me</div>

            </AnchorLink>

            <AnchorLink className='ancchor' href='#projects' offset={50}>

                 <div className="resume">Projects</div>


            </AnchorLink>

            
        </div>

        <hr />
    </div>
  )
}

export default Hero