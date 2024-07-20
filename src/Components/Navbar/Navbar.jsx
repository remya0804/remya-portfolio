import React, { useContext, useState } from 'react'
import './Navbar.css'

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import {Link} from 'react-router-dom'
import { myContext } from '../../assets/Context/Context';

import { HashLink } from 'react-router-hash-link';



const Navbar = () => {

 const {activeMenu,setActiveMenu} = useContext(myContext);

  const [menu,setMenu] =useState(false);

 

  return (
    
    <div className="navbar">    

      <HashLink className='ancchor' to='/remya-portfolio/#home' offset={50}>

        <div className="navbar-logo"> REMYA     </div>

      </HashLink>

      {
        menu 

        ? <IoMdClose onClick={() => setMenu(!menu)} className='menu-icon'/>

        : <IoMdMenu onClick={() => setMenu(!menu)} className='menu-icon'/>
      }

      <ul className={menu ? "side-menu" : "navbar-menu"} onClick={() => setMenu(false)}>

        <HashLink className='ancchor' to='/remya-portfolio/#home'  >
          
          <li className={activeMenu==='Home' ? 'active' : ""} onClick={() => setActiveMenu("Home")}>Home</li>
        
        </HashLink>

        <HashLink className='ancchor' to='/remya-portfolio/#about' offset={50}>
          
          <li className={activeMenu==='About' ? 'active' : ""} onClick={() => setActiveMenu("About")}>About</li>
          
        </HashLink>

        <HashLink className='ancchor' to='/remya-portfolio/#projects' offset={50}>
          
          <li className={activeMenu==='Projects' ? 'active' : ""} onClick={() => setActiveMenu("Projects")}>Projects</li>
          
        </HashLink>

        <HashLink className='ancchor' to='/remya-portfolio/#contact' offset={50}>
          
          <li className={activeMenu==='Contact' ? 'active' : ""} onClick={() => setActiveMenu("Contact")}>Contact</li>
          
        </HashLink>

      </ul>

    </div>
  )
}

export default Navbar