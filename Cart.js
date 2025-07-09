
import React from 'react';
import { Link } from 'react-router-dom';

function getDiscount(quantity) {
  if (quantity >= 20) return 0.15;
  if (quantity >= 15) return 0.10;
  if (quantity >= 10) return 0.05;
  if (quantity >= 5) return 0.03;
  return 0;
}

export default function Cart({ cart, updateQuantity, removeItem }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = getDiscount(cart.reduce((acc, item) => acc + item.qty, 0));
  const finalTotal = total * (1 - discount);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
              <p>${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))}
          <p>Subtotal: ${total.toFixed(2)}</p>
          <p>Discount: {(discount * 100).toFixed(0)}%</p>
          <h3>Total: ${finalTotal.toFixed(2)}</h3>
          <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        </>
      )}
    </div>
  );
}
