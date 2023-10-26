import { CartItem } from "../cartComponents/Cart"

export interface Order {
    items : CartItem[]
    date : string
    id : string
    status : string
    total : number
    user : string
  }