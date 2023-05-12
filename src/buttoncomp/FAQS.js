import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const FAQS = (props) => {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };  
  return (
    <>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize: '1rem'}}>What are the Office working hours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Office working hours in Shri Bhagubhai Mafatlal Polytechnic are from 9:00am to 4:00pm
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize: '1rem'}}>Difference between Aided and Unaided Courses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The courses that gets aid from the government(MSBTE) is termed as aided courses(Civil, Mechanical, Electrical, Industrial, Plastics, Chemical, Digital, EXTC) 
          whereas the courses that does not get any funds or aid from the MSBTE is called as unaided course(CSE and IT).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style={{fontSize: '1rem'}}>How to get admitted in SBMP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To get admitted in SBMP one can follow rules on MS DTE through state level admission procedure 
            (CAP) rounds or get sanctioned through institute level admissions for unaided courses.
            For more info click on link below: 
            <Link to='/admissions'>Admission Details</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography style={{fontSize: '1rem'}}>What are the College Timings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            College timings are usually 7:00am to 4:00pm
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
export default FAQS;