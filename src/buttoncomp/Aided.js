import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Aided = (props) => {
    return (
      <>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Button size = "small" variant="outlined">Computer Engineering</Button>
      <Button size = "small" variant="outlined">IT Engineering</Button>
      </Stack>
      </>
    )
  }
  export default Aided;