import React, { useEffect, useState } from 'react'
import { BasicMeal } from '../models/basicmealdata'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import SearchMeals from '../components/SearchMeals'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ProductCard } from '../components/cards/ProductCard'
import ViewCartButton from '../components/buttons/ViewCartButton'

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