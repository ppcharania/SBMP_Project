import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button'
const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FacebookIcon fontSize='medium' />
          </a>
          <a href='' className='me-4 text-reset'>
            <InstagramIcon fontSize='medium' />
          </a>
          <a href='' className='me-4 text-reset'>
            <TwitterIcon fontSize='medium' />
          </a>
          <a href='' className='me-4 text-reset'>
            <LinkedInIcon fontSize='medium' />
          </a>
          <a href='' className='me-4 text-reset'>
            <GoogleIcon fontSize='medium' />
          </a>
          <a href='' className='me-4 text-reset'>
            <GitHubIcon fontSize='medium' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              SVKM's Shri Bhagubhai Mafatlal Polytechnic
              </h6>
              <p>
                <PhoneIcon/>022-42336000 (Office)
              </p>
              <p>
                <PhoneIcon/>022-42336022 (Direct)
              </p>
              <p>
                  <EmailIcon/>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='4' className='mx-auto mb-4'>
            <h6 style={{marginLeft:'100px'}} className='text-uppercase fw-bold mb-4'>
              Contact Us
              </h6>
              <form action="/action_page.php">
                <label for="name">Name:</label>
                <input type="text" id="fname" style={{float:'right'}}/><br/><br/>
                <label for="phone">Phone Number:</label>
                <input type="phone" id="phn" style={{float:'right'}}/><br/><br/>
                <label for="feedback">Feedback/Query:</label>
                <textarea rows="4" cols="20" name="comment" style={{float:'right'}}></textarea><br/><br/><br/><br/><br/><br/>
                <center><Button variant="contained" style={{backgroundColor:'#034954'}}>Submit</Button></center>
              </form>
            </MDBCol>
            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              
              <div class="mapouter" style={{position:"relative",textAlign:"center",width:"200px",height:'400px', marginBottom:'10px'}}><div class="gmap_canvas" style={{overflow:"hidden",width:"400px",height:"400px"}}><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=360&amp;hl=en&amp;q=SVKM's Shri Bhagubhai Mafatlal&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{height:"360px"}}></iframe></div></div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 SVKM's Shri Bhagubhai Mafatlal Polytechnic. All rights reserved.
      </div>
    </MDBFooter>




  );
}

export default Footer