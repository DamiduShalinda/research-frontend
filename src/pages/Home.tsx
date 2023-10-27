import React, { useEffect, useState } from 'react'
import { BasicMeal } from '../models/basicmealdata'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import SearchMeals from '../components/SearchMeals'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ProductCard } from '../components/cards/ProductCard'
import ViewCartButton from '../components/buttons/ViewCartButton'
import { Heart , Utensils } from 'lucide-react'

const Home : React.FC = () => {

  const [mealData, setMealData] = useState<BasicMeal[]>([])
  const [mealDataLoaded, setMealDataLoaded] = useState(false)
  const [selectedTab, setSelectedTab] = useState<string>('');
  const navigate = useNavigate()
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(API_ROUTES.meals)
      .then((res) => {
        setMealData(res.data)
        setMealDataLoaded(true)
      })
      .catch((err) => console.log(err))
  } , [])

  const onclick = (id : number) => {
    navigate(`/extendmeal/${id}`)
  }

  const handleAddToCart = (meal : BasicMeal) => {
    addToCart(meal);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    console.log(tab);
  };


  return (
    <>
    <SearchMeals/>
    <div className='flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-2xl' id='filtertitle'>
      <h1>Prefered Recommendations</h1>
      <h2>Based On</h2>
      <div className='flex flex-row'>
        <div
          className={`text-lg md:text-xl flex flex-row items-center justify-center gap-1 px-3 py-2 mx-2 cursor-pointer rounded-xl ${selectedTab === 'health' ? 'bg-black/10' : ''}`}
          onClick={() => handleTabClick('health')}
        >
          <Heart className='w-5 h-5' />
          <p>Health Profile</p>
        </div>
        <div
          className={`text-lg md:text-xl flex flex-row items-center justify-center gap-1 px-3 py-2 mx-2 cursor-pointer rounded-xl ${selectedTab === 'orders' ? 'bg-black/10' : ''}`}
          onClick={() => handleTabClick('orders')}
        >
          <Utensils className='w-5 h-5' />
          <p>Previous Orders</p>
        </div>
      </div>
    </div>
    {mealDataLoaded ? (
      <div className=''>
          <ProductCard mealList={mealData} onClickViewMore={onclick} onClickAddToCart={handleAddToCart}/>
        </div>
        ) : (
          <div className=''>
            <h1 className='text-7xl'>Loading...</h1>
            </div>
            )}

      <ViewCartButton />
    </>
  )
}

export default Home