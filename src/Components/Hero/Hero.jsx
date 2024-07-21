import React from 'react'
import './Hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import bg from '../../assets/bg.mp4'
import purple from '../../assets/purple1.png'

import { FaChevronCircleDown } from "react-icons/fa";

const Hero = () => {
  return (
    
    <div className="hero" >

      <div className="offset" id='home'></div>

      <video autoPlay loop muted className='bg-video'>

        <source src={bg} type='video/mp4'/>

      </video>

      <div className="hero-sections">

        <div className="hero-sections-left">

          <h1>HEY, I'M <span>REMYA</span></h1>
          
          <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>

          <div className="hero-contact">

              <AnchorLink className='ancchor' href='#contact' offset={50}>
              
                <div className="contact">Contact</div>

              </AnchorLink>

              <AnchorLink className='ancchor' href='#projects' offset={50}>

                  <div className="resume">Projects</div>


              </AnchorLink>

              
          </div>



        </div>

        <div className="hero-sections-right">

          <img src={purple} alt="" />
        </div>

      </div>

      {/* <FaChevronCircleDown className='down-arrow' /> */}



        {/* <hr /> */}
    </div>
  )
}

export default Hero