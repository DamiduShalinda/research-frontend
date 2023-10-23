import axios, { AxiosError, AxiosResponse } from 'axios'
import React from 'react'
import { API_ROUTES } from '../apiroutes'
import { ErrorResponse } from '../models/responses'
import Loading from '../components/loading/Loading'
import { Link, useNavigate } from 'react-router-dom'

interface Meal {
  id : number,
  name : string
}

const Meals : React.FC = () => {

  const [ mealList , setMealList] = React.useState<Meal[]>([])
  const [ loading , setLoading] = React.useState(true)
  const navigate = useNavigate()
  

  React.useEffect(() => {

    axios.get(API_ROUTES.meallist)
      .then ((res : AxiosResponse<Meal[]>) => {
        setMealList(res.data)
        setLoading(false)
      })
      .catch((err : AxiosError<ErrorResponse>) => {
        console.log(err.response?.data)
      })
 
  }, [])


  const onUpdateButtonClick = (id:number) => {
    navigate(`/meals/new/${id}`)
  }

  const onDeleteButtonClick = (id: number) => {
    console.log(id)
  }
  


  return (
    <>
      {loading ? <Loading /> : (
        <div>
          <Link to="/meals/new"><button>Add new Meal</button></Link>
          {mealList.map((meal, index) => (
            <div key={meal.id} className='flex flex-row gap-2'>
              <p>{index + 1}</p>
              <p>{meal.name}</p>
              <button onClick={() => onUpdateButtonClick(meal.id)}>Edit</button>
              <button onClick={() => onDeleteButtonClick(meal.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
  
}

export default Meals