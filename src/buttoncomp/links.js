import React from 'react'
import {Link} from 'react-router-dom';


export function AcadUnaided() {
  return(
      <Link to="/diplomaunaided">Diploma (Unaided)</Link>
  )
} 

export function AcadAided() {

  return(
      <Link to="/diplomaaided">Diploma (Aided)</Link>
  )
} 

export function Fees() {
  return(
      <Link to="/feestructure">Fees Infromation</Link>
  )
} 

export function Civil() {
    return(
        <Link to="/civilengg">Civil Engineering</Link>
    )
} 

export function Mechanical() {
  return(
    <>
      <Link to='/mechanicalengg'>Mechanical Engineering</Link>
      </>
  )
} 

export function Electrical() {
  return(
      <Link to='/electricalengg'>Electrical Engineering</Link>
  )
} 

export function Industrial() {
  return(
      <Link to='/industrialelec'>Industrial Engineering</Link>
  )
} 

export function Plastic() {
  return(
      <Link to='/plasticengg'>Plastic Engineering</Link>
  )
} 

export function Chemical() {
  return(
      <Link to='/chemicalengg'>Chemical Engineering</Link>
  )
}

export function Digital() {
  return(
      <Link to='/digitalelec'>Digital Engineering</Link>
  )
} 

export function Computer() {
  return(
      <Link to='/computerengg'>Computer Engineering</Link>
  )
} 

export function IT() {
  return(
      <Link to='/informationtech'>Information Technology</Link>
  )
} 

export function Extc() {
  return(
      <Link to='/electronicstelecom'>Electrionics and Telecommunications Engineering</Link>
  )
} 

export function Aboutsbmp() {
  return(
      <Link to='/aboutsbmp'>About SBMP</Link>
  )
} 

export function Admission() {
  return(
      <Link to='/admissions'>Admission Details</Link>
  )
} 

export function MISP() {
  return(
      <a href = "http://localhost:3000/static/media/MSISP.6ddb6b01a0553d3492e4.pdf">Click Here</a>
  )
} 

export function Incubation() {
  return(
    <Link to = '/incubationcentre'>Click Here</Link>
  )
}

export function NISP() {
  return(
    <a href = "http://localhost:3000/static/media/NISP.fc2211dc2658aa8f551d.pdf">Click Here</a>
  )
}

export function CSECurr() {
  return(
    <a href = "http://localhost:3000/static/media/one.9ed1a4cc874e9f6a77de.pdf">Click Here</a>
  )
}

