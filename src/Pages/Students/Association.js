import React from 'react'
import SideNav from './SideNav'
const Association = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Associations</h4>
        <hr type="solid"></hr>

        <b>Student Association</b>
        <table style={{width:'70%'}}>
          <tr>
            <th>President</th>
            <td>Dr.M.Z. Shaikh, Principal</td>
          </tr>
          <br></br>
          <tr>  
            <th>General Secretary [G.S.]</th>
            <td>Ms. Siddhi Rajwatkar (1520037)</td>
          </tr>
          <br></br>
          <tr>
            <th>Lady Representative [L.R.]</th>
            <td>Ms. Rajvi Dharod (1510009)</td>
          </tr>
          <br></br>
          <tr>
            <th>Executive Committee</th>
            <td>
              <ul>
                <li>Smt. A.A. Kulkarni</li>
                <li>Mr. R.D. Shimpi</li>
                <li>Mr. A.K. Chore</li>
                <li>Mr. D.M. Karad</li>
                <li>Mr. J.S. Kulkarni</li>
                <li>Mrs. N.G. Kadukar </li>
                <li>Mr.V.B. Vanvari</li>
                <li>Mr P.R. Parate</li>
                <li>Mr. L.B. Deshpande</li>
              </ul>
            </td>
          </tr>
        </table><br></br>

        
        
      </div>
    </div>


  )
}

export default Association