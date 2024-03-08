import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from'../images/avatar1.jpeg'

import '../style/homeheader.css'

export default function HomeHeader() {

  const [isMenuClick,setMenuClick] = useState(false);

  const handleMenuClick = () =>{
    setMenuClick(!isMenuClick);
  }

  return (
    <div className='fullHomeHeader'>

        <div className='leftNav'>
            <img id='avatarRound' src={Avatar} alt="Profile pic"/>
            <h3>Mr.Bilal</h3>
        </div>
        <div className={isMenuClick ? 'rightNavDisplay' : 'rightNav'}>
            <NavLink>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>PROJECTS</NavLink>
            <NavLink>RESUME</NavLink>
            <NavLink>BLOG</NavLink>
            <NavLink>CONTACT</NavLink>
        </div>
        <div className='btnMenu' onClick={handleMenuClick}>
          <div className='line' id={isMenuClick ? 'line1' : 'x'}></div>
          <div className='line' id={isMenuClick ? 'line2' : 'z'}></div>
          <div className='line' id={isMenuClick ? 'line3' : 'y'}></div>
        </div>
    </div>
  )
}