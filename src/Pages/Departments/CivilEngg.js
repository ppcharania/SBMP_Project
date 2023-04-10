import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sthapatya21 from '../../Assets/NewsLetter/Sthapatya2021.pdf'
import Sthapatya22 from '../../Assets/NewsLetter/Sthapatya2022.pdf'

const CivilEngineering = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
          <h4>Civil Engineering</h4>
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
              <p>To deliver excellence in learning to diploma graduates of civil engineering for socio-economic development of the nation.</p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b>Offer the teaching- learning process with practical oriented approach </li>
                  <li><b>M2.</b>Impart entrepreneurial qualities, soft skills and promote lifelong learning </li>
                  <li><b>M3.</b>Facilitate for development of group dynamics and socioeconomic behaviour </li>
                </ul>
              </p>
              
            </TabPanel>

            <TabPanel value="2">
              <p>The Diploma Course in Civil Engineering covers Materials of Construction, Use of Surveying and Levelling Instruments, Civil Engineering Drawing, Methods of Construction as applied to Buildings, Roads,Bridges, Public Health Engineering, Quantity Surveying and Estimation and Entrepreneurship.</p>

              <p>The student is also provided with adequate background in Designing of Structures and in Project Management.Civil Engineering Technician can take up supervision of construction of all types of works,such as Surveying, Levelling and Data collection. He / She can also be useful in Materials Management,taking measurements, etc.</p>

              <p>He / She can get employment as Overseer / Junior Engineer in Municipal Corporation, Buildings and Constructions Department, Irrigation and Power Department, State Electricity Board, Housing Board, Building Repairs and Reconstruction Board, etc. He / She can get appointment as Supervisor in Private Construction organisations. The student can also find employment in Consulting organisations for Designing work. So also, he / she can work independently as a Contractor.</p>
            </TabPanel>

            <TabPanel value="3">
            <table style={{width:'70%'}}>
              <tr>
                <th>Name of the Staff</th>
                <th>Designation</th>
                <th>Qualification</th>
              </tr>
              <tr>
                <td>Dr. V.B. Vanvari</td>
                <td>Head of Department</td>
                <td>PhD</td>
              </tr>
              <tr>
                <td>Shri A.K. Singh</td>
                <td>Lecturer</td>
                <td>B.E.</td>
              </tr>
              <tr>
                <td>Shri S.N. Ranshur</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Ms. Y.K. Soni</td>
                <td>Lecturer</td>
                <td>B.E., M.Tech.</td>
              </tr>
              <tr>
                <td>Mrs. S.P. Patil</td>
                <td>Lecturer</td>
                <td>B.E., M.Tech.</td>
              </tr>
              <tr>
                <td>Ms. Neelam Petkar</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Dr. Kavita Dange</td>
                <td>Lecturer</td>
                <td>PhD</td>
              </tr>
            </table>
            </TabPanel>
            <TabPanel value="4">Item Three</TabPanel>

            <TabPanel value="5">
            
            <h5>Sthapatya 2021</h5>
              <a href={Sthapatya21}>Click Here</a>
            <p></p>
            <h5>Sthapatya 2022</h5>
              <a href={Sthapatya22}>Click Here</a>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default CivilEngineering