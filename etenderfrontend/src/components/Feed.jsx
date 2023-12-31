import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import { getTenders, reset } from '../features/tenders/tenderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from "./Spinner";

const Feed = () => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { tenders,isLoading, isError, message } = useSelector(
    (state) => state.tenders
  )
    
  useEffect(() => {
    if (isError) {
      console.log(message)
  }

    if (!tenders) {
      navigate('/')
    }
    dispatch(getTenders())
   
     
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
        
          {tenders.map((tender) => (
            <Post key={tender._id} tender={tender} />
             ))} 
           
        </Box>  
       
      </>)
}

export default Feed;