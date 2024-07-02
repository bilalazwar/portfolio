// shortcut rfc
// import React from 'react'
import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader'
import '../style/home.css'
import Bilal from'../images/roundImage.png'
import Linkedin from'../images/linkedin.png'
import Github from'../images/github.png'
import Medium from'../images/medium.png'
import P1Home from  '../images/p1-2.png'
import P2MernStack from  '../images/MernStack.png'
import P3Hameedia from  '../images/Hameedias.png'

import Copyright from  '../images/copyright.png'
import Facebook from  '../images/facebook.png'
import X from  '../images/x.png'
import PhoneCall from  '../images/phonecall.png'
import Email from  '../images/email.png'


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
                  <label id='btnContactMe' onClick={() => {
                      const element = document.getElementById("contactMe");
                      element.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Contact Me</label>
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
            <div className='picture'>
              <img src={P1Home} alt="craft-of-ceylon Home page"/>
            </div>
            <div className='projectDescription'>
              <div className='lineOne'>
                <h3 className='projectHeading'>Crafts Of Ceylon</h3>
                <p><span>SpringBoot</span><span>MySQL</span><span>React</span><span>RestAPIs</span><span>MicroService</span></p>
              </div>
              <div className='projectAbout'>
                <p>E-commerce platform facilitating online sales of Sri Lankan crafts, To empower local artisans and connect them with global customers.</p>
              </div>
            </div>
          </div>

          <div className='project projectTwo'>
            <div className='picture'>
              <img src={P2MernStack} alt="Flavourites home page"/>
            </div>
            <div className='projectDescription'>
              <div className='lineOne'>
                <h3 className='projectHeading'>Flavourites</h3>
                <p><span>MERN Stack</span></p>
              </div>
              <div>
                {/* <p className='projectAbout'>I helped build the backend of a web application where anyone can share their favorite recipes! This involved using Node.js, Express.js, and 
                   MySQL to create a robust system </p> */}
                <p className='projectAbout'>Collaborated on Backend Development for Recipe Sharing Platform. utilized using Node.js, Express.js, and MongoDB to build a robust backend and ensuring security.</p>
              </div>
            </div>
          </div>

          <div className='project projectThree'>
            <div className='picture'>
              <img src={P3Hameedia} alt="Hameedias"/>
            </div>
            <div className='projectDescription'>
              <div className='lineOne'>
                <h3 className='projectHeading'>Hameedia Apparel Production System</h3>
                <p><span>Software Design Documentation(SDD)</span></p>
              </div>
              <div>
                <p className='projectAbout'>A Software Design Document created based on several visits to their workplace, which includes all necessary diagrams like class diagrams, 
                   user interface, use case diagram, ER diagram, sequence diagrams along with the proposed application's interface designs.</p>
              </div>
            </div>
          </div>
          {/* put a read more button like when click to be redirected */}

      </div>

      </section>



      {/* <section className='familiarTechnologies'>
      </section> */}


      <section className='contactMe' id='contactMe'>
        
        <div className='contactMeLinks'>
          <h1 className='subHeading'>Contact Me</h1>
            <div className='emailAndPhone'>
              <h4>Let's Work Together</h4>
              <p> I'm eager to collaborate & contribute my skills to exciting projects. Feel free to reach out using the contact information given below to discuss potential opportunities or simply connect!!</p>
              <li><img src={Email} alt="Email"/> <a href="mailto:bilalazwar@gmail.com">bilalazwar@gmail.com</a></li>
              <li><img src={PhoneCall} alt="Phone-Number"/> <a href="tel:+94725946410">0725946410</a></li>
            </div>
            <div className='socialMediaLinks'>
              <a href='https://web.facebook.com/people/Bilal-Azwar/pfbid025F77ZMuHnLJcmFxyxPez2pJF27N2L3zuV1i4cxEQbSGyGj4ZeDZmwREWe4YiNLXml/' target="_blank" title='Linkedin' rel="noopener noreferrer"><img src={Facebook} alt="Facebook"/></a>
              <a href='https://www.linkedin.com/in/bilal-azwar/' target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin"/></a>
              <a href='https://x.com/BilalAzwar2004' target="_blank" rel="noopener noreferrer"><img src={X} alt="X"/></a>
              <a href='https://github.com/bilalazwar' target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github"/></a> 
            </div>
        </div>
        <div className='contactMeForm'>
          <div className='contactMeFirstLine'>
            <input type='text' placeholder='Enter Your Name'/>
            <input type='email'placeholder='Enter Your Email'/>
          </div>
          <input type='text' placeholder='Enter Your Subject'/>
          <textarea  placeholder='Enter Your Message'id='FormDescription'/>
          <button id='submitButton'>Submit</button>
        </div>
        
      </section>

      <footer>
        <p>Copyright <img src={Copyright} alt='copyright'/> 2024 Bilal Azwar. All rights Reserved</p>
      </footer>



    </div>
  )
}
//making changes

// npm run build
// npm run deploy