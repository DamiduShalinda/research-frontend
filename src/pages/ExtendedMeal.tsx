import axios, { AxiosResponse } from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ExtendedMealData } from '../models/Extendmealdata'
import { API_ROUTES } from '../apiroutes'
import Loading from '../components/loading/Loading'
import { ProductDetails } from '../components/cards/ProductDetails'
import { useCart } from '../context/CartContext'
import { BasicMeal } from '../models/basicmealdata'

const ExtendedMeal:React.FC = () => {

    const {id} = useParams()
    const [mealData , setMealData] = React.useState<ExtendedMealData>()
    const [loading , setLoading] = React.useState(true)
    const  { addToCart } = useCart();

    React.useEffect(() => {
      
    if (id) {
        getData(parseInt(id))
            .then ( data => {
                setMealData(data)
                setLoading(false)
            } )
    }
        async function getData(id:number) {
            const res : AxiosResponse<ExtendedMealData> = await axios.get(API_ROUTES.mealsbyid(id))
            return res.data
        }
    }, [])
    
    const handleAddToCart = (meal : ExtendedMealData , id : number) => {
      const mealbasic : BasicMeal = {
        id,
        name : meal.name,
        price : meal.price,
        image_1 : meal.image_1,
        keywords : meal.keywords,
        ingredients : meal.ingredients,
        description : meal.description,
      }
        addToCart(mealbasic)
    }

    const addToCartBtnClicked = () => {
      if (mealData && id) {
        handleAddToCart(mealData , parseInt(id))
      } else {
        console.log("mealdata is null")
      }
    }

    

    return (
        <div>
          {id && mealData ? (
          <ProductDetails meal={mealData} addToCart={addToCartBtnClicked}/>
          ) : (
            <Loading />
          )}
        </div>
      );
      
}

export default ExtendedMeal
