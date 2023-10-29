import React from 'react'
import { HealthProfile } from '../../models/healthprofile'
import { useForm } from 'react-hook-form'

interface HealthDataFormProps {
  onSubmit: (data : HealthProfile) => void
  isDisabled : boolean
  values? : HealthProfile
  onClickViewOrders : () => void
  onClickUpdate : () => void
}


const HealthDataForm:React.FC<HealthDataFormProps> = (data : HealthDataFormProps) => {

  const { register, handleSubmit , reset } = useForm<HealthProfile>()
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1 capitalize";
  const inputStyles = "block w-full h-10 px-4 py-2 text-base placeholder-gray-400 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200";
  const divstyles = "w-full md:w-2/3 mb-2"

  const categories = [
    'Mediterranean' , 
    'Kosher' , 
    'Sugar-Free',
    'Gluten-Free',
    'Organic',
    'Allergen-Free',
    'Nut-Free',
    'Low-FODMAP',
    'Low-Crab',
    'Vegetarianism',
    'DASH',
    'Low-Sodium',
    'Fruitarian',
    'Carnivore',
    'Veganism',
    'Lactose-Free',
    'Ketogenic',
    'Paleo Diet',
    'Whole30',
    'Raw Food',
    'Flexitarian',
    'Halal',
  ]

React.useEffect(() => {

  if (data.values) {
    reset(data.values)
  }

}, [])

  

  
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-3xl font-semibold"> Health Profile</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a helath profile of the user
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => data.onClickViewOrders()}
            >
              View All Orders
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col bg-gray-50">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <form onSubmit={handleSubmit(data.onSubmit)}>
              <div className='grid md:grid-cols-2 p-4 '>
            <div className={divstyles}>
              <label
                htmlFor="calories"
                className={labelStyles}
              >
                calories
              </label>
              <input
                type="number"
                placeholder="Enter calories"
                id="calories"
                disabled={data.isDisabled}
                className={inputStyles}
                {...register('calories', { min: 0 })}
              />
            </div>
            <div className={divstyles}>
                <label
                  htmlFor="carbohydratecontent"
                  className={labelStyles}
                >
                  carbohydrate content
                </label>
                <input
                  type="number"
                  placeholder="Enter carbohydratecontent"
                  id="carbohydratecontent"
                  disabled={data.isDisabled}
                  className={inputStyles}
                  {...register('carbohydrateContent', { min: 0 })}
                />
              </div>
              <div className={divstyles}>
                  <label htmlFor="cholesterolcontent" className={labelStyles}> cholesterol content</label>
                  <input
                      type="number"
                      placeholder='cholesterol content'
                      id='cholesterolcontent'
                      disabled={data.isDisabled}
                      {...register('cholesterolContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="fatcontent" className={labelStyles}> fat content</label>
                  <input
                      type="number"
                      placeholder='fat content'
                      id='fatcontent'
                      disabled={data.isDisabled}
                      {...register('fatContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="fibercontent" className={labelStyles}> fiber content</label>
                  <input
                      type="number"
                      placeholder='fiber content'
                      id='fibercontent'
                      disabled={data.isDisabled}
                      {...register('fiberContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="proteincontent" className={labelStyles}> protein content</label>
                  <input
                      type="number"
                      placeholder='protein content'
                      id='proteincontent'
                      disabled={data.isDisabled}
                      {...register('proteinContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="sodiumcontent" className={labelStyles}> sodium content</label>
                  <input
                      type="number"
                      placeholder='sodium content'
                      id='sodiumcontent'
                      disabled={data.isDisabled}
                      {...register('sodiumContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="saturatedfatcontent" className={labelStyles}> saturated fat content</label>
                  <input
                      type="number"
                      placeholder='saturated fat content'
                      id='saturatedfatcontent'
                      disabled={data.isDisabled}
                      {...register('saturatedFatContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="sugarcontent" className={labelStyles}> sugar content</label>
                  <input
                      type="number"
                      placeholder='sugar content'
                      id='sugarcontent'
                      disabled={data.isDisabled}
                      {...register('sugarContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
            <div className={divstyles}>
                <label htmlFor="condition name" className={labelStyles}> condition name</label>
                <input 
                    type="text" 
                    placeholder='condition name' 
                    id='conditionname'
                    disabled={data.isDisabled}
                    {...register('condition_name')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="fav_ing_1" className={labelStyles}>Favorite Ingredients - 1</label>
                <input 
                    type="text" 
                    placeholder='Favorite Ingredients - 1' 
                    id='fav_ing_1'
                    disabled={data.isDisabled}
                    {...register('fav_ing_1')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="fav_ing_2" className={labelStyles}> Favorite Ingredients - 2</label>
                <input 
                    type="text" 
                    placeholder=' Favorite Ingredients - 2' 
                    id='fav_ing_2'
                    disabled={data.isDisabled}
                    {...register('fav_ing_2')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="fav_ing_3" className={labelStyles}> Favorite Ingredients - 3</label>
                <input 
                    type="text" 
                    placeholder=' Favorite Ingredients - 3' 
                    id='fav_ing_3'
                    disabled={data.isDisabled}
                    {...register('fav_ing_3')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="condition name" className={labelStyles}>Health Condition - 1</label>
                <input 
                    type="text" 
                    placeholder='condition name' 
                    id='health_condition_1'
                    disabled={data.isDisabled}
                    {...register('health_condition_1')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="health_condition_2" className={labelStyles}>Health Condition - 2</label>
                <input 
                    type="text" 
                    placeholder='Health Condition - 2' 
                    id='health_condition_2'
                    disabled={data.isDisabled}
                    {...register('health_condition_2')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="health_condition_3" className={labelStyles}>Health Condition - 3</label>
                <input 
                    type="text" 
                    placeholder='Health Condition - 3' 
                    id='health_condition_3'
                    disabled={data.isDisabled}
                    {...register('health_condition_3')}
                    className={inputStyles}
                    />
              </div>
            <div className={divstyles}>
                <label htmlFor="Prefered Diet Category" className={labelStyles}>Prefered Diet Category</label>
                <select 
                    id="Prefered Diet Category" 
                    disabled={data.isDisabled}
                    {...register('prefered_diet_category')}
                    className={inputStyles}
                    >
                    <option value="">Select</option>
                    {categories.map((category , index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                </select>
              </div>
              </div>
            <input type="submit" value='Submit' 
            className='rounded-md bg-green-600 px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-1/3' 
            hidden={data.isDisabled} />
            <input type="button" value='Update' 
            className='rounded-md bg-blue-600 px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-1/3' 
            onClick={data.onClickUpdate}
            hidden={!data.isDisabled} />
            </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HealthDataForm