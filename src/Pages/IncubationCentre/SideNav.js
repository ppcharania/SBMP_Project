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
        <Link to='/abtus' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="About Us"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/vissionmission' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Vission and Mission"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/managingteam' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Core Managaing Team"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/mentors' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Mentors"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/nisp' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="National Innovation Startup Policy"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/msisp' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Maharashtra State Innovation Startup Policy"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/contactus' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Contact Us"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/howtoapply' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="How to Apply"/></Link>
    </ListItem>
    <Divider />
    </List>
  </div>
  )
}

export default SideNav