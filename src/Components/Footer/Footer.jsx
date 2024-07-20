import React from 'react'
import './Footer.css'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {

  return (
    
    <div className="footer">

      <div className="footer-top">

        <div className="footer-top-left">

          <div className="footer-logo"> REMYA     </div>

          <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>

        </div> 

        <div className="footer-top-right">

          <h2>Social Media</h2>

          <div className="media-icons">

              <a href="https://linkedin.com/in/remya-m-45a549152/" target="_blank"><FaLinkedin /></a>

              <a href="https://github.com/remya0804" target="_blank"><FaGithub /></a>


          </div>

        </div>

      </div>

      <hr />

      <p className='copy-right'>© Copyright 2024 . Made by Remya</p>


    </div>
  )
}

export default Footer