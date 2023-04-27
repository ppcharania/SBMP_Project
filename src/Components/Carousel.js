import * as React from 'react';
import {Carousel} from "react-bootstrap"
import { useLocation } from 'react-router-dom';

import Slider1 from '../Assets/One.png';
import Slider2 from '../Assets/Two.png';
import Slider3 from '../Assets/Three.png';

export default function PageCarousel(){
    const {pathname} = useLocation()
    if (pathname !== "/"){
        return null
    }


    return (
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
    )    
}