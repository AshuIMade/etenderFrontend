import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import BidPost from "./BidPost";
import { getBids, reset } from '../features/bids/bidSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from "./Spinner";

const BidsList = () => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { bids,isLoading, isError, message } = useSelector(
    (state) => state.bids
  )
    
  useEffect(() => {
    if (isError) {
      console.log(message)
  }

    if (!bids) {
      navigate('/')
    }
    dispatch(getBids())
   
     
    return () => {
      dispatch(reset())
    }
  }, [])   
  
 if (isLoading) {
    return (
      <>
      <Box flex={4} p={{ xs: 0, md: 2 }}>
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
          </Stack>
        </Box>
        </>)
  }

  return (
    <>      
      
        <Box flex={4} p={{ xs: 0, md: 2 }}>
        
          {bids.map((bid) => (
            <BidPost key={bid._id} bid={bid} />
             ))} 
           
        </Box>  
       
      </>)
}

export default BidsList;