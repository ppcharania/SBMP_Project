import React from 'react'
import SideNav from './SideNav'
const Administration = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'30%', paddingLeft:'10px'}}> 
        <h1>Administration</h1>
        
      </div>
    </div>


  )
}

export default Administration