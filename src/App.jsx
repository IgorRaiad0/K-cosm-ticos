import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Marketplace from './components/Marketplace/Marketplace';
import ScrollToHash from './components/ScrollToHash';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
