import React from 'react'
import { BasicMeal } from '../models/basicmealdata'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import BasicMealCard from '../components/cards/BasicMealCard'

const HomeWithoutLogin:React.FC = () => {

  const [mealData, setMealData] = React.useState<BasicMeal[]>([])
  const [mealDataLoaded, setMealDataLoaded] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
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

  return (
    <div>
      HomePage without login
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
    </div>
  )
}

export default HomeWithoutLogin
