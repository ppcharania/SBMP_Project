import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { width } from '@mui/system';
const style = {
  width: '100%',
  bgcolor: 'background.paper',
};
const SideNav = () => {
  return (
    <div style={{float:'left', width:'20%', padding:'1px'}} className='SideMenu'>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
        <Link to='/diplomaaided' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Diploma(Aided)"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/diplomaunaided' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Diploma(Unaided)"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/implanttraining' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Implant Training"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/feestructure' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Fee Structure"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/timetable' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Time Table"/></Link>
    </ListItem>
    <Divider />
    
    </List>
  </div>
  )
}

export default SideNav