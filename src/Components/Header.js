import React from 'react'
import './Header.css'
import { Link, useLocation} from 'react-router-dom';
import Logo from '../Assets/Logo.png'
import SBMPLogo from '../Assets/SBMPLogo.png'

const Header = () => {
  const {pathname} = useLocation()
  if (pathname === "/"){
    return null
  }

  return (
    
    <div >
      <div className='Static_sbmp_header' ><Link to="/"><img className='Logo1' src={Logo} alt = 'Logo1'></img>
        <div className='title' style={{color:'#041c9c', fontSize:'30px'}} ><b>Shri Bhagubhai Mafatlal Polytechnic</b></div>
        <img className='Logo2' src={SBMPLogo} alt = "logo2"></img></Link>
    </div>
    </div>
    
  )
}

export default Header