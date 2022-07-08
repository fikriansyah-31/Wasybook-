import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Navbar from "./component/navbar/PublicNavbar";
import Login from "./component/halaman utama/Login";
import Register from "./component/halaman utama/Register";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/public" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

  );
}

export default App;