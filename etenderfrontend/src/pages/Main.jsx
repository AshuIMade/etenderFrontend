import SidebarHome  from "../components/SidebarHome";
import Feed from "../components/Feed";
import Rigthbar from "../components/Rigthbar";
import { useState } from "react";
import { Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { useEffect} from "react";

//public main list of tenders 
function Main() {
    const [mode, setMode] = useState("light");

    const navigate = useNavigate()
    //const dispatch = useDispatch()
 
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
  
        if (user) {
            navigate('/logedmain')
        }
    })


    return (
        <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <SidebarHome setMode={setMode} mode={mode} />
            <Feed />
            <Rigthbar />
        </Stack>     
        </>
    );
}

export default Main
