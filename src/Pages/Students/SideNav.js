import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
const style = {
  width: '100%',
  bgcolor: 'background.paper',
};
const SideNav = () => {
  return (
    <div style={{float:'left', width:'20%', padding:'1px'}} className='SideMenu'>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
        <Link to='/examination' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Examination"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/studsupport' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Student Support"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/association' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Associations"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/committee' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Committee"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/placementcell' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Placement Cell"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/feedback' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="AICTE 360 Feedback Link"/></Link>
    </ListItem>
    <Divider />
    
    </List>
  </div>
  )
}

export default SideNav