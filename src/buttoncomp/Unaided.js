import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Unaided = (props) => {
    return (
      <>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Link style={{textDecoration:'none'}} to='/civilengg'><Button size = "small" variant="outlined">Civil Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/mechanicalengg'><Button size = "small" variant="outlined">Mechanical Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/electricalengg'><Button size = "small" variant="outlined">Electrical Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/industrialelec'><Button size = "small" variant="outlined">Industrial Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/plasticengg'><Button size = "small" variant="outlined">Plastics Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/chemicalengg'><Button size = "small" variant="outlined">Chemical Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/digitalelec'><Button size = "small" variant="outlined">Digital Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/electronicstelecom'><Button size = "small" variant="outlined">EXTC Engineering</Button></Link>
      </Stack>
      </>
    )
  }
  export default Unaided;