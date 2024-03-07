import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style/homeheader.css'

export default function HomeHeader() {
  return (
    <div className='fullHomeHeader'>

        <div className='leftNav'>
            <h3>boll Bilal Azwar</h3>
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