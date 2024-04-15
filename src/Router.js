import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ErrorPage from './pages/Error/Error404';
import Housing from './pages/Housing/Housing';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function AppRouter() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    );
}

export default AppRouter;