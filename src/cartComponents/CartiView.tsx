import React from 'react';
import { CartItem } from './Cart';
import { CartOne } from '../components/cards/CartCard';

const CartView: React.FC = () => {


  // This is a dummy function that would be replaced by a real checkout function
  const handleCheckOut = (cart: CartItem[]) => {
    console.log(cart);
    alert('Checkout successful');
  };

  return (
    <div>
      <CartOne/>
    </div>
  );
};

export default CartView;
