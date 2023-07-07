import React from 'react'
import {Link} from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
  LockOpen,
  LockClock,
  Add,
} from "@mui/icons-material";
//import Add from '@mui/icons-material/Add';
//import LockOpenIcon from '@mui/icons-material/LockOpen';
//import LockClockIcon from '@mui/icons-material/LockClock';
function Sidebar({mode,setMode}) {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <List>
                <ListItem disablePadding>
                    <Link to='/'>
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <LockOpen/>
                    </ListItemIcon>
                    <ListItemText primary="Open Tenders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <LockClock />
                    </ListItemIcon>
                    <ListItemText primary="Closed Tenders" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/tender'>
                    <ListItemButton component="a" href="/tender">
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    <ListItemText primary="Add Tender" />
                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/bid'>
                    <ListItemButton component="a" href="/bid">
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    <ListItemText primary="Add Bid" />
                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/register'>
                    <ListItemButton component="a" href="/register">
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
}

export default Sidebar
