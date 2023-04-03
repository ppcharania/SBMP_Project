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
    <div style={{float:'left', width:'30%', padding:'1px'}} className='SideMenu'>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
        <Link to='/civilengg' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Civil Enginnering"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/mechanicalengg' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Mechanical Enginnering"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/electricalengg' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Electrical Engineering"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/industrialelec' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Industrial Electronics"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/plasticengg' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Plastic Enginnering"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/chemicalengg' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Chemical Enginnering"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/digitalelec' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Digital Electronics"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/computerengg' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Computer Enginnering"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/informationtech' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Information Technology"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/electronicstelecom' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Electronics and Telecommunication"/></Link>
    </ListItem>
    <Divider />
    </List>
  </div>
  )
}

export default SideNav