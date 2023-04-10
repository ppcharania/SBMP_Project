import React from 'react'
import SideNav from './SideNav'
import EOA1 from '../../Assets/AboutUs/EOA1.pdf'
import EOA2 from '../../Assets/AboutUs/EOA2.pdf'
import EOA3 from '../../Assets/AboutUs/EOA3.pdf'
import EOA4 from '../../Assets/AboutUs/EOA4.pdf'


const ExtensionofApproval = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}>
        <h4>Extension of Approval</h4>
        <hr class="solid"></hr>

        <ul>
          <li>Extension of Approval (EoA) 1993</li>
          <a href={EOA1}>Click Here</a>
          <li>Extension of Approval (EoA) 2020-2021</li>
          <a href={EOA2}>Click Here</a>
          <li>Extension of Approval (EoA) 2021-2022</li>
          <a href={EOA3}>Click Here</a>
          <li>Extension of Approval (EoA) 2022-2023</li>
          <a href={EOA4}>Click Here</a>
        </ul>
        
      </div>
    </div>


  )
}

export default ExtensionofApproval