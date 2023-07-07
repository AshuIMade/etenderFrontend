import SidebarHome  from "../components/SidebarHome";
import Feed from "../components/Feed";
import About from "../components/About";
import RigthbarHome from "../components/RigthbarHome";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";


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
//<Feed />
//<RigthbarHome />
//<SidebarHome setMode={setMode} mode={mode} />


export default Home
