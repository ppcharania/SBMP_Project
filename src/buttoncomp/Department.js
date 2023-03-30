import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Department = (props) => {
  return (
    <>
    <Stack direction="row" spacing={3}>
    <Button size = "medium" variant="outlined" onClick={props.actionProvider.Unhand}>Unaided</Button>
    <Button size = "medium" variant="outlined" color="primary" onClick={props.actionProvider.Aidhand}>Aided</Button>
    </Stack>
    </>
  )
}
export default Department;