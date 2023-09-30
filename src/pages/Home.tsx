import React, { useEffect, useState } from 'react'
import { BasicMeal } from '../models/basicmealdata'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import BasicMealCard from '../components/cards/BasicMealCard'
import SearchMeals from '../components/SearchMeals'

const Home : React.FC = () => {

  const [mealData, setMealData] = useState<BasicMeal[]>([])
  const [mealDataLoaded, setMealDataLoaded] = useState(false)

  useEffect(() => {
    axios.get(API_ROUTES.meals)
      .then((res) => {
        setMealData(res.data)
        setMealDataLoaded(true)
      })
      .catch((err) => console.log(err))
  } , [])

  const onclick = (id : number) => {
    console.log(id)
  }




  return (
    <>
    <SearchMeals/>
    {mealDataLoaded ? (
      <div className=''>
        <h1 className='text-7xl'>Home
        </h1>
        {mealData.map((meal) => {
          return (
            <BasicMealCard key={meal.id} meal={meal} onclick={onclick}/>
          )

        })}
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