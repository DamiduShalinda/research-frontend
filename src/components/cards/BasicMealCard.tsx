import React from 'react'
import { BasicMeal } from '../../models/basicmealdata'

interface Props {
  meal : BasicMeal
  onclick : (id : number) => void
  onAddToCart : (meal : BasicMeal) => void
}

export default function BasicMealCard({meal , onclick , onAddToCart} : Props) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Delicious Meal"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{meal.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {meal.description}
        </p>
        <div className="flex flex-row text-white text-sm justify-start mt-2 gap-2 capitalize">
          {meal.keywords.map((keyword) => {
          return (
            <p key={keyword}>{keyword}</p>
          )})}
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={() => onclick(meal.id)}>
            More Details &rarr;
          </button>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={() => onAddToCart(meal)}>
            Add To Cart &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}