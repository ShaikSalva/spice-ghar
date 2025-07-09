
import React from 'react';

const products = [
  { id: 1, name: 'Red Chili Powder', price: 2.5 },
  { id: 2, name: 'Turmeric Powder', price: 1.22 },
  { id: 3, name: 'Coriander Powder', price: 1.5 },
  { id: 4, name: 'Black Pepper Powder', price: 3.0 },
  { id: 5, name: 'Cumin Powder', price: 3.5 },
  { id: 6, name: 'Garam Masala', price: 5.99 },
  { id: 7, name: 'Chaat Masala', price: 2.5 },
  { id: 8, name: 'Garlic Paste', price: 2.0 },
];

export default function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Spices</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)} / lb</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
