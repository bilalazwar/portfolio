import React from 'react'
import HomeHeader from '../components/HomeHeader'
import '../style/project.css'

export default function Project() {
  return (
    <div>
      <HomeHeader/>
      <div className='projectBody'>
        <div className='leftProject'>
          <div className='projectName projectOne'>
            <button>Crafts Of Ceylon</button>
          </div>
          <div className='projectName projectTwo'>
            <button>Flavourites</button>
          </div>
          <div className='projectName projectThree'>
            <button>Hameedia Production Management System</button>
          </div>
          <div className='projectName projectFour'>
            <button>Pet Vaccine</button>
          </div>
          <div className='projectName projectFive'>
            <button>Result Bpt</button>
          </div>
        </div>

        <div className='rightProject'>
          <div className='container'>
            <p>hrgbnrn rieghn g</p>
          </div>
        </div>
      </div>
    </div>
  )
}


// for mobile view display all the project heading on the top and when click display them below
