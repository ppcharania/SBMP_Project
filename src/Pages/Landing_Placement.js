import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Landing_LT from '../Assets/Landing_LT.png'
import Landing_Mahindra from '../Assets/Landing_Mahindra.png'
import Landing_AirInd from '../Assets/Landing_AirInd.png'
import Landing_BARC from '../Assets/Landing_BARC.png'
import Landing_Godrej from '../Assets/Landing_Godrej.png'
import Landing_Jet from '../Assets/Landing_Jet.png'
import Landing_Reliance from '../Assets/Landing_Reliance.png'
import Landing_Tata from '../Assets/Landing_Tata.png'
import Lanidng_TataPow from '../Assets/Landing_TataPow.png'
import Landing_Voltas from '../Assets/Landing_Voltas.png'
import { Link } from 'react-router-dom';


const Landing_Placemnet = () => {
  return (
    <div >
      <div className='Marquee2' style={{height:'270px',backgroundColor:'lightgrey',margin:'40px 0',padding:'20px'}}>
      <h2>Prominent Placement industries</h2>
        <div><marquee scrollAmount='15' id='mymarquee2' style={{outerWidth:'100%',Animation: 'marquee 10s linear infinite'}}>
          <img src={Landing_LT} style={{marginRight:'25px'}}/>
          <img src={Landing_Mahindra} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_Tata} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_Reliance} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_AirInd} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_Voltas} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_BARC} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Lanidng_TataPow} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_Godrej} style={{height:'150px',width:'350px',margin:'0px 25px'}}/>
          <img src={Landing_Jet} style={{height:'150px',width:'350px',margin:'0px 50px 0px 25px'}}/>
        </marquee></div>
        <Link style={{color:'white',textDecoration:'none',float:'right',height:'30px',width:'150px',backgroundColor:'#73c2fb',margin:'10px'}} to='/placementcell'>And Many More</Link>
      </div>
      
      
    </div>
  )
}

export default Landing_Placemnet