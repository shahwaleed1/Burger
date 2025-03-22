import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={
          <>
            <Hero />
            <Menu />
          </>
        } /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
