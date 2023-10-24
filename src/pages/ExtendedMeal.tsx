import axios, { AxiosResponse } from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { number } from 'yup'
import { ExtendedMealData } from '../models/Extendmealdata'
import { API_ROUTES } from '../apiroutes'
import Loading from '../components/loading/Loading'
import { ProductCard } from '../components/cards/ProductCard'
import { ProductDetails } from '../components/cards/ProductDetails'

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
          {mealData ? (
          <ProductDetails meal={mealData}/>
          ) : (
            <Loading />
          )}
        </div>
      );
      
}

export default ExtendedMeal
