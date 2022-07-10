import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Navbar from "./component/navbar/PublicNavbar";
import Login from "./component/halaman utama/Login";
import Register from "./component/halaman utama/Register";
import AddBook from "./pages/AddBook";
import Profile from "./pages/profile";
import Transaction from "./pages/Transactions";
import BookList from './pages/BookList'
import DetailBook from "./pages/DetailBook";
import AdminNav from "./component/navbar/AdminNav";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/public" element={<Navbar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        <Route path="/detail-book" element={<DetailBook/>}/>
      </Routes>

  );
}

export default App;