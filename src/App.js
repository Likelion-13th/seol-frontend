// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import New from './pages/ProductPage/New';

import Header from './components/Header';
import Footer from './components/Footer';
import ToolBar from './components/ToolBar';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <CookiesProvider>
      <Header />
      <ToolBar isLogin={isLogin} onLoginChange={setIsLogin} />

      <Routes>
        <Route
            path="/"
            element={<Home onLoginChange={setIsLogin} />}
          />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/new" element={<New />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/diffuser" element={<Diffuser />} />
      </Routes>

      <Footer />
    </CookiesProvider>
  );
}

export default App;
