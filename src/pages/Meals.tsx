import React from 'react'
import MealAddForm from '../components/forms/MealAddForm'

const Meals : React.FC = () => {
  return (
    <div className=''>
        <h1 className='text-7xl'>Meals</h1>
        <div className="flex items-center justify-center"><MealAddForm/></div>
    </div>
  )
}

export default Meals