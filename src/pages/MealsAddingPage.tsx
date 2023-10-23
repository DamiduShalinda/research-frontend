import React, { useEffect, useState } from 'react'
import MealAddForm from '../components/forms/MealAddForm'
import { ExtendedMealData } from '../models/Extendmealdata'
import { useParams } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import Loading from '../components/loading/Loading'

const MealsAddingPage : React.FC = () => {

  const { id } = useParams()
  const [ loading , setLoading] = useState(true)
  const [ mealData , setMealData] = useState<ExtendedMealData>()

  const onSubmit = (data : ExtendedMealData) => {
    console.log(data)
  }

  useEffect(() => {
      
    if (id) {
      axios.get(API_ROUTES.mealsbyid(parseInt(id)))
        .then((res : AxiosResponse<ExtendedMealData>) => {
          setMealData(res.data)
          setLoading(false)
        })
    }else {
      setLoading(false)
    }
  }, [])


  


  return (
    <>
    {loading ? <Loading/> : (
      <div className=''>
      <h1 className='text-7xl'>Meals {id} </h1>
      <div className="flex items-center justify-center"><MealAddForm onSubmit={onSubmit} /></div>
  </div>
    )}
    </>
  )
}

export default MealsAddingPage