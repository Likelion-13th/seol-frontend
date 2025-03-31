import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import Footer from './components/Footer';
import Header from './components/Header';
import New from './pages/New/New';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/diffuser" element={<Diffuser />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;