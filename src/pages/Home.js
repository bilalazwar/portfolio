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
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
                <p id='position'>BSc (Hons) Computing undergraduate</p>
                <p id='description'>I love crafting clean code that solves real-world problems.</p>
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

      <section className='about'>

        <div className='container'>
          <h5 className='subHeadingDesc'>Get To Know More</h5>
          <h1 className='subHeading'>About Me</h1>
        </div>
        <div className='container'>
            <p>A passionate individual eager to learn and contribute as an intern!
            fascinated by new technologies and thrive in collaborative environments, 
            always seeking the best solutions alongside a strong team. Let's connect and see how I can help your team succeed!</p>
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

      <section className='recentProjects'>

      <div className='container'>
          <div className='headingContainer'>
            <h5 className='subHeadingDesc'>Browse My Recent</h5>
            <h1 className='subHeading'>Projects</h1>
          </div>

          <div className='project projectOne'>
            <div className='projectFirstLine'>
              <h3>Crafts Of Ceylon</h3>
              <h5><span>Spring Boot</span><span>MySQL</span><span>React</span><span>RestAPIs</span><span>MicroService</span></h5>
            </div>
            <p>E-commerce platform facilitating online sales of Sri Lankan crafts, To empower local artisans and connect them with global customers.</p>
          </div>

          <div className='project projectTwo'>
            <div className='projectFirstLine'>
              <h3>Car Wash Back-End</h3>
              <h5><span>MERN-Stack</span></h5>
            </div>
          </div>

          <div className='project projectThree'>
            <h3>Hameedia Apparel Production </h3>
          </div>
      </div>
        
      </section>

      <section className='familiarTechnologies'>
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