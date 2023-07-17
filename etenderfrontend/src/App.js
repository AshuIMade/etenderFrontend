import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Vendor from "./pages/Vendor";
import Tender from "./pages/Tender";
import Bid from "./pages/Bid";
import Grade from "./pages/Grade";

import { Box } from "@mui/material";
import LogedMain from "./pages/LogedMain";
import BidsOnTender from "./pages/BidsOnTender";
import BidReview from "./pages/BidReview";


function App() {
  
  return (
    <>
      <Router>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/logedmain" element={<LogedMain />} /> 
            <Route path="/bidsOnTender" element={<BidsOnTender />} />  
            <Route path="/vendor" element={<Vendor/>} />
            <Route path="/tender" element={<Tender/>} />
            <Route path="/bid" element={<Bid/>} />
            <Route path="/grade" element={<Grade />} />
            <Route path="/bidReview" element={<BidReview />} />
            </Routes>
        </Box>
      </Router>
    <ToastContainer />
    </>
  );
}

export default App;
