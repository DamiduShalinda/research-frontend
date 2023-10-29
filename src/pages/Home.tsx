import React, { useEffect, useState } from 'react'
import { BasicMeal } from '../models/basicmealdata'
import axios, { AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import SearchMeals from '../components/SearchMeals'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { ProductCard } from '../components/cards/ProductCard'
import ViewCartButton from '../components/buttons/ViewCartButton'
import { Heart , Utensils } from 'lucide-react'
import { Recommendations } from '../models/recommendations'
import Loading from '../components/loading/Loading'

const Home : React.FC = () => {

  const [mealData, setMealData] = useState<BasicMeal[]>([])
  const [ recommendation_meals , setRecommandations ] = useState<BasicMeal[]>([])
  const [ health_meals , setHealthMeals ] = useState<BasicMeal[]>([])
  const [ based_on_previous_orders , setBasedOnPreviousOrders ] = useState<BasicMeal[]>([])
  const [ loading , setLoading] = React.useState<boolean>(false)
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

  const handleOnClick = ( searchTerm : string) => {
    setLoading(true)
    axios.get(API_ROUTES.search(searchTerm))
      .then((res : AxiosResponse<Recommendations>) => {
          setMealData(res.data.recommended_meals)
          setHealthMeals(res.data.healthy_meals)
          setBasedOnPreviousOrders(res.data.based_on_previous_orders)
        console.log(res.data)
          setLoading(false)

      })
      .then((err) => console.log(err))
    }

 

  return (
    <>
    <SearchMeals onSubmitButton={handleOnClick}/>
    <div className='flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-2xl' id='filtertitle'>
      <h1>Prefered</h1>
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-2xl cursor-pointer hover:underline ${selectedTab === 'recommend' ? '' : ''}`}
        onClick={() => handleTabClick('recommend')}
      >
        <h1>Recommendations</h1>
      </div>
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
    {mealDataLoaded && !loading ? (
      <div className=''>
          <ProductCard 
              mealList={selectedTab === 'health' ? health_meals : selectedTab === 'orders' ? based_on_previous_orders : mealData}
              onClickViewMore={onclick} 
              onClickAddToCart={handleAddToCart}/>
          { health_meals.length === 0 && based_on_previous_orders.length === 0 && selectedTab === 'health' || selectedTab === 'orders' ? (
            <div className='flex flex-col items-center justify-center gap-2'>
              <h1 className='text-2xl'>No meals found</h1>
              <p className='text-lg'>Try searching for something else</p>
            </div>
          ) : null}
        </div>
        ) : (
          <Loading/>
            )}

      <ViewCartButton />
    </>
  )
}

export default Home