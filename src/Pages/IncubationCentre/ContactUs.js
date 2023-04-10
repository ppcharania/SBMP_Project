import React from 'react'
import SideNav from './SideNav'
const ContactUs = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
      
        <h4>Contact Us</h4>
        <hr type="solid"></hr>
        
        <table style={{width:'500px', height:'100px'}}>
          <tr>
            <th colspan="2"> Mr. Gajanan J. Badwe </th> 
          </tr>
          <tr>
            <td>Contact No.</td> 
            <td>022 42336004</td>
          </tr>
          <tr>
            <td>Email ID</td>
            <td>sbmp.incubation@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>


  )
}

export default ContactUs