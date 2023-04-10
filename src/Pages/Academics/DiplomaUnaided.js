import React from 'react'
import SideNav from './SideNav'
const DiplomaUnaided = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Diploma(Unaided)</h4>
        <hr class="solid"></hr>
        
        <b>Three Year Fulltime </b>
        <p>In 2001 , institute ventured into the emerging field Computer Engineering and  Information Technology catering to the demands  of industries  under leadership of SVKM.</p>

        <p>SBM Polytechnic offers full time Diploma in Computer Engineering and Information Technology.   Both the courses are self financed.   Each Course is of Three Years Full Time Diploma  (Un-aided) with Semester-Pattern having Choice and Credit Based System (CCBS). , The students has to complete the course in six terms  to award Diploma .</p>

        <p>The students are completing summer internship training after 4th semester. Also the students are exposed to industry by organizing industrial tours and visits during their studies.</p>

        <table border= "2" style={{width:'70%'}}>
          <tr>
            <th>Course</th>
            <th>Year Establishment</th>
            <th>Sanctioned Intake</th>
          </tr>
          <tr>
            <td>Computer Engineering</td>
            <td>2001</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Information Technology</td>
            <td>2002</td>
            <td>60</td>
          </tr>
        </table>
      </div>
    </div>


  )
}

export default DiplomaUnaided