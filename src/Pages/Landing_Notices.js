import React from 'react'
import BG from '../Assets/BG_Landing_Notice.png'
import Box from '@mui/material/Box'
import Carousel from 'react-bootstrap/Carousel';
import './Landing_Notices.css'
import SVKMMM from '../Assets/SVKM_MasterMind.pdf'
import NBA1 from '../Assets/NBA1.pdf'
import NBA2 from '../Assets/NBA2.pdf'
import NBA3 from '../Assets/NBA3.pdf'
import NBA4 from '../Assets/NBA4.pdf'
import Att1 from '../Assets/Att1.pdf'
import Att2 from '../Assets/Att2.pdf'
import SS1 from '../Assets/SS1.pdf'
import SS2 from '../Assets/SS2.pdf'
import SS3 from '../Assets/SS3.pdf'
import SS4 from '../Assets/SS4.pdf'
import AC from '../Assets/AC.pdf'
import TT from '../Assets/TT.pdf'
import S1 from '../Assets/S1.png'
import S2 from '../Assets/S2.png'
import S3 from '../Assets/S3.png'
import S4 from '../Assets/S4.png'
import Notice2 from '../Assets/Notice2.pdf'
const Landing_Notices = () => {
  return (
    <div className='Notices_land' style={{display:'flex',backgroundImage:`url(${BG})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',marginTop:'100px'}}>
        <div className='Notice_half' style={{float:'left',width:'65%'}}>
            <div className='Notice_block' >
                <div className='row1' style={{display:'flex'}}>
                <div className='not1' style={{width:'25%', height:'250px', borderRadius:'1rem',float:'left', backgroundColor:'antiquewhite', margin:'50px 25px 25px 50px'}}>
                    <h4 style={{width:'100%', backgroundColor:'white', height:'60px'}}>SVKM'S MASTERMIND</h4>
                    <a style={{textDecoration:'none', }} target='_blank' href={SVKMMM}>Svkm's Annual Career Fair For Courses after 10th, 12th & Graduation. Sunday 16th April 2023. Click for more details.</a>
                </div>
                <div className='not2' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'50px 25px 25px 25px'}}>
                    <h4 style={{width:'100%', backgroundColor:'white', height:'60px'}}>NBA EXPERT COMMITTEE VISIT</h4>
                    
                        <p><a style={{textDecoration:'none', fontSize:'15px'}} target='_blank' href={NBA1}>-List of faculty and staff AY 2022-23</a></p>
                        <p><a style={{textDecoration:'none', fontSize:'15px'}} target='_blank' href={NBA2}>-List of faculty and staff AY 2020-21</a></p>
                        <p><a style={{textDecoration:'none', fontSize:'15px'}} target='_blank' href={NBA3}>-List of faculty and staff AY 2019-20</a></p>
                        <p><a style={{textDecoration:'none', fontSize:'15px'}} target='_blank' href={NBA4}>-Placement Data AY 2019-20, 20-21, 21-22</a></p>
                    
                </div>
                <div className='not3' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'50px 50px 25px 25px'}}>
                    <h5 style={{width:'100%', backgroundColor:'white', height:'60px'}}>CUMULATIVE ATTENDANCE UP TO 1ST APRIL 2023</h5>
                    <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none', fontSize:'15px'}} target='_blank' href={Att1}>-IT and CSE Departments</a></p>
                    <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none', fontSize:'15px'}} target='_blank' href={Att2}>-Civil, Electrical, Chemical, Plastic and Mechanical Departments</a></p>
                </div>
                </div>
                <div className='row2' style={{display:'flex'}}>
                <div className='not4' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'25px 25px 25px 50px'}}>
                <h4 style={{width:'100%', backgroundColor:'white', height:'60px'}}>STUDENTS LIST</h4>
                    
                    <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none'}} target='_blank' href={SS1}>-Student Summary 2022-23</a></p>
                    <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none'}} target='_blank' href={SS2}>-Student Summary 2021-22</a></p>
                    <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none'}} target='_blank' href={SS3}>-Student Summary 2020-21</a></p>
                    <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none'}} target='_blank' href={SS4}>-Student Summary 2019-20</a></p>
                </div>
                <div className='not5' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'25px 25px 25px 25px'}}>
                <h4 style={{width:'100%', backgroundColor:'white', height:'60px'}}>Attendance</h4>
                <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none', }} target='_blank' href={Notice2}>-Notice for Students 2022 - 2023(Term Jan 2023 - May 2023)</a></p>
                </div>
                <div className='not6' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'25px 50px 25px 25px'}}>
                <h4 style={{width:'100%', backgroundColor:'white', height:'60px'}}>Academic Calendar</h4>
                <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none', }} target='_blank' href={AC}>-Academic Calendar from Jan 2023 to May 2023</a></p>
                </div>
                </div>
                <div className='row3' style={{display:'flex', justifyContent:'center'}}>
                <div className='not7' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'center', backgroundColor:'antiquewhite', margin:'25px 50px 50px 0px'}}>
                <h4 style={{width:'100%', backgroundColor:'white', height:'60px'}}>Time Table</h4>
                <p style={{textAlign:'left',marginLeft:'10px'}}><a style={{textDecoration:'none', }} target='_blank' href={TT}>-Time Table for Ay 2022-23 Even Semester</a></p>
                </div>
                {/* <div className='not8' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'25px 25px 50px 25px'}}></div>
                <div className='not9' style={{width:'25%', height:'250px', borderRadius:'1rem', float:'left', backgroundColor:'antiquewhite', margin:'25px 50px 50px 25px'}}></div> */}
                </div>
            </div>
        </div>
        <div className='Event_half' style={{float:'left',width:'35%'}}>
        <div className="main-containerland_not1">
        <center><h3 sx={{ color: "antiquewhite"}}>Events</h3></center>
        <Box sx={{ width: "100%", typography: "body1" }}>
            <div className="containerland1_not1">
            <Carousel className='Carousel1' fade>
            <Carousel.Item>
              <img height={"500px"} style={{filter:"brightness1(75%)"}}
                className="d-block w-100"
                src={S1}
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img height={"500px"} style={{filter:"brightness1(75%)"}}
                className="d-block w-100"
                src={S2}
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img height={"500px"} style={{filter:"brightness1(75%)"}}
                className="d-block w-100"
                src={S3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img height={"500px"} style={{filter:"brightness1(75%)"}}
                className="d-block w-100"
                src={S4}
                alt="Fourth slide"
              />
            </Carousel.Item>
            
            </Carousel>
            </div>
        </Box>
        </div>
        </div>



    </div>
  )
}

export default Landing_Notices