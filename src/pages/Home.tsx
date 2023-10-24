import React, { useEffect, useState } from 'react'
import { BasicMeal } from '../models/basicmealdata'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import BasicMealCard from '../components/cards/BasicMealCard'
import SearchMeals from '../components/SearchMeals'
import { useNavigate } from 'react-router-dom'
import KeywordSelection from '../components/KeywordSelection'
import Cart, { CartItem } from '../cartComponents/Cart'
import { useCart } from '../context/CartContext'
import CartView from '../cartComponents/CartiView'
import { MealCard } from '../components/cards/MealCard'

const Home : React.FC = () => {

  const [mealData, setMealData] = useState<BasicMeal[]>([])
  const [mealDataLoaded, setMealDataLoaded] = useState(false)
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




  return (
    <>
    <SearchMeals/>
    <KeywordSelection/>
    {mealDataLoaded ? (
      <div className=''>
        <h1 className='text-7xl'>Home
        </h1>
        <div className="grid grid-cols-2 gap-3 mx-5">
          {mealData.map((meal) => {
            return (
              <div key={meal.id}>
              <BasicMealCard meal={meal} onclick={onclick} onAddToCart={handleAddToCart}/>
              </div>
            )
          })}
        </div>
        </div>
        ) : (
          <div className=''>
            <h1 className='text-7xl'>Loading...</h1>
            </div>
            )}
    </>
  )
}

export default Home