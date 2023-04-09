import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Academics = (props) => {
  return (
    <>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
    <Button size = "medium" variant="outlined" onClick={props.actionProvider.AcadUnaid}>Diploma(Unaided)</Button>
    <Button size = "medium" variant="outlined" color="primary" onClick={props.actionProvider.Acadaid}>Diploma(Aided)</Button>
    <Button size = "medium" variant="outlined" color="primary" onClick={props.actionProvider.FeesStruc}>Fee Structure</Button>
    </Stack>
    </>
  )
}
export default Academics;