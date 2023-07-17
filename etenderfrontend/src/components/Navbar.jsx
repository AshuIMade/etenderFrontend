import { Mail, Notifications, Pets,AccountCircle,Explicit } from "@mui/icons-material";
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
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
import { Link,useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

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
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
          {user ? (
              <MenuItem className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </MenuItem>
          ) : (
              <>
                <MenuItem><Link to='./login'><FaSignInAlt /> Login</Link></MenuItem>
                <MenuItem><Link to='./register'><FaUser /> Register</Link></MenuItem>
              </>
          )}
            </Menu>
        </AppBar>  
    );
}

export default Navbar
