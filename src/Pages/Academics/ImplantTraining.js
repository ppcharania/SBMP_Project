import React from 'react'
import SideNav from './SideNav'
const ImplantTraining = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4  style={{paddingTop:'10px'}}>Implant Training</h4>
        <hr type="solid"></hr>
      </div>
    </div>


  )
}

export default ImplantTraining