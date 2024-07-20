import React from 'react'
import './Projects.css'

import { projectList } from '../../assets/assets';

import {Link} from 'react-router-dom';


const Projects = () => {
  return (
    
    <div className="projects" id='projects'>

        <h1>Projects</h1>
        <hr />

        <p>Here you will find some of the personal  projects that I created</p>

        <div className="projects-container">

            {

                projectList.map((p,idx) => {

                    return <Link className='link'  to={`/remya-portfolio/${p.projectNO}/${p.projectName}`}  key={idx}>
                    
                           <div  className="project">


                                    <img  src={p.projectImg} alt="" />

                                    <h2>{p.projectName}</h2>
                                

                            </div>

                       </Link>

                    
                })


            }


        </div>

        <hr className="hr" />
    </div>
  )
}

export default Projects