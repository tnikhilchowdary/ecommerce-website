import React, { useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = ({ search, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filterProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-grid">
      {filterProducts.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
