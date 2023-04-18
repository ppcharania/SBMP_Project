import React from 'react'
import SideNav from './SideNav'
import './NoCarousel.css'
import NBA from '../../Assets/AboutUs/NBA.pdf'

const MandatoryDisclosure = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4 style={{paddingTop:'10px'}}>Mandatory Disclosure 2022-23</h4>
        <hr class="solid"></hr>

        <ul>
          <li>NBA-Mandatory Disclosure Document (2022-2023)</li>
          <a href={NBA}>Click Here</a>
        </ul>

      </div>
    </div>

  )
}

export default MandatoryDisclosure