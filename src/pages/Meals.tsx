import React from 'react'
import MealAddForm from '../components/forms/MealAddForm'
import { ExtendedMealData } from '../models/Extendmealdata'

const Meals : React.FC = () => {

  const onSubmit = (data : ExtendedMealData) => {
    console.log(data)
  }
  return (
    <div className=''>
        <h1 className='text-7xl'>Meals</h1>
        <div className="flex items-center justify-center"><MealAddForm onSubmit={onSubmit}/></div>
    </div>
  )
}

export default Meals