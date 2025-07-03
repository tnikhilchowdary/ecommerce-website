import React from "react";
import "./ProductCard.css";
const ProductCard = ({product, addToCart}) => {
    return(
      <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>
      <button className="product-button" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    )
}

export default ProductCard;