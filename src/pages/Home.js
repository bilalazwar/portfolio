// shortcut rfc
// import React from 'react'
import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader'
import '../style/home.css'
import Bilal from'../images/roundImage.png'


export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <div>
      <HomeHeader/>
      <section className='landingContent'>
      
        <div className='profile'>
          <img id='roundImage' src={Bilal} alt="Profile pic"/>
        </div>
        
        <div className='introductory'>
            <div className='call'>
                <p id='hi'>Hi, I am</p>
                <h1 id='name'>Bilal Azwar</h1>
                <p id='position'>Software Engineer</p>
                <p id='description'>I code to turn simple things to reality and love what I do.</p>
                {/* <h5>{windowWidth}</h5> */}

                <div className='btn'>
                  <label id='btnDownloadCv'>Download CV</label>
                  <label id='btnContactMe'>Contact Me</label>
                </div>

            </div>
          </div>
          <div className='turnLine'>
              <div id="horizontalLine"></div>
          </div>

      </section>
    </div>
  )
}
//making changes

// npm run build
// npm run deploy