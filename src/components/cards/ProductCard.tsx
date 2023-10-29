import React from 'react'
import { BasicMeal } from '../../models/basicmealdata'

interface Props {
  mealList: BasicMeal[]
  onClickViewMore: (id: number) => void
  onClickAddToCart: (meal: BasicMeal) => void
}


export function ProductCard({mealList , onClickViewMore , onClickAddToCart}: Props) {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {mealList.map(meal => (
        <div
          key={meal.id}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src={`https://res.cloudinary.com/dfvhftecz/${meal.image_1}`}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{meal.name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {meal.description}
            </p>
            <div className="flex flex-row justify-evenly">
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={() => onClickViewMore(meal.id)}>
                View More &rarr;
              </button>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={() => onClickAddToCart(meal)}>
                Add to Cart &rarr;
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
