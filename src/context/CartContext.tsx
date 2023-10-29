import React, { createContext, useContext, useState } from 'react';
import { BasicMeal } from '../models/basicmealdata';
import { toast } from 'react-toastify';

interface CartItem {
  meal: BasicMeal;
  quantity: number;
}

interface CartProviderProps {
    children: React.ReactNode;
    }

interface CartContextType {
  cart: CartItem[];
  addToCart: (meal: BasicMeal) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);


  const addToCart = (meal: BasicMeal) => {
    const existingItem = cart.find((item) => item.meal.id === meal.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.meal.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { meal, quantity: 1 }]);
    }
    toast.success("Added to Cart");
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
