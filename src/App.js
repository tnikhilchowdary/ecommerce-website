import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Jewelery from './pages/Jewelery';
import Electronics from './pages/Electronics';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar search={search} setSearch={setSearch} cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/men" element={<Men search={search} />} />
          <Route path="/women" element={<Women search={search} />} />
          <Route path="/jewelery" element={<Jewelery search={search} />} />
          <Route path="/electonics" element={<Electronics search={search} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
