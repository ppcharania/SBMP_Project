import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Aided = (props) => {
    return (
      <>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.CivilHand}>Civil Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.MechHand}>Mechanical Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.ElectHand}>Electrical Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.IndustHand}>Industrial Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.PlasticHand}>Plastics Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.ChemHand}>Chemical Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.DigtHand}>Digital Engineering</Button>
      <Button size = "small" variant="outlined" onClick={props.actionProvider.EXTCHand}>EXTC Engineering</Button>
      </Stack>
      </>
    )
  }
  export default Aided;