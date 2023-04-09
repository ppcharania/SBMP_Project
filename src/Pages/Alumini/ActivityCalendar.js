import React from 'react'
import SideNav from './SideNav'
const ActivityCalendar = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'30%', paddingLeft:'10px'}}> 
        <h1>Activity Calendar</h1>
        
      </div>
    </div>


  )
}

export default ActivityCalendar