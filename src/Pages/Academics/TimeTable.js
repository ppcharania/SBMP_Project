import React from 'react'
import SideNav from './SideNav'
const TimeTable = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Time Table</h4>
        <hr type="Slide"></hr>
        
      </div>
    </div>


  )
}

export default TimeTable