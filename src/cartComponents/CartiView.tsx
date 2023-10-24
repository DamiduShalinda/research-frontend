import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from './Cart';
import { CartOne } from '../components/cards/CartCard';
import { SmallCartCard } from '../components/cards/SmallCartCard';
import { OrderCard } from '../components/cards/OrderCard';

const CartView: React.FC = () => {
  const { cart, clearCart } = useCart(); // Access cart and clearCart from the CartContext

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.meal.price * item.quantity, 0);

  // This is a dummy function that would be replaced by a real checkout function
  const handleCheckOut = (cart: CartItem[]) => {
    console.log(cart);
    alert('Checkout successful');
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.meal.name} - Quantity: {item.quantity} - Price: {item.meal.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={() => handleCheckOut(cart)}>Checkout</button>
      <CartOne/>
      <SmallCartCard/>
      <OrderCard/>
    </div>
  );
};

export default CartView;
