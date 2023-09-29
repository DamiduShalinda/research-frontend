import React, { useEffect, useState } from 'react'
import { BasicMeal } from './models/basicmealdata'
import axios from 'axios'
import { API_ROUTES } from './apiroutes'

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
    {mealDataLoaded ? (
      <div className=''>
        <h1 className='text-7xl'>Home
        </h1>
        {mealData.map((meal) => {
          return (
            <div key={meal.id} className='border border-black m-2 p-1 rounded-lg w-1/3'>
              <p className='font-bold'>{meal.name}</p>
              <p>{meal.description}</p>
              <p>{meal.price}</p>
              <div className="flex flex-row items-start justify-start gap-2">
                {meal.keywords.map((keyword) => {
                  return (
                    <p key={keyword}>{keyword}</p>
                  )})}
              </div>
              <div className="flex flex-row items-start justify-start gap-2">
                {meal.ingredients.map((ingredient) => {
                  return (
                    <p key={ingredient}>{ingredient}</p>
                  )})}
              </div>
              <button onClick={() => onclick(meal.id)} className='p-2 bg-slate-200 rounded-md'>View Full</button>
            </div>
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