import SidebarHome  from "../components/SidebarHome";
import About from "../components/About";
import { useState } from "react";
import { Stack } from "@mui/material";



function Home() {
    const [mode, setMode] = useState("light");
   
    return (
        <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <SidebarHome setMode={setMode} mode={mode} />
            <About/>
        </Stack>     
        </>
    );
}

export default Home
