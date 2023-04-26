import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../Assets/One.png';
import Slider2 from '../Assets/Two.png';
import Slider3 from '../Assets/Three.png';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png'
import SBMPLogo from '../Assets/SBMPLogo.png'

const Header = () => {
  return (
    
    <div >
      <div className='Static_sbmp_header' ><Link to="/"><img className='Logo1' src={Logo} alt = 'Logo1'></img>
        <div className='title' >Shri Bhagubhai Mafatlal Polytechnic</div>
        <img className='Logo2' src={SBMPLogo} alt = "logo2"></img></Link>
      </div>
    <div className = "Cr1">
    <Carousel className='Carousel1' fade>
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
    
    </div>
    
  )
}

export default Header