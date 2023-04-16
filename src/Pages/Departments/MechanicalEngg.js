import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MechAdyant21_V1 from '../../Assets/NewsLetter/Mechadyant2021_V1.pdf'
import MechAdyant21_V2 from '../../Assets/NewsLetter/Mechadyant2021_V2.pdf'
import MechAdyant22 from '../../Assets/NewsLetter/Mechadyant2022_V1.pdf'

const MechanicalEngineering = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4 style={{paddingTop:'10px'}}>Mechanical Engineering</h4>
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
              <p>To become a center of excellence in the field of mechanical engineering through need-based value education</p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b>To impart quality education through continuous up-gradation of curriculum and faculty development</li>
                  <li><b>M2.</b> To encourage students to solve mechanical engineering and real-life problems through industry-institute interaction</li>
                  <li><b>M3.</b>To develop entrepreneur qualities and concern for the society</li>
                </ul>
              </p>
              <b>Program Educational Objectives (PEOs)</b>
              <p>
                <ul type="none">
                  <li><b> PEO1:</b>Contribute to technological advancement through continual learning in the field of mechanical engineering</li>
                  <li><b>PEO2:</b>Apply technical knowledge and skills to find effective solutions for the problems in mechanical engineering and other related disciplines</li>
                  <li><b>PEO3:</b>Develop skills in diploma graduates to address the concerns of society and environment by communicating effectively to lead an interdisciplinary diverse team</li>
                </ul>
              </p>
              <b>Program Specific Outcomes (PSOs)</b>
              <p>
                <ul type="none">
                  <li><b>PSO1:</b>Diploma graduates will be able to apply basic principles in the area of design and manufacturing engineering</li>
                  <li><b>PSO2:</b>Equip diploma graduates with technical skills to provide solutions in the field of thermal engineering</li>
                </ul>
              </p>
    
            </TabPanel>
            <TabPanel value="2">
              <p>The Diploma Course in Mechanical Engineering lays emphasis on manufacturing in engineering industries. Syllabus covers subjects such as Work Study, Production Management, Process Engineering, Tool Design, Mechanism, Power Engines, Refrigeration and Air-conditioning, Hydraulic Machinery, Machine Design Practice and Entrepreneurship. Students can, work in Engineering Department, Inspection, Quality Control, Maintenance and Production Shops, and Industrial Engineering Department in Engineering Industries involved in manufacture of Industrial Machinery, Machine Tools, Automobiles, Ancillary Industries, Electrical Machinery, etc.
              </p>
            </TabPanel>

            <TabPanel value="3">
            <table style={{width:'70%'}}>
                <tr>
                  <th>Name of the Staff</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                </tr>
                <tr>
                  <td>Shri A.K. Chore</td>
                  <td>Head of Department</td>
                  <td>M.E.</td>
                </tr>
                <tr>
                  <td>Shri R.R. Ambade</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Shri G.J. Badwe</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Shri A.D. Bele</td>
                  <td>Lecturer</td>
                  <td>B.E., M.Tech.</td>
                </tr>
                <tr>
                  <td>Shri S.B. Wasnik</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Dr. P.R. Parate</td>
                  <td>Lecturer</td>
                  <td>B.E., PhD</td>
                </tr>
                <tr>
                  <td>Shri G.B. Deshpande</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Shri A.S. Shukla</td>
                  <td>Lecturer</td>
                  <td>B.Tech., M.E.</td>
                </tr>
                <tr>
                  <td>Shri V.A. Timbadia</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Shri P.P. Sawant</td>
                  <td>Lecturer</td>
                  <td>B.E.</td>
                </tr>
                <tr>
                  <td>Shri S.C. Kolelar</td>
                  <td>Workshop Superintendent</td>
                  <td>B.E., M.E.</td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">
              <h5>Mech-Adyant 2021-2022</h5>
              <ul type="none">
                <li><b>Volume 1  </b><a href={MechAdyant21_V1 }>  Click Here</a></li>
                <li><b>Volume 2  </b><a href={MechAdyant21_V2 }>  Click Here</a></li>
              </ul><br></br>

              <h5>Mech-Adyant 2022-2023</h5>
              <ul type="none">
                <li><a href={MechAdyant22}>Click Here</a></li>
              </ul><br></br>
              
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default MechanicalEngineering