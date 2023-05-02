import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Landing_Comp_Engg from '../Assets/Landing_Comp_Engg.png'
import Landing_CE from '../Assets/Landing_CE.png'
import Landing_IT from '../Assets/Landing_IT.png'
import Landing_ME from '../Assets/Landing_ME.png'
import Landing_EE from '../Assets/Landing_EE.png'
import Landing_CHE from '../Assets/Landing_CHE.jpg'
import Landing_PE from '../Assets/Landing_PE.png'
import Landing_EXTC from '../Assets/Landing_EXTC.png'
import { Link } from 'react-router-dom';
import './Landing_Departments.css'
const Landing_Dept = () => { 
  return (
    <div className='DeptBody' style={{backgroundColor:'#F5F6F6'}}>
    <h1 style={{ textAlign:'center', width:'100%',padding:'20px'}}>Our Departments<br/></h1>
    <div style={{backgroundColor:'#F5F6F6', display:'flex'}}>
      <Carousel className="dept-cards" >
        <Carousel.Item className="dept-cards" interval={3000}>
      <Card sx={{height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 25px 40px 50px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_Comp_Engg}
        
      />
      <CardContent style={{marginTop:'20px'}}>
        <Typography  >
          <b>Diploma in Computer Engineering</b>
        </Typography>
        <Typography  color="text.secondary">
        The emphasis of the course is on Computer Education at a Technical Level covering Knowledge of Software : Programming Languages, System Analysis and Design, Database, Concepts of Operating System, Hardware...
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/computerengg'>Read More</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 25px 40px 25px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_IT}
        
      />
      <CardContent style={{marginTop:'20px'}}>
        <Typography  >
          <b>Diploma in Information Technology</b>
        </Typography>
        <Typography  color="text.secondary">
        The emphasis of the course is on Information Technology with computer education at a Technician level covering knowledge of Software : Programming languages, System Analysis and Design, Database, Concepts of Operating Systems, Data structure communication related topics, Internet, Entrepreneurship...
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none',color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/informationtech'>Read More</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 50px 40px 25px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_CE}
        
      />
      <CardContent style={{marginTop:'20px'}}>
        <Typography  >
          <b>Diploma in Civil Engineering</b>
        </Typography>
        <Typography  color="text.secondary">
        Civil Engineering covers Materials of Construction, Use of Surveying and Levelling Instruments, Civil Engineering Drawing and Methods of Construction
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/civilengg'>Read More</Link></Button>
      </CardActions>
    </Card>
    </Carousel.Item>
    <Carousel.Item className="dept-cards" interval={3000}>
      <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 25px 40px 50px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_ME}
        
      />
      <CardContent>
        <Typography  >
          <b>Diploma in Mechanical Engineering</b>
        </Typography>
        <Typography  color="text.secondary">
        The Diploma Course in Mechanical Engineering lays emphasis on manufacturing in engineering industries. Syllabus covers subjects such as Work Study, Production Management, Process Engineering, Tool Design, Mechanism, Power Engines, Refrigeration and Air-conditioning, Hydraulic Machinery, Machine Design Practice and Entrepreneurship.
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/mechanicalengg'>Read More</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 25px 40px 25px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_EE}
        
      />
      <CardContent>
        <Typography  >
          <b>Diploma in Electrical Engineering</b>
        </Typography>
        <Typography  color="text.secondary">
        This Course lays emphasis on Electricity Generation, Distribution and Utilization. It covers subjects like Electricity Fundamentals, Electrical Engineering Materials, Drawing and Estimation, Electrical Machines, Electrical Power Generation and Distribution, etc. 
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/electricalengg'>Read More</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 50px 40px 25px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_PE}
        
      />
      <CardContent>
        <Typography  >
          <b>Diploma in Plastic Engineering</b>
        </Typography>
        <Typography  color="text.secondary">
        The Plastics Engineering Diploma Course lays emphasis on Engineering aspects of Plastic Industry. It deals with various processes used in Plastic Processing Machinery, Mould Design and Fabrication and Plastic Testing with sufficient knowledge of properties of Plastic material.
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/plasticengg'>Read More</Link></Button>
      </CardActions>
    </Card>
    </Carousel.Item>
    <Carousel.Item className="dept-cards" interval={3000}>
      <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 25px 40px 50px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_CHE}
        
      />
      <CardContent>
        <Typography  >
          <b>Diploma in Chemical Engineering</b>
        </Typography>
        <Typography  color="text.secondary">
        The Diploma course in chemical engineering deals with various aspects of chemical industry, such as, Unit operations, Process Technology of Important Commercial Chemicals, Process Control and Instrumentation, Maintenance and Material Handling. 
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/chemicalengg'>Read More</Link></Button>
      </CardActions>
    </Card>
    <Card sx={{ height:'550px', maxWidth: '28%' ,backgroundColor:'#addbe2', padding:'10px', float:'left', margin:'10px 25px 40px 25px'}}>
      <CardMedia
        backgroundColor='#d9ddde'
        component="img"
        alt="green iguana"
        height="200"
        image={Landing_EXTC}
        
      />
      <CardContent>
        <Typography  >
          <b>Diploma in Electronics and Telecommunication</b>
        </Typography>
        <Typography  color="text.secondary">
        Electronics and Telecommunications Engineering deals with analoganddigital transmission/ reception of video, voice and data. The curriculum focuses on courses likeBasic Electronics,Communication Engineering, Microcontrollers,Satellite Communication,  Antenna and Wave propagation,  Mobile Communication and Optical Fibre.
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        <Button size="small"><Link style={{textDecoration:'none', color:'white',height:'25px',width:'100px',backgroundColor:'#034954'}} to='/electronicstelecom'>Read More</Link></Button>
      </CardActions>
    </Card>
    </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Landing_Dept
