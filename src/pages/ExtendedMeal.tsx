import axios, { AxiosResponse } from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { number } from 'yup'
import { ExtendedMealData } from '../models/Extendmealdata'
import { API_ROUTES } from '../apiroutes'
import Loading from '../components/loading/Loading'

const ExtendedMeal:React.FC = () => {

    const {id} = useParams()
    const [mealData , setMealData] = React.useState<ExtendedMealData>()
    const [loading , setLoading] = React.useState(true)

    React.useEffect(() => {
      
    if (id) {
        getData(parseInt(id))
            .then ( data => {
                setMealData(data)
                setLoading(false)
                console.log(data)
            } )
    }
        async function getData(id:number) {
            const res : AxiosResponse<ExtendedMealData> = await axios.get(API_ROUTES.mealsbyid(id))
            return res.data
        }
    }, [])
    
    
    return (
        <div>
          Extended meal page {id}
          {mealData ? (
            <div>
              {[
                { label: 'Meal Name', value: mealData.name },
                { label: 'Description', value: mealData.description },
                { label: 'Calories', value: mealData.calories },
                { label: 'Carbohydrate Content', value: mealData.carbohydrateContent },
                { label: 'Cholesterol Content', value: mealData.cholesterolContent },
                { label: 'Fat Content', value: mealData.fatContent },
                { label: 'Fiber Content', value: mealData.fiberContent },
                { label: 'Protein Content', value: mealData.proteinContent },
                { label: 'Saturated Fat Content', value: mealData.saturatedFatContent },
                { label: 'Sodium Content', value: mealData.sodiumContent },
                { label: 'Sugar Content', value: mealData.sugarContent },
              ].map((property, index) => (
                <div key={index} className='flex flex-row gap-2'>
                  <p>{property.label}:</p>
                  <p>{property.value}</p>
                </div>
              ))}

            </div>
          ) : (
            <Loading />
          )}
        </div>
      );
      
}

export default ExtendedMeal
