import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Planetplastic from '../../Assets/NewsLetter/Planetplastic2021.pdf'

const PlasticEngineering = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4 style={{paddingTop:'10px'}}>Plastic Engineering</h4>
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
              <p>To empower the graduates through knowledge to produce high quality Plastics Engineer & Entrepreneurs</p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b> To create a competent professionals and entrepreneurs, contributing towards growth of Plastics and allied engineering.</li>
                  <li><b>M2.</b> To provide knowledge through strong Industry-Institute-Interaction.</li>
                  <li><b>M3.</b> To continuously improve the teaching-learning process through need based curriculum and infrastructure.</li>
                  <li><b>M4.</b> To inculcate environmental awareness, soft skills and promote lifelong learning.</li>
                </ul>
              </p>
              <b>Program Educational Objectives (PEOs)</b>
              <p>
                <ul type="none">
                  <li><b> PEO1:</b>Diploma graduates can identify, formulate and solve complex problem in plastics  engineering</li>
                  <li><b>PEO2:</b>To equip graduates with professional and entrepreneurial skills</li>
                  <li><b>PEO3:</b>To enrich diploma graduate with recent technologies in plastics engineering</li>
                  <li><b>PEO4:</b>To inculcate leadership skills and innovations</li>
                </ul>
              </p>
              <b>Program Specific Outcomes (PSOs)</b>
              <p>
                <ul type="none">
                  <li><b>PSO1:</b>To Design mould and dies, troubleshoot in plastics processing and test plastics products.</li>
                  <li><b>PSO2: </b>To pursue higher education in premier institute and get employment in polymer industries such as rubber, composites, packaging & allied industries</li>
                  <li><b>PSO3: </b>To setup plastic industries as an entrepreneur </li>
                </ul>
              </p>
    
            </TabPanel>
            <TabPanel value="2">
              <p>The Plastics Engineering Diploma Course lays emphasis on Engineering aspects of Plastic Industry. It deals with various processes used in Plastic Processing Machinery, Mould Design and Fabrication and Plastic Testing with sufficient knowledge of properties of Plastic materials. The students can work in Tool- Rooms making Moulds, in Plastic Industry making end products and Manufacture, Installation, Maintenance and Servicing of Plastic Machinery.</p>

              <p>There is a scope for development as an entrepreneur also. Unlike a technology programme, this course is on the Engineering side oriented to Plastic Industry. Students cover subjects such as, Production Planning and Control, Inspection, Effective Supervision and Engineering Economic Analysis which improve their awareness to needy areas, such as personnel, costing and management.
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
                  <td>Shri D.M. Karad</td>
                  <td>Head of Department</td>
                  <td>M.Sc.(Tech)</td>
                </tr>
                <tr>
                  <td>Mrs. R.M. Bawankar </td>
                  <td>Lecturer</td>
                  <td>B.Tech., M.E.</td>
                </tr>
                <tr>
                  <td>Shri S.A. Kamble</td>
                  <td>Lecturer</td>
                  <td>B.Tech., M.E.</td>
                </tr>
                <tr>
                  <td>Mrs. M.P. Humbal</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
                <tr>
                  <td>Shri N.N. Tembhurnikar</td>
                  <td>Lecturer</td>
                  <td>B.E., M.E.</td>
                </tr>
              </table>
            
            </TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">
              <h5>Planet Plastic 2021-2022</h5>
              <a href={Planetplastic}>Click Here</a>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default PlasticEngineering