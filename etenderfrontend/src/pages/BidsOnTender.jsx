import Sidebar  from "../components/Sidebar";
import BidsList from "../components/BidsList";
import Rigthbar from "../components/Rigthbar";
import { useState } from "react";
import {Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//bids on tender 
function BidsOnTender() {
    const [mode, setMode] = useState("light");
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    
    
    if (!user) {
      navigate('/login')
    }
    return (
        <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <BidsList/>
            <Rigthbar />
        </Stack>     
        </>
    );
}

export default BidsOnTender
