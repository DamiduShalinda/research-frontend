import React, { useState } from 'react';
import { BasicMeal } from '../models/basicmealdata';

export interface CartItem {
  meal: BasicMeal;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.meal.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
