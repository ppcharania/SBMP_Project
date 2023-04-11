import React from 'react'
import SideNav from './SideNav'
import mteam1 from '../../Assets/IC/mteam1.jpg'
import mteam2 from '../../Assets/IC/mteam2.jpg'
import mteam3 from '../../Assets/IC/mteam3.jpg'
import mteam4 from '../../Assets/IC/mteam4.jpg'
import mteam5 from '../../Assets/IC/mteam5.jpg'
import mteam6 from '../../Assets/IC/mteam6.jpg'
import mteam7 from '../../Assets/IC/mteam7.jpg'
import mteam8 from '../../Assets/IC/mteam8.jpg'
import mteam9 from '../../Assets/IC/mteam9.jpg'
import mteam10 from '../../Assets/IC/mteam10.jpg'


const ManagingTeam = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Core Managing Team</h4>
        <hr type="solid"></hr>

        <table style={{width:'900px'}}>
          <tr>
            <td><img src={mteam1} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Gajanan J. Badwe</b><br></br>
                  Chief Co-ordinator</td>
            <td><img src={mteam2} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Pratik H. Shah</b><br></br>
                  Co-ordinator</td>
          </tr>
          <tr>
            <td><img src={mteam3} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Ms. Neelam N. Petkar</b><br></br>
                  Co-ordinator</td>
            <td><img src={mteam4} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Ashutosh Shukla</b><br></br>
                  Co-ordinator</td>
            
          </tr>
          <tr>
            <td><img src={mteam5} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Pankaj D. Rathod</b><br></br>
                  Co-ordinator</td>
            <td><img src={mteam6} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Navin N. Tembhurnikar</b><br></br>
                  Co-ordinator</td>
          </tr>
          <tr>
            <td><img src={mteam7} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Ms. Urvi Sawant</b><br></br>
                  Co-ordinator</td>
            <td><img src={mteam8} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mrs. Jyoti S. Sangle</b><br></br>
                  co-ordinator</td>
          </tr>
          <tr>
            <td><img src={mteam9} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Pratik P. Sawant</b><br></br>
                  Co-ordinator</td>
            <td><img src={mteam10} style={{width:'150px', height:'150px', padding:'10px'}}></img></td>
            <td> <b>Mr. Prasad S. Dhuri</b><br></br>
                  Co-ordinator</td>
          </tr>
        </table>
        
      </div>
    </div>
  )
}

export default ManagingTeam