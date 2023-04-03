import React from 'react'
import './Navbar.css'

import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <div className="navbar">
        <div className='subnav'><div class="subnavbtn"><Link to='/aboutus'>About Us<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content about">
            <Link to="/aboutsvkm">About SVKM</Link>
            <Link to="/aboutsbmp">About SBMP</Link>
            <Link to="/mandisclosure">Mandatory Disclosure 2022-23</Link>
            <Link to="/infrastructure">Infrastructure</Link>
            <Link to="/administration">Administration</Link>
            <Link to="/eoa">Extension of Approval (EoA)</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/admissions'>Admissions<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/admissions">Admission Details</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/academics'>Academics<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/diplomaaided">Diploma (Aided)</Link>
            <Link to="/diplomaunaided">Diploma (Unaided)</Link>
            <Link to="/implanttraining">Implant Training</Link>
            <Link to="/feestructure">Fee Structure</Link>
            <Link to="/timetable">Time Table</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/departments'>Departments<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/civilengg">Civil Engineering</Link>
            <Link to="/mechanicalengg">Mechanical Engineering</Link>
            <Link to="/electricalengg">Electrical Engineering</Link>
            <Link to="/industrialelec">Industrial Electronics</Link>
            <Link to="/plasticengg">Plastic Engineering</Link>
            <Link to="/chemicalengg">Chemical Engineering</Link>
            <Link to="/digitalelec">Digital Electronics</Link>
            <Link to="/computerengg">Computer Engineering</Link>
            <Link to="/informationtech">Information Technology</Link>
            <Link to="/electronicstelecom">Electronics and Telecommunication</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/students'>Students<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/examination">Examination</Link>
            <Link to="/studsupport">Student Support</Link>
            <Link to="/association">Associations</Link>
            <Link to="/committee">Committee</Link>
            <Link to="/placementcell">Placement Cell</Link>
            <Link to="/feedback">AICTE 360 Feedback Link</Link>
          </div>
        </div>
  
        <div className='subnav'><div class="subnavbtn"><Link to='/notices'>Notices<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/staffnotices">Staff Notices</Link>
            <Link to="/studnotices">Student Notices</Link>
            <Link to="/cumulativeatt">Cumulative Attendance</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/cdtp'>CDTP<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/overview">Overview</Link>
          </div>
        </div>
       
        <div className='subnav'><div class="subnavbtn"><Link to='/careers'>Careers<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/applyonline">Apply Online</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/associationsandevents'>Associations/Events<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/associations">Associations</Link>
            <Link to="/events">Events</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/alumini'>Alumini<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/aamc">Alumini Association Managing Committee</Link>
            <Link to="/activitycalendar">Activity Calendar</Link>
          </div>
        </div>

        <div className='subnav'><div class="subnavbtn"><Link to='/incubationcentre'>Incubation Centre<i class="fa fa-caret-down"></i></Link></div>
          <div class="subnav-content">
            <Link to="/abtus">About Us</Link>
            <Link to="/vissionmission">Vission and Mission</Link>  
            <Link to="/managingteam">Core Managaing Team</Link>    
            <Link to="/mentors">Mentors</Link>    
            <Link to="/nisp">National Innovation Startup Policy</Link>
            <Link to="/msisp">Maharashtra State Innovation Startup Policy</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/howtoapply">How to Apply</Link>
          </div>
        </div>

        
        
      
    </div>
  )
}

export default Navbar