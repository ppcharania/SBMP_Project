import React from 'react'
import SideNav from './SideNav'
const DiplomaAided = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Diploma(Aided)</h4>
        <hr class="solid"></hr>
        <b>Three Year Fulltime Diploma</b>
        <p>The full time diploma courses (Civil Engineering, Mechanical Engineering, Electrical Engineering, Industrial Electronics, Plastic Engineering, Chemical Engineering, Ditial Electronics and Electronics & telecommunication) are of three year's duration and fifth semesters incorporates an inplant training. The courses are thus spread over six semesters. The students receive institutional training for the first four and Sixth semesters. In the fifth semester they are sent to industry for inplant or field training. This scheme enables the students to learn under actual work situation during their training and improves their prospects for employment. Final diploma is awarded after satisfactory completion of training and examination at the end of the sixth semester.</p>
        <p>Students undergo inplant training of six months duration. Inplant training is assessed at the end of each training period. This has resulted in better employment opportunities and better industry acceptance of courses. Suitable modifications have been introduced in the curriculum and examination schemes to make course relevant to industry needs. These are reviewed periodically.</p>
        <table border= "2" style={{width:'70%'}}>
          <tr>
            <th>Course</th>
            <th>Year Establishment</th>
            <th>Sanctioned Intake</th>
          </tr>
          <tr>
            <td>Civil Engineering</td>
            <td>1963</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Mechanical Technology</td>
            <td>1963</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Electrical Engineering</td>
            <td>1963</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Industrial Engineering</td>
            <td>1969</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Plastic Engineering</td>
            <td>1974</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Chemical Engineering</td>
            <td>1976</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Digital Electronics</td>
            <td>1981</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Electronics & Telecommunication</td>
            <td>2021</td>
            <td>50</td>
          </tr>

        </table>

        
      </div>
    </div>


  )
}

export default DiplomaAided