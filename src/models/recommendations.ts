import { BasicMeal } from "./basicmealdata";

export interface Recommendations {

    message : string,
    recommended_meals : BasicMeal[]
    healthy_meals : BasicMeal[]
    based_on_previous_orders : BasicMeal[]
}