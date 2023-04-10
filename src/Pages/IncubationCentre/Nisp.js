import React from 'react'
import SideNav from './SideNav'
import NISP from '../../Assets/IC/NISP.pdf'

const Nisp = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>National Innovation Startup Policy</h4>
        <hr type="solid"></hr>
        
        <b>NISP document of Ministry of Education’s Innovation Cell</b><br></br>
        <a href= {NISP}>Click Here</a>

      </div>
    </div>


  )
}

export default Nisp