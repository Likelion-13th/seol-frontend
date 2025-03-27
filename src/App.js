import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Mypage/>}/>
        <Route path="/" element={<Diffuser/>}/>
        <Route path="/" element={<Perfume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
