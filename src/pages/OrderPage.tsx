import { useParams } from "react-router-dom"
import { OrderCard } from "../components/cards/OrderCard"
import { Order } from "../models/Order"
import { useEffect, useState  ,useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import { API_ROUTES } from "../apiroutes"



const OrderPage = () => {


    const { id } = useParams()
    const [ order , setOrder ] = useState<Order>()
    const { token } = useContext(AuthContext)

    useEffect(() => {

    id && axios.get(API_ROUTES.specificOrder(parseInt(id)))
        .then((res) => {
            setOrder(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
 
    }, [])
    
  return (
    <div>
        {order && <OrderCard order={order}/> }
    </div>
  )
}

export default OrderPage