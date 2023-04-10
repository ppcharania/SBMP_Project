import React from 'react'
import SideNav from './SideNav'
import MSISP from '../../Assets/IC/MSISP.pdf'
const Msisp = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Maharashtra State Innovation Startup Policy</h4>
        <hr type="solid"></hr>
        
        <b>MSISP document of Ministry of Education’s Innovation Cell</b><br></br>
        <a href= {MSISP}>Click Here</a>
        
      </div>
    </div>


  )
}

export default Msisp