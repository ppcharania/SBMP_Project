import React from 'react'
import SideNav from './SideNav'
const VissionMission = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Vission and Mission</h4>
        <hr type="solid"></hr>
        
        <b>Vision</b>
        <p>To be a centre of excellence that encourages lucrative businesses by providing platform for entrepreneurship and incubating research mindset for development of society</p>
        
        <b>Mission</b>
        <ol>
          <li>To build a positive space to incubate and support innovative ideas to promote employment</li>
          <li>To create an entrepreneurship opportunities promoting employment  creation and wealth for all aspiring entrepreneurs including students and faculties</li>
          <li>To provide necessary  support and facilities for startup and to promote technical ventures</li>
        </ol>
        
        <b>Objectives</b>
        <ol>
          <li>To nurture culture of transformation by creative ideas</li>
          <li>To build a dynamic startup ecosystem by initiating a network between academia and industries</li>
          <li>To create sustainable revenue generating business model by sharing the facilities</li>
          <li>To create awareness among stakeholders by conducting seminars and workshop</li>
        </ol>

      </div>
    </div>


  )
}

export default VissionMission