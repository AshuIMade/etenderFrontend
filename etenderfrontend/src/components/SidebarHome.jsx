import React from 'react'
import {Link} from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  LockOpen,
  LockClock,
} from "@mui/icons-material";

function SidebarHome({ mode, setMode }) {
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
                    <Link to='/main'>
                    <ListItemButton component="a" href="/main">
                    <ListItemIcon>
                        <LockOpen/>
                    </ListItemIcon>
                    <ListItemText primary="Open Tenders" />
                    </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/main'>
                    <ListItemButton component="a" href="/main">
                    <ListItemIcon>
                        <LockClock />
                    </ListItemIcon>
                    <ListItemText primary="Closed Tenders" />
                    </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
}

export default SidebarHome
