import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Navbar from "./component/navbar/PublicNavbar";
import Login from "./component/halaman utama/Login";
import Register from "./component/halaman utama/Register";
import AddBook from "./pages/AddBook";
import DetailBook from "./pages/DetailBook";
import AdminNav from "./component/navbar/AdminNav";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/public" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/detail-book" element={<DetailBook/>}/>
      </Routes>

  );
}

export default App;