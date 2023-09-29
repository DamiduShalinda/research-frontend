const API_BASE_URL = 'http://127.0.0.1:8000/';

export const API_ROUTES = {

    meals : `${API_BASE_URL}meals/`,
    mealsbyid : (id : number) =>  `${API_BASE_URL}meals/${id}/`,	
    categories : API_BASE_URL + 'cat/',
    categoriesbyid : (id : number) =>  `${API_BASE_URL}cat/${id}/`,
}