import React from 'react'
import SideNav from './SideNav'
const ApplyOnline = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Apply Online</h4>
        <hr type="solid"></hr>

        <b>Join Our Team</b><br></br>
        <a href="https://fa-elxu-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_3013/requisitions">Click Here</a>
      </div>
    </div>


  )
}
export default ApplyOnline