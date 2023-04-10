import React from 'react'
import SideNav from './SideNav'
import Mentor1 from '../../Assets/IC/Mentor1.jpg'
import Mentor2 from '../../Assets/IC/Mentor2.jfif'
import Mentor3 from '../../Assets/IC/Mentor3.jfif'
import Mentor4 from '../../Assets/IC/Mentor4.jfif'
import Mentor5 from '../../Assets/IC/Mentor5.jfif'
import Mentor6 from '../../Assets/IC/Mentor6.jfif'
import Mentor7 from '../../Assets/IC/Mentor7.png'
import Mentor8 from '../../Assets/IC/Mentor8.png'

const Mentors = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Mentors</h4>
        <hr type="solid"></hr>
        
        <table style={{width: '1000px'}}>
          <tr>
            <td><img src={Mentor1} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Mukesh Mistry</b><br></br>
                  sales and marketing consultant</td>
            <td><img src={Mentor2} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Saumil Khandwala</b><br></br>
                  Founder and CEO, Solution4U</td>
          </tr>
          <tr>
            <td><img src={Mentor3} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Ramesh Nilakantan</b><br></br>
                  Business Coach/Mentor</td>
            <td><img src={Mentor4} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Amit Modi</b><br></br>
                  Director, Ozone events and Media Pvt Ltd.</td>
          </tr>
          <tr>
            <td><img src={Mentor5} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Shahnawaz Shaikh</b><br></br>
                  Co-founder, WEQ Technologies</td>
            <td><img src={Mentor6} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Daksh Pandya</b><br></br>
                  Managing Partner, Ekraft</td>
          </tr>
          <tr>
            <td><img src={Mentor7} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Binu Patel</b><br></br>
                  Procem Consultants</td>
            <td><img src={Mentor8} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Sunil Kangane</b><br></br>
                  Entreprenuer, INVOTEC AUTOMATION PVT. LTD.</td>
          </tr>
        </table>
        
      </div>
    </div>


  )
}

export default Mentors