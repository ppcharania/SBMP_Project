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
        <Link to='/aboutsvkm' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="About SVKM"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/aboutsbmp' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="About SBMP"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/mandisclosure' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Mandatory Disclosure 2022-23"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/infrastructure' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Infrastructure"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/administration' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Administration"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/eoa' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Extension of Approval (EoA)"/></Link>
    </ListItem>
    <Divider />
    
    </List>
  </div>
  )
}

export default SideNav