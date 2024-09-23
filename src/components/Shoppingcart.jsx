import React from 'react';

const ShoppingCart = ({ items }) => {
  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + (item.quantity * item.price);
  }, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
      <h2>Total: {totalPrice}</h2>
    </div>
  );
};

export default ShoppingCart;