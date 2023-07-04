import Sidebar  from "./components/Sidebar";
import Feed from "./components/Feed";
import Rigthbar from "./components/Rigthbar";
import Footer from "./components/Footer";
import Navbar  from "./components/Navbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";


function App() {
  
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rigthbar />
        </Stack>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
//<Add />
//<BlueButton>blue Button<BlueButton/>

export default App;
