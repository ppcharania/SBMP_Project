import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ElectVidyut_V1 from "../../Assets/NewsLetter/Electvidyut2021_V1.pdf"
import ElectVidyut_V2 from "../../Assets/NewsLetter/Electvidyut2021_V2.pdf"

const ElectricalEngineering = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
      <h4 style={{paddingTop:'10px'}}>Electrical Engineering</h4>
          <hr type="solid"></hr>
          <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Vission & Mission" value="1" />
                <Tab label="About Us" value="2" />
                <Tab label="Faculty" value="3" />
                <Tab label="curriculum" value="4" />
                <Tab label="News-letter" value="5" />

              </TabList>
            </Box>
            <TabPanel value="1">
              <b>Vision</b>
              <p>To create Electrical Professionals with technical competencies and social values to serve industry and society.</p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b> To impart industry oriented Technical Education to enhance the employability of Electrical engineering graduates.</li>
                  <li><b>M2.</b> To create an ecosystem for developing Entrepreneurial skills.</li>
                  <li><b>M3.</b> To enhance industry-institute relationship for lifelong learning.</li>
                </ul>
              </p>
              <b>Program Educational Objectives (PEOs)</b>
              <p>
                <ul type="none">
                  <li><b>PEO1: </b>Diploma Electrical Engineering Graduates will solve electrical engineering problems with acquired technical and soft skills.</li>
                  <li><b>PEO2: </b>Diploma Engineering Graduates will be able to work individually & in a team in multidisciplinary environment.</li>
                  <li><b>PEO3: </b>Diploma Graduates will become successful Entrepreneur having sense of social responsibilities</li>
                </ul>
              </p>
              <b>Program Specific Outcomes (PSOs)</b>
              <p>
                <ul type="none">
                  <li><b>PSO1:</b> Demonstrate the responsibilities as an Electrical supervisor in various sectors using various tools and techniques for best run of the plant.</li>
                  <li><b>PSO2: </b>Design, operate, test Electrical installations and Maintain Electrical machines with technical knowledge & skills</li>
                </ul>
              </p>
    
            </TabPanel>
            <TabPanel value="2">
              <p>This Course lays emphasis on Electricity Generation, Distribution and Utilization. It covers subjects like Electricity Fundamentals, Electrical Engineering Materials, Drawing and Estimation, Electrical Machines, Electrical Power Generation and Distribution, etc. In addition, the student is also acquainted with subject like, Basic and Applied Electronics, Mechanical Engineering, Energy Audit and Conservation, Testing and Maintenance, Management, etc. Students passing the Diploma Course in Electrical Engineering can get employment as Junior Engineer in Organization like State Electricity Board, BEST, Railways, Generating Stations, Electrical equipment Manufacturers, etc.</p>

              <p>The student can work as an in-charge in Erection and Maintenance of Electrical Installations, Power Grid, Electrical Traction, Switchgear. There is scope to work as an Electrical Engineer for Manufacturing of Electrical Equipment, Machines, Appliances, Testing and Calibration at various Industries and organizations. They have also an opportunity to work as Sales and Service Engineers.</p>
            </TabPanel>

            <TabPanel value="3">
            <table style={{width:'70%'}}>
              <tr>
                <th>Name of the Staff</th>
                <th>Designation</th>
                <th>Qualification</th>
              </tr>
              <tr>
                <td>Shri N.D. Adate</td>
                <td>Head of Department</td>
                <td>B.Tech., M.Tech.</td>
              </tr>
              <tr>
                <td>Mrs. A.N. Kinhekar</td>
                <td>Lecturer</td>
                <td>B.E., M.Tech.</td>
              </tr>
              <tr>
                <td>Shri D.G. Rajmandai</td>
                <td>Lecturer</td>
                <td>B.E.</td>
              </tr>
              <tr>
                <td>Ms. U.H. Sawant</td>
                <td>Lecturer</td>
                <td>B.E., M.Tech.</td>
              </tr>
              <tr>
                <td>Shri S.S. Salve</td>
                <td>Lecturer</td>
                <td>M.Sc</td>
              </tr>
            </table>
            </TabPanel>

            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">
            <h5>Elect-Vidyut 2021-2022</h5>
              <ul type="none">
                <li><b>Volume 1  </b><a href={ElectVidyut_V1 }>  Click Here</a></li>
                <li><b>Volume 2  </b><a href={ElectVidyut_V2 }>  Click Here</a></li>
              </ul>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default ElectricalEngineering