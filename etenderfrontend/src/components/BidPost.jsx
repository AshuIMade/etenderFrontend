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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


const BidPost = (props) => {
  
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth)
  console.log(props.bid)
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert onClick={(e) =>setOpen(true)} sx={{width:30, height:30}}/>
          </IconButton>          
        }
        title={props.bid.vendorName}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h4>{props.bid.description}</h4>
          <h5>Payment reference { props.bid.reference}</h5>
          <h5>Details: <a href={props.bid.attachment}>attachment</a></h5>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
        <MenuItem className='btn'>
          <Link to="/bidReview" state={props.bid}>Review Bid</Link>
        </MenuItem>      
      </Menu>
    </Card>
  );
};

export default BidPost;