import Sidebar  from "../components/Sidebar";
import Feed from "../components/Feed";
import Rigthbar from "../components/Rigthbar";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";


function Main() {
    const [mode, setMode] = useState("light");

    return (
        <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rigthbar />
        </Stack>     
        </>
    );
}

export default Main
