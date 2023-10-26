import { useParams } from "react-router-dom"
import { OrderCard } from "../components/cards/OrderCard"
import { Order } from "./Order"

const data = [
    {
        "meal": {
            "id": 3,
            "name": "Vegetarian Pasta",
            "description": "A delicious pasta dish with fresh vegetables",
            "image": "vegetarian_pasta.jpg",
            "price": 12.99,
            "ingredients": [
                "Pasta",
                "Tomatoes",
                "Spinach",
                "Olive oil",
                "Parmesan cheese"
            ],
            "keywords": [
                "Healthy",
                "Vegetarian",
                "Pasta"
            ]
        },
        "quantity": 1
    },
    {
        "meal": {
            "id": 4,
            "name": "Grilled Salmon",
            "description": "Grilled salmon seasoned to perfection",
            "image": "grilled_salmon.jpg",
            "price": 18.99,
            "ingredients": [
                "Olive oil",
                "Salmon",
                "Lemon",
                "Herbs"
            ],
            "keywords": [
                "Healthy",
                "Salmon",
                "Seafood"
            ]
        },
        "quantity": 3
    },
    {
        "meal": {
            "id": 2,
            "name": "Delicious Meal",
            "description": "A tasty and nutritious meal",
            "image": "meal_image.jpg",
            "price": 15.99,
            "ingredients": [
                "Chicken",
                "Broccoli",
                "Rice"
            ],
            "keywords": [
                "Healthy",
                "Tasty"
            ]
        },
        "quantity": 1
    }
]

const order : Order = {
    user: "John Doe",
    total: 71.96,
    status: "Delivered",
    date: "2021-06-15",
    id: "1",
    items: data
}

const OrderPage = () => {


    const { id } = useParams()


  return (
    <div>
        <p>{id}</p>
        <OrderCard order={order}/>
    </div>
  )
}

export default OrderPage