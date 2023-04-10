import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const DigitalEngineering = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4>Digital Electronics</h4>
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
              <p>We aspire to develop technically skilled manpower in the field of Digital Electronics. </p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b> To design need based curriculum. </li>
                  <li><b>M2.</b> To provide advanced laboratory set-up. </li>
                  <li><b>M3.</b> To maintain industry-institute liaison. </li>
                  <li><b>M4.</b> To train faculty and staff to accept challenges in rapidly changing socio-technical environment. </li>
                  <li><b>M5.</b> To imbue students with soft skills, entrepreneurial qualities, ethics and lifelong learning.</li>
                </ul>
              </p>
    
            </TabPanel>

            <TabPanel value="2">
              <p>The syllabus covers subjects like Electronic Measurement, Electronic Calculation, Microprocessor Applications, Analog and Digital Techniques. Various Phases of Development of an Electronic Gadget incorporating related Calculations, Drawings, Fabrication and Testing work are effectively integrated with Industrial Training and Term-work in various semesters through Project Work.</p>
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

export default DigitalEngineering