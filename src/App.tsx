import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MensPage from './Routes/MensPage/MensPage';
import WomensPage from './Routes/WomensPage/WomensPage';
import Home from './Routes/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/men" element={<MensPage/>}/>
          <Route path="/women" element={<WomensPage />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
