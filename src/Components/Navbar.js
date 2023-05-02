import React from 'react'
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
const Navbar = () => {
    const {pathname} = useLocation()


  return (
    <div classNameName="navbar">
        <div className={
            `${pathname === '/' ? 
                'nav-header-primary' : 'nav-header-secondary'
            }`
        }>
                <div className="container">
                    

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul style={{listStyleType:"none"}}>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/aboutus' style={{textDecoration:"none"}}><b>About Us</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/aboutsvkm" style={{textDecoration:"none"}}>About SVKM</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/aboutsbmp" style={{textDecoration:"none"}}>About SBMP</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/mandisclosure" style={{textDecoration:"none"}}>Mandatory Disclosure 2022-23</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/infrastructure" style={{textDecoration:"none"}}>Infrastructure</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/administration" style={{textDecoration:"none"}}>Administration</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/eoa" style={{textDecoration:"none"}}>Extension of Approval (EoA)</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>

                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/admissions' style={{textDecoration:"none"}}><b>Admissions</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/admissions" style={{textDecoration:"none"}}>Admission Details</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>

                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/academics' style={{textDecoration:"none"}}><b>Academics</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/diplomaaided" style={{textDecoration:"none"}}>Diploma (Aided)</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/diplomaunaided" style={{textDecoration:"none"}}>Diploma (Unaided)</Link> 
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/implanttraining" style={{textDecoration:"none"}}>Implant Training</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/feestructure" style={{textDecoration:"none"}}>Fee Structure</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/timetable" style={{textDecoration:"none"}}>Time Table</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/departments' style={{textDecoration:"none"}}><b>Departments</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/civilengg" style={{textDecoration:"none"}}>Civil Engineering</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/mechanicalengg" style={{textDecoration:"none"}}>Mechanical Engineering</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/electricalengg" style={{textDecoration:"none"}}>Electrical Engineering</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/industrialelec" style={{textDecoration:"none"}}>Industrial Electronics</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/plasticengg" style={{textDecoration:"none"}}>Plastic Engineering</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/chemicalengg" style={{textDecoration:"none"}}>Chemical Engineering</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/digitalelec" style={{textDecoration:"none"}}>Digital Electronics</Link> 
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/computerengg" style={{textDecoration:"none"}}>Computer Engineering</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/informationtech" style={{textDecoration:"none"}}>Information Technology</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/electronicstelecom" style={{textDecoration:"none"}}>Electronics and Telecommunication</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/students' style={{textDecoration:"none"}}><b>Students</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/examination" style={{textDecoration:"none"}}>Examination</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/studsupport" style={{textDecoration:"none"}}>Student Support</Link> 
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/association" style={{textDecoration:"none"}}>Associations</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/committee" style={{textDecoration:"none"}}>Committee</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/placementcell" style={{textDecoration:"none"}}>Placement Cell</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/feedback" style={{textDecoration:"none"}}>AICTE 360 Feedback Link</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/cdtp' style={{textDecoration:"none"}}><b>CDTP</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/overview" style={{textDecoration:"none"}}>Overview</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/careers' style={{textDecoration:"none"}}><b>Careers</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/applyonline" style={{textDecoration:"none"}}>Apply Online</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/associationsandevents' style={{textDecoration:"none"}}><b>Associations/Events</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/associations" style={{textDecoration:"none"}}>Associations</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/events" style={{textDecoration:"none"}}>Events</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/notices' style={{textDecoration:"none"}}><b>Notices</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/staffnotices" style={{textDecoration:"none"}}>Staff Notices</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/studnotices" style={{textDecoration:"none"}}>Student Notices</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/cumulativeatt" style={{textDecoration:"none"}}>Cumulative Attendance</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/alumini' style={{textDecoration:"none"}}><b>Alumini</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/aamc" style={{textDecoration:"none"}}>Alumini Association Manging Committee</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/activitycalendar" style={{textDecoration:"none"}}>Activity Calendar</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/success" style={{textDecoration:"none"}}>Alumini Success Story</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/registered" style={{textDecoration:"none"}}>Registered Alumini</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/subcom" style={{textDecoration:"none"}}>Alumini Sub Committee</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/newslet" style={{textDecoration:"none"}}>Alumini News Letter</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/booklet" style={{textDecoration:"none"}}>Alumini Booklet</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/multitech" style={{textDecoration:"none"}}>MultiTech Event 2020</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className={'nav-link' +
                                    ` ${pathname === '/' ? 'n-link-primary' : 'n-link-secondary'}`} >
                                    <Link to='/incubationcentre' style={{textDecoration:"none"}}><b>Incubation Centre</b><i className="fas fa-caret-down"></i></Link>
                                    <div className="dropdown LastDrop">
                                        <ul style={{listStyleType:"none"}}>
                                            <li className="dropdown-link" >
                                                <Link to="/abtus" style={{textDecoration:"none"}}>About Us</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/vissionmission" style={{textDecoration:"none"}}>Vission and Mission</Link>    
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/managingteam" style={{textDecoration:"none"}}>Core Managaing Team</Link>         
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/mentors" style={{textDecoration:"none"}}>Mentors</Link>    
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/nisp" style={{textDecoration:"none"}}>National Innovation Startup Policy</Link>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/msisp" style={{textDecoration:"none"}}>Maharashtra State Innovation Startup Policy</Link> 
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/contactus" style={{textDecoration:"none"}}>Contact Us</Link>   
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/howtoapply" style={{textDecoration:"none"}}>How to Apply</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
                
            </div>
    
      
    </div>
  )
}

export default Navbar