import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Aided = (props) => {
    return (
      <>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Button size = "small" variant="outlined">Civil Engineering</Button>
      <Button size = "small" variant="outlined">Mechanical Engineering</Button>
      <Button size = "small" variant="outlined">Electrical Engineering</Button>
      <Button size = "small" variant="outlined">Industrial Engineering</Button>
      <Button size = "small" variant="outlined">Plastics Engineering</Button>
      <Button size = "small" variant="outlined">Chemical Engineering</Button>
      <Button size = "small" variant="outlined">Digital Engineering</Button>
      <Button size = "small" variant="outlined">EXTC Engineering</Button>
      <Link style={{textDecoration:'none'}} to='/computerengg'><Button size = "small" variant="outlined">Computer Engineering</Button></Link>
      <Link style={{textDecoration:'none'}} to='/informationtech'><Button size = "small" variant="outlined">IT Engineering</Button></Link>
      </Stack>
      </>
    )
  }
  export default Aided;