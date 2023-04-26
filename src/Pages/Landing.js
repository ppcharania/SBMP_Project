import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RArr from '@mui/icons-material/KeyboardDoubleArrowRight';
import LArr from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Notice1 from '.././Assets/Notice1.pdf'
import Notice2 from '.././Assets/Notice2.pdf'
import Landing_Dept from './Landing_Departments'
import Landing_Cont from './Landing_Content';
import Landing_Palcement from './Landing_Placement';
import Landing_Notices from './Landing_Notices';
const Landing = () => {
  return (
    <div>
      <div className='Marquee' style={{backgroundColor:'#60b4df',margin:'5px 0',padding:'2px',display:'grid', gridTemplateColumns:'repeat(7)'}}>
        <div style={{gridColumnStart:'1',gridColumnEnd:'1'}}>Notices</div>
        <div style={{gridColumnStart:'2',gridColumnEnd:'7'}}><marquee id='mymarquee' style={{outerWidth:'100%'}}><RArr/><a target='_blank' style={{textDecoration:'none', color:'white'}} href={Notice1}>Azadi ka amrut mahotsav Sandesh</a><LArr style={{marginRight:'30px'}}/><RArr/><a target='_blank' style={{textDecoration:'none', color:'white'}} href={Notice2}>Notice for Students 2022 - 2023(Term Jan 2023 - May 2023)</a><LArr/></marquee></div>
        <div style={{gridColumnStart:'7',gridColumnEnd:'7'}}><button className="stop_marquee" onClick={ e =>document.getElementById('mymarquee').stop()}><PauseIcon/></button><button className="start_marquee" onClick={ e =>document.getElementById('mymarquee').start()}><PlayArrowIcon/></button></div>
      </div>
      <Landing_Dept/>
      <Landing_Cont/>
      <Landing_Notices/>
      <Landing_Palcement/>
      
    </div>
  )
}

export default Landing