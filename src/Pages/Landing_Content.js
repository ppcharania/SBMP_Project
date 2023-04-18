import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Landing_Cont.css";
import Landing_CSI from '../Assets/Landing_CSI.png'
import Landing_ISTE from '../Assets/Landing_ISTE.png'
import Landing_ACI from '../Assets/Landing_ACI.png'
import Landing_Info_Bro from '../Assets/Landing_Info_Bro.pdf'
import Landing_1 from '../Assets/Landing_1.pdf'
import Landing_2 from '../Assets/Landing_2.pdf'
import Landing_3 from '../Assets/Landing_3.pdf'
import Landing_4 from '../Assets/Landing_4.pdf'
import Landing_5 from '../Assets/Landing_5.pdf'
import Landing_6 from '../Assets/Landing_6.pdf'
import Landing_7 from '../Assets/Landing_7.pdf'
import Landing_8 from '../Assets/Landing_8.pdf'
// import Landing_9 from '../Assets/Landing_9.pdf'
const Landing_Content = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="body1">
      <div className="main-containerland">
        <center><h3 sx={{ color: "white"}}>Professional Chapters</h3></center>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <div style={{ position: "absolute" ,width:'400px',display:'flex',justifyContent:'space-evenly',boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px'}}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="CSI Chapter" value="1" />
                  <Tab label="ISTE Chapter" value="2" />
                  <Tab label="ACI Chapter" value="3" />
                </TabList>
              </Box>
            </div>
            <div className="containerland">
              <div className="innerland">
              <TabPanel value="1"><img src={Landing_CSI} height='150px' width='150px'/>
              <p style={{textAlign:'justify'}}>Computer Society of India, professional body, has grown to an enviable size of 100,000 strong members consisting of professionals with varied backgrounds including Software developers, Scientists, Academicians, Project Managers, CIO’s, CTO’s & IT vendors to just name a few. It has spread its branches all over the country. Currently having 488 student branches and rooted firmly at 73 different locations.  Shri Bhagubhai Mafatlal Polytechnic, Vile Parle, IT Department ,inaugurated CSI-SBMP Student branch on 5th November, 2019 .This student chapter is a great platform for our students to interact and get knowledge of emerging trends and technologies in the field of IT. Being a CSI member one can avail the opportunities like: Opportunity to participate in the international, national, regional and chapter events of CSI such as conferences, seminars, symposia, workshops, technical talks, free lectures on latest technological advancements in IT at discounted rates between 10%-50%. Chapter activities which offers a platform for networking with distinguished industry leaders, scientists, academicians.</p>
              <a target='_blank' style={{color:'white',padding:'10px',textDecoration:'none',height:'60px',width:'150px',backgroundColor:'#1976d2',margin:'20px',marginBottom:'50px'}} href='https://www.csimumbai.org/'>Know More</a>
              </TabPanel>
              <TabPanel value="2">
              <img src={Landing_ISTE} height='150px' width='150px'/><p style={{textAlign:'justify'}}>The Indian Society for Technical Education is a national, professional, non-profit making Society registered under the Societies Registration Act of 1860. First started in 1941 as the Association of Principals of Technical Institutions (APTI), it was converted into Indian Society for Technical Education in 1968 with a view to enlarge its activities to advance the cause of technological education in the country. </p>
<p style={{textAlign:'justify'}}>The Indian Society for Technical Education (ISTE) is a non-profitmaking society engaged in career development of teachers, personality development of students and overall development of technical education in our country. ISTE membership allows the teachers and students to be a part of the community that leads the transformation of education. </p><a target='_blank' style={{color:'white',padding:'10px',textDecoration:'none',height:'60px',width:'150px',backgroundColor:'#1976d2',margin:'20px',marginBottom:'50px'}} href='http://www.isteonline.in/'>Know More</a></TabPanel>
              <TabPanel value="3"><img src={Landing_ACI} height='150px' width='150px'/><p style={{textAlign:'justify'}}>This chapter was approved by ACI for formation on Dec 20,2016. The Same was established with more than required student’s members and Prof Vinod Vanvari, Head Civil Engineering Department as Faculty Advisor in Jan 2017. The following are the student centric activities organized by this student’s chapter of ACI.</p>
              <p style={{textAlign:'justify'}}>Cube testing competition</p>
              <p style={{textAlign:'justify'}}>Essay competition</p>
              <p style={{textAlign:'justify'}}>Elocution competition</p>
              <p style={{textAlign:'justify'}}>Nominating deserving students for scholarship from India Chapter of ACI since last three years.</p><a target='_blank' style={{color:'white',padding:'10px',textDecoration:'none',height:'60px',width:'150px',backgroundColor:'#1976d2',margin:'20px',marginBottom:'50px'}} href='https://icaci.com/'>Know More</a></TabPanel>
            </div>
            </div>
          </TabContext>
        </Box>
      </div>




      <div className="main-containerland">
        <center><h3 sx={{ color: "white"}}>Admissions 2022-23</h3></center>
        <Box sx={{ width: "100%", typography: "body1" }}>
            <div className="containerland1">
              <ul>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_Info_Bro}>Information Brochure</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href='https://forms.gle/uMsBZHAcHKUfkJcS9'>Admission Enquiry for Diploma Programs 2022-23</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_1}>Documents to be attached with "Appliaction Form for Centralized Admission Process"</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_2}>Documents required for First Year Post SSC and Direct Second Year Diploma Courses Admissions for the academic year 2022-23</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_3}>Maharashtra State Government Scholarship for the academicyear 2022-23</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_4}>Notice Admission Counseling Round 1</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_5}>Merit List</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_6}>Post SSC Diploma Admissions 2022-23(Institute Quota) Revised Schedule</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_7}>Distribution of Seats for First Year Diploma Admissions</a></li>
                <li><a target='_blank' style={{textDecoration:'none'}} href={Landing_8}>Undertaking for First Year Students Admission Year 2022-23</a></li>
              </ul>
            </div>
        </Box>
      </div>


    </div>
  );
};

export default Landing_Content;