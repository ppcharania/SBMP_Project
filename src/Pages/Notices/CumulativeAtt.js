import React from 'react'
import SideNav from './SideNav'
const CumulativeAttendance = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>Cumulative Attendance</h4>
        <hr type="solid"></hr>

        <p>Please Select Category To View Attendance</p>
        <form style={{borderStyle: 'groove'}}>
          
            <label for="Dept">Department: </label>
            <select id="Dept" name="Department">
              <option value="CIV">Civil Engineering</option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="ELECTR">Electrical Engineering</option>
              <option value="IND">Industrial Engineering</option>
              <option value="PLAST">Plastic Engineering</option>
              <option value="CHEM">Chemical Engineering</option>
              <option value="DEX">Digital Electronics</option>
              <option value="CSE">Computer Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="EST">Electronics & Telecommunications</option>
            </select>
            <p></p>
            <label for="Sem">Semester: </label>
            <select id="Sem" name="Semester">
              <option value="sem1">I Semester</option>
              <option value="sem2">II Semester</option>
              <option value="sem3">III Semester</option>
              <option value="sem4">IV Semester</option>
              <option value="sem5">V Semester</option>
              <option value="sem6">VI Semester</option>
            </select>
            <p></p>
            <input type="submit" style={{width:'150px'}}></input>
          
        </form>
        <p></p>

      </div>
    </div>


  )
}

export default CumulativeAttendance