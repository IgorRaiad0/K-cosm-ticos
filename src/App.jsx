import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Marketplace from './components/Marketplace/Marketplace';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
        {/* Outras sessões virão aqui */}
      </main>
    </Router>
  );
}

export default App;
