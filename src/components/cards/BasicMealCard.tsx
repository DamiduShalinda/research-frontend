import React from 'react'
import { BasicMeal } from '../../models/basicmealdata'

interface Props {
  meal : BasicMeal
  onclick : (id : number) => void
}

const BasicMealCard : React.FC<Props> = ({meal , onclick} : Props) => {
  return (
    <div key={meal.id} className='border-2 border-black m-2 p-1 rounded-lg w-full'>
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
}

export default BasicMealCard