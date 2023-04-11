import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ElectronicsTelecommunication = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4 style={{paddingTop:'10px'}}>Electronics & Telecommunication</h4>
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
              <p>Aspire to develop technically skilled Electronics and Telecommunications Engineers.</p>

              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b> To enhance professional skills required for technological solutions to real world problems.</li>
                  <li><b>M2.</b> To create passion among graduates by providing industry oriented learning.</li>
                  <li><b>M3.</b> To provide opportunities to be a team leader while working in multidisciplinary area.</li>
                </ul>
              </p>
            </TabPanel>

            <TabPanel value="2">
              <p>Electronics and Telecommunications Engineering deals with analoganddigital transmission/ reception of video, voice and data. The curriculum focuses on courses likeBasic Electronics,Communication Engineering (digital and analog),Microcontrollers,Satellite Communication, Microwave Engineering, Antenna and Wave propagation, VLSI, Internet of Things, Mobile Communication and Optical Fibre. Industrial training incorporated in the curriculum enhances the students’ practical skills. The job prospects include Technical Assistant, Supervisor, Operator in Quality Control, and in the Production and Maintenance Departments of several industries. There are entrepreneurial opportunities in the field of manufacturing and servicing electronic equipment.</p>
            </TabPanel>

            <TabPanel value="3">
            <table style={{width:'70%'}}>
              <tr>
                <th>Name of the Staff</th>
                <th>Designation</th>
                <th>Qualification</th>
              </tr>
              <tr>
                <td>Mrs. A.A. Kulkarni</td>
                <td>Head of Department</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Shri L.B. Deshpande</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Shri N.G. Farkade</td>
                <td>Lecturer</td>
                <td>B.E., M.Tech.</td>
              </tr>
              <tr>
                <td>Shri S.S. Rokade</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Mrs. P.J. Nikhade</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Shri P.S. Dhuri</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Shri B.N. Surve</td>
                <td>Lecturer</td>
                <td>B.E., M.E.</td>
              </tr>
              <tr>
                <td>Shri B.M.Pande</td>
                <td>Lecturer</td>
                <td>	M.A./ M.B.A</td>
              </tr>
            </table>
            </TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default ElectronicsTelecommunication