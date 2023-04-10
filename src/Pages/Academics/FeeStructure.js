import React from 'react'
import SideNav from './SideNav'
const FeeStructure = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Fee Structure</h4>
        <hr type="solid"></hr>
      </div>
    </div>


  )
}

export default FeeStructure