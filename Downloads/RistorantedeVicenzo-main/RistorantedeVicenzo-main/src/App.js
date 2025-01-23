import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home'
import Navbar from './NavbarApp';
import Kategori from './components/kategori/kategori';
import Connect from './components/connect/connect';
import Menu from './components/menu/menu';  // Misalnya ini halaman menu yang akan menerima kategori
import Login from './components/login/login';
import CartItem from './components/cart/CartItem';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {showLogin ? <Login setShowLogin = {setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Kategori />} />
        <Route path="/menu/minuman-hangat" element={<Menu category="Minuman Hangat" />} />
        <Route path='/cart' element={<CartItem />}/>
      </Routes>
      <Connect />
    </Router>
  );
};

export default App;
