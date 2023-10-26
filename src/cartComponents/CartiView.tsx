import React from 'react';
import { CartItem } from './Cart';
import { CartOne } from '../components/cards/CartCard';
import { AuthContext } from '../context/AuthContext';
import { API_ROUTES } from '../apiroutes';
import { AddHeader } from '../utils/AxiosHeader';

interface checkout {
  id : number,
  quantity : number
}

const CartView: React.FC = () => {


  const { token } = React.useContext(AuthContext)

  const handleCheckOut = (cart: CartItem[]) => {
    
    const axiosInstance = AddHeader(token , API_ROUTES.health)
    const checkout : checkout[] = cart.map((item) => {
      return {
        id : item.meal.id,
        quantity : item.quantity
      }
    })
    console.log(checkout)
    axiosInstance.post(API_ROUTES.checkout, checkout)
      .then((res) => {
        console.log(res.data)
        alert('Checkout successful');
      })
      .catch((err) => {
        console.log(err.response?.data)
      })
  };

  return (
    <div>
      <CartOne onOrder={handleCheckOut}/>
    </div>
  );
};

export default CartView;
