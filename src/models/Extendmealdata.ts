export interface ExtendedMealData {

    name: string;
    description: string;
    calories: number;
    carbohydrateContent: number;
    cholesterolContent: number;
    fatContent: number;
    fiberContent: number;
    proteinContent: number;
    saturatedFatContent: number;
    sodiumContent: number;
    sugarContent: number;
    image_1: string;
    image_2: string;
    image_3: string;
    image_4: string;
    price: number;
    keywords: string[];
    ingredients: string[];
}

export interface ExtendedMealDataWithId extends ExtendedMealData {

    id : number;
    createtAt : Date
}