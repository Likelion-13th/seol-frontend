import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import Footer from './components/Footer';
import Header from './components/Header';
import New from './pages/ProductPage/New';
import ToolBar from "./components/ToolBar";
 // 수정: Aboutus → AboutUs

function App() {
  return (
    <>
      <Header />
      <ToolBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/new" element={<New />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/diffuser" element={<Diffuser />} />
      </Routes>
    
      <Footer />
    </>
  );
}

export default App;