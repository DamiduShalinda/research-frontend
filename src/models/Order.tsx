import { CartItem } from "../cartComponents/Cart"

interface meal {
  name : string,
  price : number,
  quantity : number,
}

interface user {
  username : string,
  email : string,
}


export interface Order {
    id : number
    total : number
    createdAt : Date
    status : string
    user : user
    items : meal[]
  }


export interface BasicOrder {
  id : number,
  total : number,
  createdAt : Date,
  status : string,
}