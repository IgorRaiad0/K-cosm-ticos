import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Suppliers from './components/Suppliers/Suppliers';
import Showcase from './components/Showcase/Showcase';
import Products from './components/Products/Products';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Suppliers />
      <Showcase />
      <Products />
      {/* Outras sessões virão aqui */}
    </main>
  );
}

export default App;
