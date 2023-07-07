import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Vendor from "./pages/Vendor";
import Tender from "./pages/Tender";
import Bid from "./pages/Bid";
import Grade from "./pages/Grade";

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
      <Router>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/vendor" element={<Vendor/>} />
            <Route path="/tender" element={<Tender/>} />
            <Route path="/bid" element={<Bid/>} />
            <Route path="/grade" element={<Grade/>} />
          </Routes>
        </Box>
      </Router>      
    </ThemeProvider>
  );
}
//<Add />
//<BlueButton>blue Button<BlueButton/>
//<Footer/>
export default App;
