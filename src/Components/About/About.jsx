import React from 'react'
import './About.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'


const About = () => {
  return (

    <div className="about" id='about'>

        <h1>About Me</h1>

        <hr />

        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

        <div className="about-sections">

            <div className="about-sections-left">          

                    <h2>Get to know me!</h2>

                    <div className="about-left-para">

                        <p>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>

                        <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>

                    </div>

                    <AnchorLink className='ancchor' href='#contact' offset={50}>

                        <button>Contact Me</button>


                    </AnchorLink>

                    
                

            </div>

            <div className="about-sections-right">

                <h2>My Skills</h2>

                <div className="skillset">

                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>GIT</p>
                    <p>Github</p>
                    <p>Responsive Design</p>
                    
                </div>
            </div>
        </div>

        <hr className="hr" />


    </div>
    
    
  )
}

export default About