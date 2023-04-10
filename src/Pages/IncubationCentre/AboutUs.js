import React from 'react'
import SideNav from './SideNav'
const AboutUs = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
       
        <h4>About Us</h4>
        <hr type="solid"></hr>
        
        <p>SVKM’s Shri Bhagubhai Mafatlal Polytechnic has created a name for itself by maintaining high standard of discipline and performance. The Polytechnic believes in organising need-based programmes and assisting in-service personnel in education and training activities. To add a crown to the academics, the polytechnic has started with the platform for entrepreneurship that is the Incubation Centre.</p>
        
        <p>Shri Bhagubhai Mafatlal Polytechnic’s Incubation Centre, Mumbai intentions at promoting entrepreneurship through converting the noble research idea into an in-service unit. This centre provides a platform to the students, faculties, alumni and all other aspiring entrepreneurs aiming to come up with ideas and technology for setting up a new business model by preparing a conducive environment.</p>
        
        <p>This entrepreneurship opportunity will facilitate the aspiring entrepreneurs to generate revenue and also provided employment openings for the fresh graduates. In this way all the activities will be inspiring contribution towards the socio - economic development of the nation, either by starting or by developing a business enterprise directly or indirectly.</p>

        <p>Lastly to give a in depth knowledge about the business set up at the initial stage, the centre intends to conduct workshops and seminars.</p>
        
      </div>
    </div>


  )
}

export default AboutUs