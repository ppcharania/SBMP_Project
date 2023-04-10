import React from 'react'
import SideNav from './SideNav'
const Overview = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        <h4>Overview</h4>
        <hr type="Solid"></hr>
        <b>Community Development Through Polytechnic Scheme</b>
        <ul>
          <li>India is a vast country with a population of approximately 115 crore. 75% of India’s population lives in about six lac villages. While resourceful people, particularly those living in urban areas, have had access to better education and professional training, but vast majority of those who live in rural areas and slums are lesser educated and hardly undergo any technical, professional and vocational training.</li>
          <li>For most of such people, quality education and higher technical and professional education is unaffordable. In terms of career options, such lesser educated and not so fortunate people tend to work in low paid unorganized sector. In an increasingly competitive economic environment of our country, the unorganized sector, which is so important for the country, needs to increase the productivity of its manpower for its survival and growth.</li>
          <li>There is, therefore, an urgent need to train millions of persons every year through a countrywide network of non-formal skill development. Such non-formal skill training should attract beneficiaries from all cross-sections of Indian society with special emphasis on SCs/STs, OBCs, women, school dropouts, minorities, physically disabled, economically weaker sections of the society and other under-privileged persons.</li>
          <li>SBM Polytechnic being one of the main center have established five extension centers in the rural area at Patilpada, Shirgaon, Sukhapur, Borigaon and Saphale. Throughout the year different skill oriented courses of three to six months duration has been conducted free of cost, in the field of House Wireman, Electrical Home Appliance Repairing, Linux-Operating System, Tailoring and Stitching,Hand Embroidery, Beauty Culture, Candle Making, Welding, Computerized Data Processing etc.  Different types of Need Assessment Survey have been carried out to know the need of society and industry. Based on this, Skill Development Training Program has been imparted and around 300 to 400 male and female participants got trained every year.</li>
        </ul>
        
      </div>
    </div>


  )
}

export default Overview