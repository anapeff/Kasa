import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ErrorPage from './pages/Error/Error404';
import Housing from './pages/Housing/Housing';

function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
}

export default AppRouter;