import React, { useEffect } from 'react'
import { Trash, Heart, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext';
import { CartItem } from '../../cartComponents/Cart';


interface CartOneProps {
  onOrder: (cart: CartItem[]) => void;
}


export function CartOne({ onOrder }: CartOneProps) {


  const { cart } = useCart();
  

  const totalprice = cart.reduce((acc, item) => acc + item.meal.price * item.quantity, 0);


  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>

      {cart.length > 0 ? (
        <>
        <p className="mt-3 text-sm font-medium text-gray-700">
        Items in your cart are not reserved.
      </p>
            <ul className="flex flex-col divide-y divide-gray-200">
        {cart.map((item) => (
          <li key={item.meal.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={`https://res.cloudinary.com/dfvhftecz/${item.meal.image_1}`}
                alt={item.meal.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.meal.name}</h3>
                    <p className="text-sm">Quantity : {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{item.meal.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">{Math.round(totalprice * 100) / 100}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black  hover:bg-black hover:text-white"
          onClick={() => onOrder(cart)}
        >
          Order
        </button>
      </div>
        </>
      ) :<>
      <div className="flex justify-center mt-5">
        <p className='font-medium text-gray-600 flex flex-row items-center justify-center gap-3'>
          Your cart is empty. 
          <a 
            href="/" 
            className='flex flex-row items-center justify-center text-black font-semibold hover:underline text-lg'
            > Go to shop 
            <ArrowRight className="ml-2 h-4 w-4" />
            </a>
        </p>
      </div>
      </>}
    </div>
  )
}
