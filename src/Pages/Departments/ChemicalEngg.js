import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ChemicalEngineering = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
      <h4>Chemical Engineering</h4>
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
              <p>Envision good human beings empowered with need based Chemical Engineering education.</p>
              <b>Mission</b>
              <p>
                <ul type="none">
                  <li><b>M1.</b>To develop competent engineers with excellence in technical and problem solving skills.</li>
                  <li><b>M2.</b>To prepare employable personnel and entrepreneurs through industry-institute interaction.</li>
                  <li><b>M3.</b>To enhance competency through self-evaluation and continuous improvement.</li>
                  <li><b>M4.</b>To inculcate sense of discipline, responsibility towards society and promote lifelong learning.</li>
                </ul>
              </p>
              <b>Program Educational Objectives (PEOs)</b>
              <p>
                <ul type="none">
                  <li><b> PEO1:</b>Enhance knowledge of basic principles of science and Chemical Engineering.</li>
                  <li><b>PEO2:</b>To solve chemical engineering problems, considering safety, environmental and social aspects.</li>
                  <li><b>PEO3:</b>Develop entrepreneurial qualities, soft skills and promote lifelong learning.</li>
                </ul>
              </p>
              <b>Program Specific Outcomes (PSOs)</b>
              <p>
                <ul type="none">
                  <li><b>PSO1:</b>To apply core concepts of unit process and unit operation in process industries to operate the equipment and using materials effectively.</li>
                  <li><b>PSO2: </b>To lay drafting of PFD, ULD, P&ID, for chemical process plant using AutoCAD.</li>
                </ul>
              </p>
    
            </TabPanel>

            <TabPanel value="2">

              <p>The Diploma course in chemical engineering deals with various aspects of chemical industry, such as, Unit operations, Process Technology of Important Commercial Chemicals, Process Control and Instrumentation, Maintenance and Material Handling. The course covers, important subjects such as, Mass Transfer, Heat Transfer, Pollution Control and Waste Disposal, Stoichiometry and Safety in Plant Operation.</p>

              <p>The students undergoing this course get well conversant with the plant operation and maintenance of modern chemical plant. They can work in industry as foremen, supervisors at the shop floor level. They can also work for fabrication, erection and commissioning of plants.
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
                <td>Shri R.D. Shimpi</td>
                <td>Head of Department</td>
                <td>B.E., M.Tech.</td>
              </tr>
              <tr>
                <td>Shri M.M. Belwalkar</td>
                <td>Lecturer</td>
                <td>B.Tech., M.Tech.</td>
              </tr>
              <tr>
                <td>Shri N.R. Nagose</td>
                <td>Lecturer</td>
                <td>B.Tech., M.E.</td>
              </tr>
              <tr>
                <td>Mrs. J.S. Sangle</td>
                <td>Lecturer</td>
                <td>B.Tech., M.E.</td>
              </tr>
              <tr>
                <td>Mrs. Kriti Bhave</td>
                <td>Lecturer</td>
                <td>M.Sc</td>
              </tr>
              <tr>
                <td>Mrs. S.P. Survana</td>
                <td>Lecturer</td>
                <td>M.Sc</td>
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

export default ChemicalEngineering
