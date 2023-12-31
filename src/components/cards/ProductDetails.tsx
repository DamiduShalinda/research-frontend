import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ExtendedMealData } from '../../models/Extendmealdata'

interface Props {
  meal : ExtendedMealData,
  addToCart : () => void,
}

export function ProductDetails({meal , addToCart} : Props) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const imageUrls = [
    `https://res.cloudinary.com/dfvhftecz/${meal.image_1}`,
    `https://res.cloudinary.com/dfvhftecz/${meal.image_2}`,
    `https://res.cloudinary.com/dfvhftecz/${meal.image_3}`,
    `https://res.cloudinary.com/dfvhftecz/${meal.image_4}`,
  ];

  const handlePrevClick = () => {
    setCurrentImage((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentImage((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };


  return (
    <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
      <div className="overflow-hidden">
        <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
          <div className="items-start justify-between lg:flex lg:space-x-8">
            <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
              <div className="w-full xl:flex xl:flex-row-reverse">
                <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[380px] 2xl:w-[550px]">
                  <div className="relative flex items-center justify-center">
                  <img
                      alt={`Product gallery ${currentImage + 1}`}
                      src={imageUrls[currentImage]}
                      className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                      style={{ width: '650px', height: '590px' }}
                    />
                  </div>
                  <div className="absolute top-2/4 z-10 flex w-full items-center justify-between">
                    <ChevronLeft className="text-white" onClick={handlePrevClick}/>
                    <ChevronRight className="text-white" onClick={handleNextClick}/>
                  </div>
                </div>
                <div className="flex gap-2 xl:flex-col">
                {imageUrls.map((image, index) => (
                  <div
                    key={image}
                    className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden rounded border transition hover:opacity-75 "
                  >
                    <img
                      alt={`Product ${index}`}
                      src={image}
                      decoding="async"
                      loading="lazy"
                      onClick={() => setCurrentImage(index)}
                      className="h-20 w-20 object-cover md:h-24 md:w-24 lg:h-28 lg:w-28 xl:w-32"
                    />
                  </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
              <div className="pb-5">
                <h2 className="text-lg font-semibold md:text-xl xl:text-2xl">{meal.name}</h2>
                <p className="mt-4 font-semibold">${meal.price}</p>
              </div>
              <div className="mb-2 pt-0.5">
                <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                  keywords :
                </h4>
                <ul className="flex flex-wrap space-x-2">
                  {meal.keywords.map((keyword, index) => (
                    <li
                      key={index}
                      className="md:text-15px mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium transition duration-200 ease-in-out md:mb-3 md:h-10 capitalize"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-2" />
              <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => addToCart()}
                >
                  Add To Cart
                </button>
              </div>
              <div className="pt-6 xl:pt-8">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Product Details:
                </h3>
                <p className="text-sm">
                  {meal.description}
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-15px mb-3 font-semibold sm:text-base lg:mb-3.5">
                  Additional Information:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Calories', value: meal.calories },
                    { label: 'Carbohydrate Content', value: meal.carbohydrateContent },
                    { label: 'Cholesterol Content', value: meal.cholesterolContent },
                    { label: 'Fat Content', value: meal.fatContent },
                    { label: 'Fiber Content', value: meal.fiberContent },
                    { label: 'Protein Content', value: meal.proteinContent },
                    { label: 'Saturated Fat Content', value: meal.saturatedFatContent },
                    { label: 'Sodium Content', value: meal.sodiumContent },
                    { label: 'Sugar Content', value: meal.sugarContent },
                  ].map((property, index) => (
                    <div key={index} className="flex flex-row gap-2">
                      <p className="text-sm">{property.label}:</p>
                      <p className="text-sm font-semibold">{property.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
