import { Plus  , ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { SmallCartCard } from '../cards/SmallCartCard'
import { CartItem } from '../../cartComponents/Cart'
import { useState } from 'react'

const ViewCartButton = () => {

    const { cart } = useCart()
    const [ViewCart , setViewCart] = useState(false)

  function handleViewCart(): void {
    setViewCart(!ViewCart)
  }

    return (
        <div className='fixed bottom-0 right-0 p-4'>
            {ViewCart ? <SmallCartCard handleClose={handleViewCart}/> : 
            (
              <button
              type="button"
              onClick={() =>handleViewCart()}
              className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex flex-row items-center justify-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <p>
                View Cart
              </p>
            </button>
            )}
        </div>
      )
}

export default ViewCartButton