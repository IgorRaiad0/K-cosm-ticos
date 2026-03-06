import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Marketplace from './components/Marketplace/Marketplace';
import ScrollToHash from './components/ScrollToHash';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando tempo de carregamento ou esperando assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader isLoading={isLoading} />
      <ScrollToHash />
      <main style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease 1s' }}>
        <Header isLoading={isLoading} />
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
