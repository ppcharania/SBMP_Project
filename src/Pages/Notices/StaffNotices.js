import React from 'react'
import SideNav from './SideNav'
import Staff_LeaveRules from '../../Assets/Notices/Staff_LeaveRules.pdf'
import Staff_ServiceRules from '../../Assets/Notices/Staff_ServiceRules.pdf'
import MCSR_Leave from '../../Assets/Notices/MCSR_LeaveRule.pdf'
import MCSR_Vetan from '../../Assets/Notices/MCSR_VetanRule.pdf'
import MCSR_Service from '../../Assets/Notices/MCSR_ServiceRule.pdf'
import HolidayNotice from '../../Assets/Notices/List_Holildays for the Year 2023.pdf'

const StaffNotices = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Staff Notices</h4>
        <hr type="solid"></hr>

        <ul>
          <li>Service Rules for Unaided Staff</li>
          <a href= {Staff_LeaveRules}>Click Here</a>
          <li>Leave Rules Maharashtra Nagari Seva 1989</li>
          <a href= {Staff_ServiceRules}>Click Here</a>
          <li>Maharashtra Civil Services (Leave)</li>
          <a href= {MCSR_Leave}>Click Here</a>
          <li>Maharashtra Civil Services (Service) 1981-4</li>
          <a href= {MCSR_Service}>Click Here</a>
          <li>Maharashtra Civil Services (Vetan) 1981</li>
          <a href= {MCSR_Vetan}>Click Here</a>
          <li>List of Holildays for the Year 2023</li>
          <a href= {HolidayNotice}>Click Here</a>

        </ul>

      </div>
    </div>


  )
}

export default StaffNotices