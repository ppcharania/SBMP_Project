import React from 'react'
import SideNav from './SideNav'
const Associations = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Association</h4>
        <hr type="solide"></hr>

        <b>Association with Government /National/ International professional bodies</b><br></br>
        <br></br>
        <b><u>Central/State Govt. and Agencies</u></b>
        <ul>
          <li>All India council for Technical Education (AICTE)</li>
          <li>Directorate of Technical Education Maharashtra State (DTE)</li>
          <li>Maharashtra State Board of Technical Education (MSBTE)</li>
          <li>Vocational Board Maharashtra State</li>
          <li>Institution of Engineer (India)</li>
          <li>Indian Society of Technical Education</li>
          <li>Computer Society of India</li>
          <li>Indian Society for Manufacturing Engineering</li>
          <li>ISHARE, IE, IETE, IEEE, AIAET, ISME, BPC, NCQM, ISTD</li>
        </ul>
      </div>
    </div>
  )
}

export default Associations