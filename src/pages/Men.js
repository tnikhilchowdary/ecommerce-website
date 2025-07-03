import {React, useEffect} from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Men.css";

const Men = ({search}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    const filtered = products.filter(men => 
        men.title.toLowerCase().includes(search.toLowerCase())
    )
    return(
        <div className="product-grid">
           {filtered.map((men) => (
            <ProductCard men={men.id} product={men} />
           ))}
        </div>
    )
}

export default Men;