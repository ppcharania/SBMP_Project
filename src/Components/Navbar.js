import React from 'react'
import './Navbar.css'

import { Link } from "react-router-dom";
import { Button } from '@mui/material';
const Navbar = () => {
  
  return (
    <div className="navbar">
        <div className='subnav'><button class="subnavbtn"><Link to='/aboutus'>About Us<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content about">
            <Link to="/aboutsvkm">About SVKM</Link>
            <Link to="/aboutsbmp">About SBMP</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/admissions'>Admissions<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/admissions">Admission Details</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/academics'>Academics<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/diplomaaided">Diploma (Aided)</Link>
            <Link to="/diplomaunaided">Diploma (Unaided)</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/departments'>Departments<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/civilengg">Civil Engineerng</Link>
            <Link to="/mechanicalengg">Mechanical Engineerng</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/students'>Students<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/examination">Examination</Link>
            <Link to="/studsupport">Student Support</Link>
          </div>
        </div>
  
        <div className='subnav'><button class="subnavbtn"><Link to='/notices'>Notices<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/staffnotices">Staff Notices</Link>
            <Link to="/studnotices">Student Notices</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/cdtp'>CDTP<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/overview">Overview</Link>
          </div>
        </div>
       
        <div className='subnav'><button class="subnavbtn"><Link to='/careers'>Careers<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/applyonline">Apply Online</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/associationsandevents'>Associations/Events<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/associations">Associations</Link>
            <Link to="/events">Events</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/alumini'>Alumini<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/aamc">Alumini Association Managing Committee</Link>
            <Link to="/activitycalendar">Activity Calendar</Link>
          </div>
        </div>

        <div className='subnav'><button class="subnavbtn"><Link to='/incubationcentre'>Incubation Centre<i class="fa fa-caret-down"></i></Link></button>
          <div class="subnav-content">
            <Link to="/abtus">About Us</Link>
            <Link to="/vissionmission">Vission and Mission</Link>
          </div>
        </div>

        
        
      
    </div>
  )
}

export default Navbar