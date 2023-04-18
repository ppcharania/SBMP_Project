import React from 'react'
import SideNav from './SideNav'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import President from '../../Assets/AboutUs/President.jpg'
import Chairman from '../../Assets/AboutUs/Chairman.jpg'
import Principal from '../../Assets/AboutUs/Principal.jpg'
import SBMP from '../../Assets/AboutUs/SBMP.jpg'
import SBMPlogo from '../../Assets/AboutUs/SBMPlogo.jpg'

  const AboutSBMP  = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className='FullPage' style={{display:'flex'}}>
        <SideNav/>
        <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4 style={{paddingTop:'10px'}}>About SBMP</h4>
        <hr type="soild"></hr>

          <Box sx={{ width: '100%', typography: 'body1'}}>
          <Box sx={{ width: '100%',height: '100%', typography: 'body1'}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Overview" value="1" />
                  <Tab label="Vission & Mission" value="2" />
                  <Tab label="President's Message" value="3" />
                  <Tab label="Chairman's Message" value="4" />
                  <Tab label="Principal's Message" value="5" />
                  <Tab label="Managing Council" value="6" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <h5>About Shri Bhagubhai Mafatlal Polytechnic</h5>
              
                <p>Shri Vile Parle Kelavani Mandal established this Polytechnic in 1963 with a munificent donation of RS. 7,50,000/- from Shri Arvind N. Mafatlal and his brothers and named the same after their uncle Shri Bhagubhai Mafatlal.</p>
                <img src={SBMPlogo} style={{width:'200px', height:'180px', float:'left'}}></img> 
                <p>Mafatlal family and their industries have taken keen interest in developing the same and given financial support which stands at RS. 43,26,000/- at present. The Polytechnic receives Grants and Project fund from the State and Central Governments for establishing facilities and developing its infrastructures. The Polytechnic has developed excellent interaction and liaison with industries and has received financial support for a variety of projects and towards equipment support.</p>

                <p>S.B.M. Polytechnic has created a name for itself by maintaining high standard of discipline and performance. The Polytechnic believes in organising need-based programmes and assisting in-service personnel in education and training activities. The Polytechnic has developed Sandwich Programmes and has diversified its conventional programmes initiated in 1963 into variety of discipline areas as First Level as well as Post-Diploma Level along with in-service programmes. The Polytechnic is a grant-in-aid autonomous institution affiliated to the Maharashtra State Board of Technical Education. The Polytechnic is being managed by the duly constituted Managing Council.</p>

                <b>Location, Environment and Buildings</b>
                <img src={SBMP} style={{width:'380px', height:'200px', float:'right', padding:'10px'}}></img>
                <p>The Polytechnic is located on Road No. 3 crossing Swami Vivekanand Road, Vile Parle (West) at a distance of about two and half km on the west of either Vile Parle or Andheri Railway Station on the Western Railway. The Polytechnic may be reached by a three minutes walk from the Irla Naka Bus Stop. It is bounded on the north by Smt. Chandaben Mohanbhai Patel Homeopathic Medical College, on the east by offices of the Khadi & Village Industries Commission and on the west by the Dr. R. N. Cooper Municipal General Hospital Building. The Narsee Monjee College of Commerce & Economics, the Mithibai College of Arts and Chauhan Institute of Science are situated nearby on the south of Polytechnic. Bus routes available from Andheri Rly. Station (West) are 4 Ltd., 84 Ltd., 202 Ltd., 358 Ltd., 201, 253. The ground plus Five storeyed building of the Polytechnic houses the Administrative Offices, Class rooms, Library, Laboratories, Drawing Halls, Computer Centres, Staff-rooms, Engineering Workshops, as well as Canteen, Staff Club and Staff and Students’ Common Rooms.</p>

                <b>Objectives</b>
                <p>Over the years, objectives of S.B.M.P. have been to initiate, develop and conduct need-based programmes  so as to develop Technical, Managerial and Entrepreneurial skills.
                S.B.M. Polytechnic aims at upgrading and updating qualification skills and knowledge of technicians already working in the industry  through Continuing Education Programmes and Part Time Diploma Programmes.
                S.B.M.Polytechnic`s mission is to establish and provide a comprehensive, full equipped training facility in advance technological fields and to cater to industry needs of specialized skills in the emerging high-tech areas</p>

                  <b>For achieving these, SBMP strives to</b>
                  <ol type='a'>
                    <li>Develop better approach, skills and attitude to work</li>
                    <li>Bridge Theory-Practice gap and stress on Application and Utility of Programmes.</li>
                    <li>Ensure participating and association of Faculty through Staff Development Activities.</li>
                    <li>Promote Institute Industry Interaction for mutual help.</li>
                  </ol>
              </TabPanel>

              <TabPanel value="2">
              <h5>Vision</h5>
              <p>SBMP Polytechnic aspires to be the lead institute in providing need based technical education.</p>
            z
            
              <h5>Mission</h5>
              <ul type='none'>
                <li>M1: To provide state-of-the-art infrastructure and latest equipments for providing a stimulating learning environment.</li>
                <li>M2: To prepare students to meet the dynamic needs of the industry by periodic reviewing and upgradation of curriculum through an interactive process with industry.</li>
                <li>M3: To inculcate a spirit of excellence in terms of academic performance, research and innovation in faculty by providing appropriate support and incentive systems.</li>
                <li>M4: To promote and support Co-Curricular, extra-curricular activities and industry interaction to make students socially sensitive and employable.</li>
              </ul>

              </TabPanel>

              <TabPanel value="3">
              <img src={President} style={{width:'180px', height:'200px', float:'right', padding:'10px'}}></img> 
              <p>India is rapidly transforming from agri-based to service sector economy. Over the last five years, Indian economy has witnessed steady growth in Indian GDP. Having witnessed this growth, India now stands at the door of unprecedented opportunities to realize not just an incremental but a transformational   growth. The greatest challenge before us to make this growth all -inclusive and to ensure that the benefits are available to all sections of society. Such growth with inclusive objective demands enhancement of the quality of education, healthcare, rural development infrastructural facilities. This is a challenge that captivates the best minds of India over the years.</p>

              <p>A crucial factor for realizing the rising expectations and aspiration for the future growth of India is the spread of technical education and effective use of modern science and technology. In Indian society science and technology has to play vital role in solving many problem relating to water irrigation, healthcare, communication and transport and energy supply that severely affect the quality of life.   In  the realization   of   this inclusive  growth the role  of  technical education  and  institutional  measures  are of paramount  importance.</p>

              <p>In all these  years, SVKM  along with  its  S.B.M.Polytehcnic  and  other  technical educational institutions ,   always tried to   enhance quality of education  and ensure  the transfer of  knowledge  to grass roots of the society .  From last fifty years our S.B.M.polytehnic is always at the front in establishment   and implementation of many best practices in technical education which are ultimately beneficial to societal growth and development.   I am confident that our S.B.M.Polytechnic will continue  with this great task with great vigor in the coming years.<br></br><br></br>

              With heartiest Wishes<br></br>

              <b>AMRISH PATEL </b><br></br>
              <b>President, SVKM</b>
              </p>

              </TabPanel>

              <TabPanel value="4">
              <img src={Chairman} style={{width:'180px', height:'200px', float:'right', padding:'10px'}}></img>
              <p>Dear students,<br></br>
              Greetings and a very warm welcome to SBMP!!<br></br> 
              SBM Polytechnic is an institute with glorious past, an enviable present and a promising future.</p>

              <p>With SVKM as our parent organization, we are confident that with state of art infrastructure, the learned and experienced faculty members, we will continue to emerge as a brand in the field of Diploma Engineering Education.</p>

              <p>S.B.M.P. has diversified its conventional programmes initiated in 1963 into variety of disciplines. The Polytechnic is a grant-in-aid autonomous institution affiliated to the Maharashtra State Board of Technical Education. The Polytechnic is being managed by the duly constituted Managing Council. Our glorious past and trail blazing presence makes S.B.M.P. a leading polytechnic which sets its own benchmark.</p>

              <p>We impart value-based quality education ensuring a fruitful and happy outcome of their academic pursuits. The institute revises and designs its own curriculum. The process of developing curriculum involves in consultation with the stakeholders like industry experts, academicians, alumni, parents and students. Each revision of the curriculum is benchmarked by industry. Industrial training is the part of curriculum, with this, all the students get exposure to the latest trends in technology. Students from various programmes are involved in the multidisciplinary projects such as Quad Bike, flying Drones and many more industry sponsored projects.</p>

              <p>SBMP stands committed to the practice of academic freedom and encourages cultural diversity as it continues to attract students and faculty. We have built a system which is strong and focused, with emphasis on clear and open communication with parents and students. We always keep in mind the fact that the welfare of our students has a direct effect on the well-being of   parents and so, in practice, we operate an open-door policy of communication. We try to resolve the problems faced by students, by assigning mentors to the individual student and having counsellor at the SVKM level. We are flexible and understanding, promise to work around difficulties which may arise in the lives of our precious young students.  We have   set our goals high   for each of our students in terms of their learning outcome at the institute.</p>

              <p>With the support of management, qualified and experienced faculty members and being autonomous institute, SBMP has achieved a remarkable status amongst its peer institutes within and outside the state of Maharashtra. Teachers with high moral values engage in pedagogy that is characterized by positive, proactive, and solution-focused orientations, resulting in increased student motivation and engagement. Our faculty members are trained rigorously to keep up with changing technology.</p>

              <p>I would like you all to take advantage of this great opportunity and join us in our endeavours to actively contribute to the overall improvement of the society. Come join hands to create competent engineers who come in as fledglings and then soar high and contribute technological solutions to the world. To describe what I envisage for this institute I quote from Ravindranath Tagore</p>

              <p style={{textAlign: 'Center'}}>Where the mind is  without fear and the head is held high<br></br>
              Where knowledge is free<br></br>
              Where the world has not been broken up into fragments<br></br>
              By narrow domestic walls<br></br>
              Where words come out from the depth of truth<br></br>
              Where tireless striving stretches its arms towards perfection<br></br>
              Where the clear stream of reason has not lost its way<br></br>
              Into the dreary desert sand of dead habit<br></br>
              Where the mind is led forward by thee<br></br>
              Into ever-widening thought and action<br></br>
              Into  that heaven of freedom, my Father, let my country awake<br></br></p>

              With Best Wishes!!<br></br>
              <b>Amit Sheth</b><br></br>
              <b>Chairman-Managing Council and Mentor</b>
              </TabPanel>

              <TabPanel value="5">
              <img src={Principal} style={{width:'180px', height:'200px', float:'right', padding:'10px'}}></img> 
              <p><b>“Education is not the learning of facts, but the training of the minds to think”- Albert Einstein</b> <br></br>It is certainly a matter of pride to be a part of SBMP, the second oldest institute under the aegis of SVKM, having long legacy in the field of technical education. Our primary aim is to provide state-of -the-art infrastructural facilities like laboratories, library, and classrooms for the holistic professional development of our students.</p>

              <p>We at S.B.M.Polytechnic make every an effort to meet the demands of advancing technology by producing high quality technicians who can be worthy of service to the industry, the society and the nation.  It is our goal to strive hard to enhance quality of technical education in order to meet the futuristic manpower requirements of the industry. We continuously endeavour to improve our performance and to grow into one of the best polytechnic for the engineering education in the state.</p>

              <p>Our experienced & dedicated faculty go beyond the curriculum to give our students valuable insights required in the real life. We are fortunate to have a very progressive Management which has always rendered their support and guidance for the image building of the polytechnic.</p>

              <p>Being a head of the polytechnic, I welcome talented minds to come and be the part of this institute, with glorious past and promising future ahead.</p>
              
              <b>Dr.Mohd. Zafar Shaikh</b><br></br>
              <b>Principal, Shri Bhagubhai Mafatlal Polytechnic</b>
              </TabPanel>

              <TabPanel value="6">
              <table style={{width:'100%'}}>
                <tr>
                  <td><b>Representatives of Shri Vile Parle Kelavani Mandal</b></td>
                  <td>Shri Amit Balwant Sheth, Chairman<br></br>
                      Shri Nayan Patel<br></br>
                      Shri Hiten V.Parekh<br></br>
                      Shri Asoke Basak<br></br>
                      Dr. Madhav N.Welling<br></br>
                      Dr. Sharad Mhaiskar<br></br>
                      Dr. D.J.Shah
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Member,Industry Representative</b></td>
                  <td>  Mr. Hemant Minocha<br></br> MD, Rajiv Plastics, Mumbai</td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Representative of the State Government</b></td>
                  <td>  Dr. Abhay Wagh<br></br>Director, Directorate of Technical Education, Maharashtra State
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Representative of the Maharashtra State Board of Technical Education</b></td>
                  <td> Dr. Vinod Mohitkar<br></br>Director, Maharashtra State Board of Tech.Education</td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Representative of Central Government</b></td>
                  <td> Shri  P.N.Jumle<br></br>Director, Board of Apprenticeship Training (W.R.)</td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Representative of the All India Council for Technical Education</b></td>
                  <td> Dr. Ajeet Singh<br></br> Regional Officer& Assistant Director, All India Council for Technical Education (WesternRegion)</td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Expert Members nominated by the State Government/AICTE</b></td>
                  <td></td>
                </tr>
                <br></br>
                <tr>
                  <td><b>Ex-Officio-Secretary-Principal</b></td>
                  <td> Dr. M.Z.Shaikh</td>
                </tr>
              
              </table>
              </TabPanel>
            </TabContext>
          </Box>
          </Box>
        </div>
  </div>
    )
  }
  export default AboutSBMP