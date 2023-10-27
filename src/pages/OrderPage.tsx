import { useParams  } from "react-router-dom"
import { OrderCard } from "../components/cards/OrderCard"
import { Order } from "../models/Order"
import { useEffect, useState  ,useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import { API_ROUTES } from "../apiroutes"
import { AddHeader } from "../utils/AxiosHeader"



const OrderPage = () => {


    const { id } = useParams()
    const [ order , setOrder ] = useState<Order>()
    const { token } = useContext(AuthContext)
    const [ qrstring , setQRString ] = useState<string>("")

    useEffect(() => {

    const axiosInstance = AddHeader(token , API_ROUTES.lastOrder)

    id ? axios.get(API_ROUTES.specificOrder(parseInt(id)))
        .then((res) => {
            setOrder(res.data)
            setQRString(getQRString(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
        : axiosInstance.get(API_ROUTES.lastOrder)
        .then((res) => {
            setOrder(res.data)
            setQRString(getQRString(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
 
    }, [])

    const getQRString = (order : Order) => {
        const meal = order.items[0].name.replace(/\s/g, '')
        console.log(meal)
        return `models/${meal}.pbl`
    }
    
  return (
    <div>
        {order && <OrderCard order={order} qrString={qrstring}/> }
    </div>
  )
}

export default OrderPage