import React from 'react'
import SideNav from './SideNav'
import Carousel from 'react-bootstrap/Carousel'
import lab0 from '../../Assets/AboutUs/lab.jpg'
import lab1 from '../../Assets/AboutUs/lab1.jpg'
import lab2 from '../../Assets/AboutUs/lab2.jpg'
import lab3 from '../../Assets/AboutUs/lab3.jpg'
import lab4 from '../../Assets/AboutUs/lab4.jpg'
import lab5 from '../../Assets/AboutUs/lab5.jpg'
import lab6 from '../../Assets/AboutUs/lab6.jpg'
import lab7 from '../../Assets/AboutUs/lab7.jpg'
import lab8 from '../../Assets/AboutUs/lab8.jpg'
import lab9 from '../../Assets/AboutUs/lab9.jpg'
import lab10 from '../../Assets/AboutUs/lab10.jpg'
import lab11 from '../../Assets/AboutUs/lab11.jpg'
import Auditorium1 from '../../Assets/AboutUs/Auditorium1.jpg'
import Auditorium2 from '../../Assets/AboutUs/Auditorium2.jpg'
import Library1 from '../../Assets/AboutUs/Library.jpg'
import Library2 from '../../Assets/AboutUs/Library1.jpg'
import Classroom from '../../Assets/AboutUs/Classroom.jpg'
import Gymkhana from '../../Assets/AboutUs/Gymkhana.jpg'

const Infrastructure = () => {
  return (
    <div className='FullPage' style={{display:'flex'}}>
      <SideNav/>
      <div style={{float:'left', width:'70%', paddingLeft:'10px', textAlign:'left'}}> 
        
        <h4 style={{paddingTop:'10px'}}>Infrastructure</h4>
        <hr class="solid"></hr>

        <b>Library</b>
        <Carousel fade style={{width:"50%", float:'right'}}>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Library1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Library2}
              alt="First slide"
            />
          </Carousel.Item>
          
        </Carousel>
        <p>S.B.M.Polytechnic has huge state of art library with a large collection of Reference Books, Text Books, Technical reports, Literature books. The library has over 19 international journals and 16 national journals along with regional and national newspapers in Marathi, Hindi, English and Gujrati. The Library is being managed with fully integrated multi-user Library Management Software named as KOHA and bar coding. Using this software, cataloguing and circulation services are being automated. In the library internet facility for students and staff is available with 20 PCs form morning 8.00 am to 4.00 pm. An online access to E- journal ( throught E-Z Proxy SVKM Digital Database Library - https://ezproxy.svkm.ac.in/login) and many reference books available in library. The library has spacious reading room with seating capability of 240 students.</p>
    
        <p>
        <b>There are two important services rendered by library for the welfare of the students:</b>
        <ol type="A">
          <li><b>D.D Mehta book bank scheme</b><br></br>
          started in 1964 in which we issue the books to students for a period of entire semester  at the charge of 20% of the original price of the book.</li>
          <li><b>Interlibrary Cooperation / Loan policy</b><br></br>
          Library shares its resources under Inter library loan with other libraries of SVKM.</li>
        </ol>
        </p>
 
        <b>Laboratories</b>
        <Carousel fade style={{width:"50%"}}>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab0}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab6}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab7}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab8}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab9}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab10}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={lab11}
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>

        <p>Laboratories are spacious, well equipped with latest apparatus and sophisticated equipments. Most of the labs are High-Tech labs</p>

        <b>Canteen</b>
        <p>The canteen is very spacious and offers hygienic food at affordable rates.</p>
        
        <b>Gymkhana</b>
        <Carousel fade style={{width:"50%"}}>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Gymkhana}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Classroom}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <p>The Institution has a very good Gymkhana which is ideal for indoor games such asTT, Chess and Carrom.</p>

        <b>Class-rooms</b>
        <Carousel fade style={{width:"50%"}}>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Classroom}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Classroom}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <p>The College has evolved effective method of teaching in the high-tech class-rooms and have good seating and lighting as per AICTE norms.  Smart Intractive boards & LCD’s  are used as teaching aids.</p>

        <b>Auditorium</b>
        <Carousel fade style={{width:"50%"}}>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Auditorium1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={Auditorium2}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <p>A air-conditioned  Room with well-equipped video conferencing and technically well-equipped with state of the art acoustics, light and sound facilities.</p>
        

        
      </div>
    </div>


  )
}

export default Infrastructure