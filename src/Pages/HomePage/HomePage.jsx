import React from 'react'

import './HomePage'
import Hero from '../../Components/Hero/Hero'
import Projects from '../../Components/Projects/Projects'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'



const HomePage = () => {
  return (
      
    <>

        <Hero />

        <About />

        <Projects />

        <Contact />

    
    
    </>
  )
}

export default HomePage