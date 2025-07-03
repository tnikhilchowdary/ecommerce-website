import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Jewelery from './pages/Jewelery';
import Electronics from './pages/Electronics';
import CartPage from './pages/cartPage';
import "./pages/cart.css";

import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar search={search} setSearch={setSearch} cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home search={search} addToCart={addToCart} />} />
          <Route path="/men" element={<Men search={search} addToCart={addToCart} />} />
          <Route path="/women" element={<Women search={search} addToCart={addToCart} />} />
          <Route path="/jewelery" element={<Jewelery search={search} addToCart={addToCart} />} />
          <Route path="/electronics" element={<Electronics search={search} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
