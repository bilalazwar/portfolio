// shortcut rfc
// import React from 'react'
import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader'
import '../style/home.css'
import Bilal from'../images/roundImage.png'
import Linkedin from'../images/linkedin.png'
import Github from'../images/github.png'
import Medium from'../images/medium.png'


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

                <div id='socialMedia'>

                  <a href="https://www.linkedin.com/in/bilal-azwar/" id='linkedin' ><img src={Linkedin} alt="Linkedin"/></a>
                  <a id='github' href="https://github.com/bilalazwar"><img src={Github} alt="Github"/></a>
                  <a id='medium' href="https://medium.com/@bilalazwar"><img src={Medium} alt="Medium"/></a>

                </div>

            </div>
          </div>
      </section>

      <section className='contactInformation'>
        
        <div className='about'>
              
              <h5 className='subHeadingDesc'>Get To Know More</h5>
              <h1 className='subHeading'>About Me</h1>
        </div>
      </section>

      <section className='education'>
        
        <div className='container'>
          <h1>Education</h1>

          <div className='line'></div>
          <p className='educationHeading'><span className='semiBold'>NIBM - Colombo</span> <span className='year'>2021-2025</span></p>
          <p className='additionalInfo'>- BSc (Hons) in Computing</p>
          <p className='additionalInfo'>- CGPA : 3.8</p>

          <div className='line'></div>
          <p className='educationHeading'><span className='semiBold'>Hejaaz International</span><span className='year'>2015-2021</span></p>
          <p className='additionalInfo'>- GCE Ordinary Level 2020/21</p>
          <p className='additionalInfo'>- Results 4A & 2C</p>

          <div className='line'></div>
          <p className='educationHeading'><span className='semiBold'>Isipathana College</span><span className='year'>2010-2015</span></p>
          <p className='additionalInfo'>- Primary Education</p>

          <div className='line'></div>
        </div>
      </section>

      <section className='familiarTechnologies'>
        
      </section>

      <section className='recentProjects'>

        
      </section>

      <section className='connectWithMeOn'>
        {/* few social media links */}
        
      </section>



    </div>
  )
}
//making changes

// npm run build
// npm run deploy