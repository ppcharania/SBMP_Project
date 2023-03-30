import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const options = (props) => {
    return(
        <>
        <Stack direction="row" spacing={1}>
        <Button size = "small" variant="outlined" onClick={props.actionProvider.CSEhand}>About</Button>
        <Button size = "small" variant="outlined" color="primary" onClick={props.actionProvider.Dephand}>Deparment</Button>
        <Button size = "small" variant="outlined" color="primary" href = "https://sbmp.ac.in/Diploma%20(Aided)/M__46">Academic</Button>
        </Stack>
        <Stack direction="row" spacing={1} marginTop="15px">
        <Button size = "small" variant="outlined" href = "https://sbmp.ac.in/Contact%20Us/M__43">Contact</Button>
        <Button size = "small" variant="outlined" color="primary" href = "https://sbmp.ac.in/Admission%20Details/M__18">Admissions</Button>
        <Button size = "small" variant="outlined" color="primary" href = "https://sbmp.ac.in/Examination/M__154">Students</Button>
        </Stack>
        </>
    )
}
export default options;
