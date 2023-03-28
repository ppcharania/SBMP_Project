import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.png'
import SBMPLogo from '../Assets/SBMPLogo.png'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../Assets/One.png';
import Slider2 from '../Assets/Two.png';
import Slider3 from '../Assets/Three.png';
import { Brightness1 } from '@mui/icons-material'

const Header = () => {
  return (
    <div >
    <div>
    <Carousel fade style={{width:"100%"}}>
      <Carousel.Item>
        <img height={"500px"} style={{filter:"brightness1(75%)"}}
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div style={{paddingBottom:"150px"}}><h4>Shri Vile Parle Kelvani Mandal's</h4>
          <b><h1>Shri Bhagubhai Mafatlal Polytechnic</h1></b></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={"500px"} style={{filter:"brightness1(75%)"}}
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div style={{paddingBottom:"150px"}}><h4>Shri Vile Parle Kelvani Mandal's</h4>
          <b><h1>Shri Bhagubhai Mafatlal Polytechnic</h1></b></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={"500px"} style={{filter:"brightness1(75%)"}}
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div style={{paddingBottom:"150px"}}><h4>Shri Vile Parle Kelvani Mandal's</h4>
          <b><h1>Shri Bhagubhai Mafatlal Polytechnic</h1></b></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* <div className='Static_sbmp_header'><Link to="/"><img className='Logo1' src={Logo}></img>
      <span>Shri Bhagubhai Mafatlal Polytechnic</span>
      <img className='Logo2' src={SBMPLogo}></img></Link>
    </div> */}
    </div>
    
  )
}

export default Header