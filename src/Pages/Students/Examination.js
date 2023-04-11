import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ERR1 from '../../Assets/Student/ERR22-25.pdf'
import ERR2 from '../../Assets/Student/ERR20-23.pdf'
import ERR3 from '../../Assets/Student/ERR18-21.pdf'


const Examination = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
      <h4 style={{paddingTop:'10px'}}>Examination</h4>
      <hr type="solid"></hr>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Exam Committees" value="1" />
                <Tab label="Examination Rules & Regulations" value="2" />
                <Tab label="Result" value="3" />
                <Tab label="Question Paper" value="4" />
              
              </TabList>
            </Box>
            <TabPanel value="1">
            <b>Examination Committee (2021-22)</b>
            <table style={{width:'80%'}}>
              <tr>
                <td><b>Chairman, Board of Technical Education, Maharashtra State, Mumbai</b></td>
                <td>Chairman</td>
                <td>Dr. Vinod Mohitkar<br></br>Director, MSBTE</td>
              </tr>
              <tr>
                <td><b>Principal of nearest Government Polytechnic</b></td>
                <td>Member</td>
                <td>Shri Ghunghrat, Principal <br></br>St.Zaviers Polytechnic, Mumbai</td>
              </tr>
              <tr>
                <td><b>	Two Heads of the Departments of the Institute</b></td>
                <td>Member</td>
                <td>Mrs. Anita Kulkarni, Head IE/DE<br></br>Mrs. N.G.Kadukar, V.P.& Head IT</td>
              </tr>
              <tr>
                <td><b>Controller of Examination</b></td>
                <td>Member-Secretary</td>
                <td>Shri S.T.Khelkar</td>
              </tr>
            </table>
            <br></br>
            <br></br>

            <b>Examination Sub Committee (2021-22)</b>
            <table style={{width:'80%'}}>
              <tr>
                <td><b>Chairman of the Examination Sub Committee</b></td>
                <td>Chairman</td>
                <td>Dr.D.J.Shah</td>
              </tr>
              <tr>
                <td><b>	One member from Principal of Nearby Autonomous Polytechnic</b></td>
                <td>Member</td>
                <td>Shri Ghunghrat, Principal <br></br>St.Zaviers Polytechnic, Mumbai</td>
              </tr>
              <tr>
                <td><b>One MSBTE Representative</b></td>
                <td>Member</td>
                <td>Asst.Secretary<br></br>MSBTE, Mumbai Region</td>
              </tr>
              <tr>
                <td><b>Officer-Incharge of Examination</b></td>
                <td>Member</td>
                <td>Invitee</td>
              </tr>
              <tr>
                <td><b>Controller of Examination</b></td>
                <td>Member-Secretary</td>
                <td>Shri S.T.Khelkar</td>
              </tr>
            </table>
            <br></br>
            <br></br>
            
            <b>Examination Information Committee (2021-22)</b>
            <table style={{width:'80%'}}>
              <tr>
                <td><b>Mr. Sudhir Khelkar</b></td>
                <td>Controller of Examination</td>
                <td>9323863104</td>
              </tr>
              <tr>
                <td><b>Mr. R.D Shimpi</b></td>
                <td>Head, Chemical Engineering</td>
                <td>9224280194</td>
              </tr>
              <tr>
                <td><b>Mr. N.D Adate</b></td>
                <td>I/c Head Electrical</td>
                <td>9870040455</td>
              </tr>
              <tr>
                <td><b>Mr. A B Dongaonkar</b></td>
                <td>lectuer,Infromation Technology</td>
                <td>8767518118</td>
              </tr>
            </table>
            </TabPanel>
            
            <TabPanel value="2">
            <ul>
              <li>Examination Rules and Regulations- BATCH 2022-25</li> 
              <a href={ERR1}>Click Here</a>
              <li>Examination Rules and Regulations-BATCH 2020-23 and BATCH 2021-24</li>
              <a href={ERR2}>Click Here</a>
              <li>Examination Rules and Regulations- BATCH 2018-21 and  BATCH 2019-22 </li> 
              <a href={ERR3}>Click Here</a> 
            </ul>
            </TabPanel>

            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>

    </div>
  )
}

export default Examination