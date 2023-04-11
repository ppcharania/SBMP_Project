import React from 'react'
import SideNav from './SideNav'
const AdmissionDetails = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Admission Details</h4>
        <hr type="solid"></hr>

        <h5>Post SSC Diploma admissions:</h5>
        <p>SBM Polytechnic is a Gujrathi speaking Linguistic Minority institution. As per the rules 50% of the intake are reserved(minimum) for the candidate belonging to Gujrathi speaking Linguistic community. Remaining 50% are available for the non Gujarathi ie General category candidates.  
        </p>
        <br></br>
        <table style={{width:'100%'}}>
          
          <tr>
            <th>Admission</th>
            <th>Category / Courses available /seats</th>
          </tr>
          <tr>
            <td>MS DTE through state level admission procedure (CAP) </td>
            <td>
              <ol type="A">
                <li>General – Aided Courses (50% of Sanctioned Intake Civil Engg/Mechanical/ Electrical/Plastic/ Chemical/Electronics and Telecommunication)</li>
                <li>Gujrathi Linguistic Minority – Aided/Unaided  Courses (50% of Sanctioned Intake Civil Engg/Mechanical/ Electrical/Plastic/ Chemical/Electronics and Telecommunication) and Unaided Courses ( 51% of Sanctioned Intake Computer Engg and Information Technology)</li>
                <li>20% of Sanctioned Intake under Institute quota for Computer Engineering and Information Technology</li>
              </ol>  
            </td>
          </tr>
          <tr>
            <td>Institute level Admissions</td>
            <td>20% of Sanctioned Intake under Institute quota for Computer Engineering and Information Technology</td>
          </tr>
        </table>
        
        <b>Admission notification:</b>
        <p>The admission notifications for the both the admissions will be published in leading news paper and on official websites after the SSC result declaration .</p>
        <p> - Eligibility Criteria and Reservations /Quota<br></br>
            - As per MS DTE rules applicable to General / Minority candidates</p>
        <p>(The aspirant are advised to refer admission prospectus and the MSDTE website for details)</p>

        <br></br>
        <br></br>
        <h5>Direct Second Year Diploma Admissions:</h5>
        <p>The admission notifications for the both the admissions will be published in leading news paper and on official websites after the HSC result declaration. </p>
        <p> - Eligibility Criteria and Reservations /Quota <br></br>
            - As per MS DTE rules applicable to General / Minority candidates</p>

        <b>Important Links</b>
        <table border="2" style= {{width:'80%'}}>
          <tr>
            <th>Sr. No.</th>
            <th>Important Link</th>
          </tr>
          <tr>
              <td>1.</td>
              <td>Government of India, All India Council for Technical Education [AICTE]<br></br>
                  <a href= 'https://www.aicte-india.org/'>Click Here</a></td>
          </tr>
          <tr>
              <td>2.</td>
              <td>Directorate of Technical Education, Maharashtra State, India<br></br>
                  <a href = 'https://dte.maharashtra.gov.in/'>Click Here</a></td>
          </tr>
          <tr>
              <td>3.</td>
              <td>Maharashtra State Board of Technical Education, Mumbai , India<br></br>
                  <a href = 'https://msbte.org.in/'>Click Here</a></td>
          </tr>
          <br></br>
          <tr>
              <th>Sr. No.</th>
              <th>Other Link</th>
          </tr>
          <tr>
              <td>1.</td>
              <td>Nptel, online courses and certification <br></br>
                  <a href = 'https://nptel.ac.in/' >Click Here</a></td>
          </tr>
        </table>

      </div>
    </div>


  )
}

export default AdmissionDetails