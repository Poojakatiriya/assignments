import React from 'react';
import './App.css';
import ProductCard from './ProductCard';
import products from './ProductsData';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">🛍️ Product Catalog</h1>
      <div className="card-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

