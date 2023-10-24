import React from 'react'
import { BasicMeal } from '../models/basicmealdata'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import BasicMealCard from '../components/cards/BasicMealCard'
import KeywordSelection from '../components/KeywordSelection'
import { ProductCard } from '../components/cards/ProductCard'
import ViewCartButton from '../components/buttons/ViewCartButton'

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
      {mealDataLoaded ? (
      <div className=''>
        <ProductCard mealList={mealData} onClickViewMore={onclick}/>
        </div>
        ) : (
          <div className=''>
            <h1 className='text-7xl'>Loading...</h1>
            </div>
            )}

          <ViewCartButton/>
    </div>
  )
}

export default HomeWithoutLogin
