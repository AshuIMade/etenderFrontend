import { Mail, Notifications, Pets,AccountCircle,Explicit } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const SignedBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
    const [open,setOpen]=useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}} ><Link to='/'>E-Tender</Link></Typography>
                <Explicit sx={{display:{xs:"block",sm:"none"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge>
                        <AccountCircle sx={{width:30, height:30}}
                            onClick={(e)=>setOpen(true)}
                        />
                    </Badge>
                    <SignedBox>
                        <Badge badgeContent={4} color="error">
                            <Mail/>
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <Notifications/>
                        </Badge>                    
                        <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://www.pexels.com/photo/man-smiling-behind-wall-220453/" />
                    </SignedBox>
                    </Icons>
                <UserBox>
                    <Badge>
                        <AccountCircle onClick={(e) =>setOpen(true)} sx={{width:30, height:30}}/>
                    </Badge>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) =>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem><Link to='./login'>Account</Link></MenuItem>
                <MenuItem><Link to='./login'>Login</Link></MenuItem>
                <MenuItem><Link to='./register'>Sign Up</Link></MenuItem>
            </Menu>
        </AppBar>  
    );
}

export default Navbar
