import React from 'react'
import { useForm  , SubmitHandler} from 'react-hook-form';
import { ExtendedMealData } from './models/Extendmealdata';

export interface MealFormData extends Omit<ExtendedMealData, 'keywords' | 'ingredients'> {
    keywords: string;
    ingredients: string;
  }  



const MealAddForm : React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<MealFormData>();

    const onSubmit : SubmitHandler<MealFormData> = (data) => {
        const formattedData : ExtendedMealData = {
            ...data,
            keywords: data.keywords.split(',').map((keyword) => keyword.trim().toLowerCase()),
            ingredients: data.ingredients.split(',').map((ingredient) => ingredient.trim().toLowerCase())
        }
        console.log(formattedData)
    }

  return (
    <>
    <div>MealAddForm</div>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 w-1/2'>
    <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            {...register('name', { required: true, maxLength: 20 })}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            {...register('description', { required: true, maxLength: 20 })}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1">
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            {...register('price', { required: true, maxLength: 20 })}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="keywords" className="mb-1">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            id="keywords"
            placeholder="Enter keywords"
            {...register('keywords', { required: true, maxLength: 20 })}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="ingredients" className="mb-1">
            Ingredients (comma separated)
          </label>
          <input
            type="text"
            id="ingredients"
            placeholder="Enter ingredients"
            {...register('ingredients', { required: true, maxLength: 20 })}
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col">
            <label htmlFor="image" className="mb-1">
                Image
            </label>
            <input
                type="text"
                id="image"
                placeholder="Enter image"
                {...register('image', { required: true, maxLength: 20 })}
                className="p-2 border rounded"
            />
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className="flex flex-col">
                <label htmlFor="calories" className="mb-1">
                    Calories
                </label>
                <input
                    type="text"
                    id="calories"
                    placeholder="calories"
                    {...register('calories', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="carbohydrateContent" className="mb-1">
                carbohydrateContent
                </label>
                <input
                    type="text"
                    id="carbohydrateContent"
                    placeholder="Enter carbohydrateContent"
                    {...register('carbohydrateContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="cholesterolContent" className="mb-1">
                cholesterolContent
                </label>
                <input
                    type="text"
                    id="cholesterolContent"
                    placeholder="Enter cholesterolContent"
                    {...register('cholesterolContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="fatContent" className="mb-1">
                fatContent
                </label>
                <input
                    type="text"
                    id="fatContent"
                    placeholder="Enter fatContent"
                    {...register('fatContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="fiberContent" className="mb-1">
                fiberContent
                </label>
                <input
                    type="text"
                    id="fiberContent"
                    placeholder="Enter fatContent"
                    {...register('fiberContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="proteinContent" className="mb-1">
                proteinContent
                </label>
                <input
                    type="text"
                    id="proteinContent"
                    placeholder="Enter proteinContent"
                    {...register('proteinContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="saturatedFatContent" className="mb-1">
                saturatedFatContent
                </label>
                <input
                    type="text"
                    id="saturatedFatContent"
                    placeholder="Enter saturatedFatContent"
                    {...register('saturatedFatContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="saturatedFatContent" className="mb-1">
                saturatedFatContent
                </label>
                <input
                    type="text"
                    id="saturatedFatContent"
                    placeholder="Enter saturatedFatContent"
                    {...register('sodiumContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="sugarContent" className="mb-1">
                sugarContent
                </label>
                <input
                    type="text"
                    id="sugarContent"
                    placeholder="Enter sugarContent"
                    {...register('sugarContent', { required: true, maxLength: 20 })}
                    className="p-2 border rounded"
                />
            </div>
        </div>
        <input type="submit" />
    </form>
    </>
    

  )
}

export default MealAddForm