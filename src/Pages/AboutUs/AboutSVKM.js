import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OfficeBearers from '../../Assets/AboutUs/OfficeBearers.png'


  const AboutSVKM  = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className='FullPage' style={{display:'flex'}}>
        <SideNav/>
        <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>About SVKM</h4>
        <hr type="soild"></hr>

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Overview" value="1" />
                  <Tab label="Office Bearers" value="2" />
                  <Tab label="Managing Committee" value="3" />
                  <Tab label="Executive Committee " value="4" />
                </TabList>
              </Box>

              <TabPanel value="1">

              <b>About Shri Vile Parle Kelavani Mandal</b>
            
              <p>Shri Vile Parle Kelavani Mandal is a Public Charitable Trust registered under the Society’s Registration Act and Bombay Public Trust Act. From its humble beginnings in 1934, when it took over the Rashtriya Shala, a school established in 1921 in the wake of the National Movement, the Mandal today has grown into a big educational complex imparting high-level education to more than 35,000 students.</p>
 
              <p>The ethos of the Mandal, is marked by patriotic fervor, selfless service and a spirit of indigenous enterprise. These values permeate all the institutions set up by the Mandal and are the guiding principles for all of them. After beginning its journey in the early 1930s SVKM has blossomed into an educational colossus that has attained national recognition in multiple streams of higher education. With a strong guiding philosophy of providing education to all levels of the student community along with creating a feeling of bonding and commitment amongst academic and nonacademic employees. SVKM has mastered the art of being able to transform itself into a close knit family and at the same time help its students to attain all-round development, be employable and achieve success.</p>
                
              <p>Over the past 80 years, the Mandal has developed a large educational complex in Vile Parle, in Suburban Mumbai and has spread its wings to metro cities like, Bangalore, Hyderabad, Chandigarh, Ahmedabad, Navi Mumbai, etc., SVKM today is proud of some of the finest educational institutes in the country like NMIMS deemed to be University, N.M. College of Commerce and Economics, Mithibai College, D.J. Sanghvi College of Engineering, Bhagubhai Mafatlal Polytechnic – to name a few. It has also in its family schools from Nursery to Secondary, Jr. College providing ICSE or IB, IGCSE curriculum or CBSE curriculum. With a strong vision and passion for being the pioneers of the modern education system, all SVKM institutes are state of the art, with ever expanding facilities and infrastructure.</p>
                
              <p>From its beginning with the Swadeshi Movement, the Mandal has now grown into an educational foundation promoting global thinking consistent with national interest and promoting the values, professionalism, social sensitivity and dynamic entrepreneurship.</p>
              </TabPanel>

              <TabPanel value="2">
              
              <img src={OfficeBearers} style={{width:'600px', height:'600px', float:'left'}}></img> 
              </TabPanel>
                
              <TabPanel value="3">
              <p>The managing committee has got 30 elected members together with the President; it also has got 9 Trustees and 6 nominees of institutional donors. The Heads of our main institutions are also the Ex-Officio members. In the managing committee we have utilized the services of eminent persons and experts in their respective fields who have devoted their valuable time at the service of SVKM.</p>

              <table style={{width:'70%'}}>
                <tr>
                  <td>
                    <ol>
                      <li>Shri Amrish R. Patel</li>
                      <li>Shri Bhupesh R. Patel</li>
                      <li>Shri Bharat M. Sanghvi</li>
                      <li>Shri Chintan A. Patel</li>
                      <li>Shri Sunandan R. Divatia</li>
                      <li>Dr. Jayant P. Gandhi</li>
                      <li>Shri Shalin S. Divatia</li>
                      <li>Shri Harshad H. Shah</li>
                      <li>Shri Harit H. Chitalia</li>
                      <li>Shri Jagdish B. Parikh</li>
                      <li>Shri Amit B Sheth</li>
                      <li>Shri Bhargav N. Patel</li>
                      <li>Shri Bhupen G. Bhatt</li>
                      <li>Shri Harshad B. Kawa</li>
                      <li>Shri Harish J Patel</li>
                      <li>Shri Jagat A. Killawala</li>
                      <li>Shri Jayesh P. Choksi</li>
                      <li>Shri Jayesh R. Gandhi</li>
                      <li>Shri Kirit P. Mehta</li>
                      <li>Shri Maherdas J. Patel</li>
                      <li>Smt. Minaxi K. Mehta</li>
                    </ol>
                  </td>

                  <td>
                    <ol start="22">
                      <li>Shri Mukesh H. Patel</li>
                      <li>Shri Mukul P. Patel</li>
                      <li>Shri Mukesh A. Shah</li>
                      <li>Shri Naresh K. Sheth</li>
                      <li>Shri Nayan M. Patel</li>
                      <li>Shri Nimir K. Mehta</li>
                      <li>Shri Pravin H. Doshi</li>
                      <li>Shri Pruthviraj C. Shah</li>
                      <li>Shri Rajendra K. Shah</li>
                      <li>Dr. Rajesh L. Jani</li>
                      <li>Shri Rajgopal C. Bhandari</li>
                      <li>Shri Ranjeet Dudeja</li>
                      <li>Shri Sanjay A. Desai</li>
                      <li>Smt. Sneha A. Parekh</li>
                      <li></li>
                      <li>Shri TNV Ayyar</li>
                      <li>Shri Tushar H. Mehta</li>
                      <li>Shri Vamanrai V. Parekh</li>
                      <li>Shri Vinod M. Goradia</li>
                      <li>Shri Vinod M. Patel</li>
                      <li>Shri Vivek C. Vaidya</li>
                    </ol>
                  </td>
                </tr>
              </table>
              </TabPanel>

              <TabPanel value="4">

              <p>The executive committee has got 59 members plus Heads of institutes as Ex-Officio members. It is expected to meet every month and take decisions on various matters of policy. Our members depending upon their experience in various fields have volunteered their services to be members of these committees. SVKM as well as the institutions have benefited immensely from their expertise.</p>
              <table style={{width:'100%'}}>
                <tr>
                  <td>
                    <ol>
                      <li>Shri Amrish R. Patel</li>
                      <li>Shri Bhupesh R. Patel</li>
                      <li>Shri Bharat M. Sanghvi</li>
                      <li>Shri Chintan A. Patel</li>
                      <li>Shri Sunandan R. Divatia</li>
                      <li>Dr. Jayant P. Gandhi</li>
                      <li>Shri Shalin S. Divatia</li>
                      <li>Shri Harshad H. Shah</li>
                      <li>Shri Harit H. Chitalia</li>
                      <li>Shri Jagdish B. Parikh</li>
                      <li>Shri Amit B. Sheth</li>
                      <li>Shri Amit Desai</li>
                      <li>Shri. Ankit Parekh</li>
                      <li>Shri Anand K. Pandit</li>
                      <li>Shri Ashwin Dani</li>
                      <li>Shri Bhargav N. Patel</li>
                      <li>Shri Bhupesh P. Bafna</li>
                      <li>Shri Girish S. Mehta</li>
                      <li>Shri Harshad B. Kawa</li>
                      <li>Harish J Patel</li>
                      <li>Shri Jagat A. Killawala</li>
                      <li>Shri Jagdish B. Parikh</li>
                    </ol>
                  </td>

                  <td>
                    <ol start="23">
                      <li>Shri Jayesh P. Choksi</li>
                      <li>Smt. Jayshree A Patel </li>
                      <li>Shri Jesus Lall</li>
                      <li>Shri Kirit P. Mehta</li>
                      <li>Smt. Ketki M Patel</li>
                      <li>Smt. Kruti B Patel</li>
                      <li>Shri Maherdas J. Patel</li>
                      <li>Smt. Manju D. Gupta</li>
                      <li>Shri Mukesh A. Shah</li>
                      <li>Shri Mukesh H. Patel</li>
                      <li>Shri Mukul P Patel </li>
                      <li>Shri Naresh K. Sheth</li>
                      <li>Shri Nayan M. Patel</li>
                      <li>Shri Nimir K. Mehta</li>
                      <li>Shri Pruthviraj C. Shah</li>
                      <li>Shri Pravin H Doshi</li>
                      <li>Shri Rajendra K. Shah</li>
                      <li>Shri Rajgopal C. Bhandari</li>
                      <li>Shri  Ranjeet Dudeja</li>
                      <li>Shri Rajiv M. Sanghvi</li>
                      <li>Shri Rajnikant S. Ajmera</li>
                      <li>Shri Sanjay A. Desai</li>
                    </ol>
                  </td>

                  <td>
                    <ol start="45">
                      <li>Smt. Sarla H. Doshi</li>
                      <li>Smt. Saroj Rao</li>
                      <li>Shri Shailesh M. Patel</li>
                      <li>Smt. Sneha A. Parekh</li>
                      <li>Shri Sunil N. Dalal</li>
                      <li>Shri TNV Ayyar</li>
                      <li>Shri Tushar H. Mehta</li>
                      <li>Shri Vasantrai D. Gandhi</li>
                      <li>Shri Vijay I. Patel</li>
                      <li>Shri Vinod K. Goenka</li>
                      <li>Shri Vinod M. Goradia</li>
                      <li> Shri Vinod M. Patel</li>
                      <li>Shri Vivek C. Vaidya</li>
                      <li>Smt. Zainab R. Chauhan</li>
                      <li>Shri Asoke Basak</li>
                      <li>Shri Mohan Awate</li>
                      <li>Shri Anil K. Bapat</li>
                      <li>Shri Nilesh M. Mohile</li>
                      <li>Shri Deepak Golwala (Spl. Invitee)</li>
                      <li>Shri Jai Chinai (Spl. Invitee)</li>
                      <li>Shri Rajesh V. Shah (Spl. Invitee)</li>
                    </ol>
                  </td>
                </tr>
              </table>
              </TabPanel>

             
            </TabContext>
          </Box>
        </div>
  
      </div>
    )
  }
  export default AboutSVKM