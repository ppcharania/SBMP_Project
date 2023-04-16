import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const options = (props) => {
    return(
        <>
        <Stack direction="row" spacing={1}>
        <Button size = "small" variant="outlined" onClick={props.actionProvider.About}>About</Button>
        <Button size = "small" variant="outlined" color="primary" onClick={props.actionProvider.Dephand}>Deparment</Button>
        <Button size = "small" variant="outlined" color="primary" onClick={props.actionProvider.Academic}>Academics</Button>
        </Stack>
        <Stack direction="row" spacing={1} marginTop="15px">
        <Button size = "small" variant="outlined" onClick={props.actionProvider.Contact}>Contact</Button>
        <Button size = "small" variant="outlined" color="primary" onClick={props.actionProvider.Admission}>Admissions</Button>
        <Button size = "small" variant="outlined" color="primary" onClick={props.actionProvider.FAQS}>FAQS</Button>
        </Stack>
        </>
    )
}
export default options;
