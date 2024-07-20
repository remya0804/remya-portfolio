import React, { useContext, useEffect } from 'react'
import './ProjectPage.css'
import { useParams } from 'react-router-dom'
import { projectList } from '../../assets/assets';


const ProjectPage = () => {

  const {projectName,projectNO} = useParams();

  const pnumber = Number(projectNO)-1;

  return (

    <div className="projectPage">

      <h1>{projectName}</h1>

      <hr />

      <img src={projectList[pnumber].projectImg} alt="" />

      <p>{projectList[pnumber].projectDescription}</p>

      <a href="https://remya0804.github.io/frontend-youtube-clone/" target='_blank'><button>Project Link</button></a>

    </div>
  )
}

export default ProjectPage