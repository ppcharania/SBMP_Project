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
    <div style={{float:'left', width:'30%', padding:'1px'}} className='SideMenu'>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
        <Link to='/aamc' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Alumini Association Manging Committee"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/activitycalendar' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Activity Calendar"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/success' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Alumini Success Story"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/registered' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Registered Alumini"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/subcom' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Alumini Sub Committee"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/newslet' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Alumini News Letter"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/booklet' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Alumini Booklet"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/multitech' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="MultiTech Event 2020"/></Link>
    </ListItem>
    <Divider />
    
    </List>
  </div>
  )
}

export default SideNav