import React from 'react';
import './App.css';

const ProductCard = ({ name, image, price, description, stock }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h2>{name}</h2>
        <p className="price">₹{price}</p>
        <p>{description}</p>
        <p className={`stock ${stock === "In Stock" ? "in" : "out"}`}>{stock}</p>
      </div>
    </div>
  );
};

export default ProductCard;
