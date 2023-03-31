import React from 'react'
import SideNav from './SideNav'
const CivilEngineering = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'30%', paddingLeft:'10px'}}> 
        <h1>Civil Engineering</h1>
        
      </div>
    </div>
  )
}

export default CivilEngineering