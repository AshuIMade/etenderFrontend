import { MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Menu,
  MenuItem,
} from "@mui/material";
import { FaSignInAlt } from 'react-icons/fa'
import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { useSelector } from 'react-redux'


const Post = (props) => {
  
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth)

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "skyblue" }} aria-label="recipe">
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert onClick={(e) =>setOpen(true)} sx={{width:30, height:30}}/>
          </IconButton>
        }
        title={props.tender.title}
        subheader={new Date(props.tender.issuedDate).toLocaleString('en-US')}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h3>{props.tender.vendorName}</h3>
          <h4>{props.tender.type}</h4>
          <h4>{props.tender.description}</h4>
          <h5>Details: <a href={props.tender.attachment}>attachment</a></h5>
          <h5>date of Expiration: {new Date(props.tender.expDate).toLocaleString('en-US')}</h5>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to='/bid'><button type="submit" className="btnn btnn-block">Bid</button></Link>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
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
              <MenuItem className='btn'>
                <Link to='/bidsOnTender'>Show Bids</Link> 
              </MenuItem>
          ) : (
              <>
                <MenuItem><Link to='/login'><FaSignInAlt /> Login</Link></MenuItem>
              </>
          )}
            </Menu>
    </Card>
  );
};

export default Post;