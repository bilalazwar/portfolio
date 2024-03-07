import React from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from'../images/avatar1.jpeg'

import '../style/homeheader.css'

export default function HomeHeader() {
  return (
    <div className='fullHomeHeader'>

        <div className='leftNav'>
            <img id='avatarRound' src={Avatar} alt="Profile pic"/>
            <h3>Mr.Bilal</h3>
        </div>
        <div className='rightNav'>
            <NavLink>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>PROJECTS</NavLink>
            <NavLink>RESUME</NavLink>
            <NavLink>BLOG</NavLink>
            <NavLink>CONTACT</NavLink>
        </div>
    </div>
  )
}