import React from 'react'
import SideNav from './SideNav'
import IC_Apply from '../../Assets/IC/IC_ApplicationForm.pdf'

const HowToApply = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>How To Apply</h4>
        <hr type="solid"></hr>

        <b>Who can be an Incubatee?</b>
        <p>Any start-up or any individual having a novel business idea. The proposed idea for incubation 
        must be innovative. However, if a similar product/service already exists in the market then a 
        value addition must be proposed. The minimum academic qualification should be at least 10th
        pass.</p>

        <b>Selection and Screening of Incubatees</b>
        <p>Selection of Incubatees will be carried out by the Incubation Centre after gaining clarity about 
        goals, purpose, and areas of interests. The Screening Committee will consist members from 
        eminent academicians, industrial heads, business owners, innovators and investors.</p>

        <b>Application Form</b><br></br>
        <a href = {IC_Apply}>Click Here</a>
      </div>
    </div>


  )
}

export default HowToApply