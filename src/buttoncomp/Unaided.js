import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Unaided = (props) => {
    return (
      <>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.CSEHand}>Computer Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.ITHand}>IT Engineering</Button>
      </Stack>
      </>
    )
  }
  export default Unaided;