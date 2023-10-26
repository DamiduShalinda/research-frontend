import React from 'react'
import { HealthProfile } from '../../models/healthprofile'
import { useForm } from 'react-hook-form'

interface HealthDataFormProps {
  onSubmit: (data : HealthProfile) => void
  isDisabled : boolean
  values? : HealthProfile
}


const HealthDataForm:React.FC<HealthDataFormProps> = (data : HealthDataFormProps) => {

  const { register, handleSubmit , reset } = useForm<HealthProfile>()
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1";
  const inputStyles = "block w-full h-10 px-4 py-2 text-base placeholder-gray-400 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200";
  const divstyles = "w-full md:w-1/3 mb-2"

React.useEffect(() => {

  if (data.values) {
    reset(data.values)
  }

}, [])

  

  
  return (
    <div>
      <form onSubmit={handleSubmit(data.onSubmit)}>
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
                  carbohydratecontent
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
                  <label htmlFor="cholesterolcontent" className={labelStyles}> cholesterolcontent</label>
                  <input
                      type="number"
                      placeholder='cholesterolcontent'
                      id='cholesterolcontent'
                      disabled={data.isDisabled}
                      {...register('cholesterolContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="fatcontent" className={labelStyles}> fatcontent</label>
                  <input
                      type="number"
                      placeholder='fatcontent'
                      id='fatcontent'
                      disabled={data.isDisabled}
                      {...register('fatContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="fibercontent" className={labelStyles}> fibercontent</label>
                  <input
                      type="number"
                      placeholder='fibercontent'
                      id='fibercontent'
                      disabled={data.isDisabled}
                      {...register('fiberContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="proteincontent" className={labelStyles}> proteincontent</label>
                  <input
                      type="number"
                      placeholder='proteincontent'
                      id='proteincontent'
                      disabled={data.isDisabled}
                      {...register('proteinContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="sodiumcontent" className={labelStyles}> sodiumcontent</label>
                  <input
                      type="number"
                      placeholder='sodiumcontent'
                      id='sodiumcontent'
                      disabled={data.isDisabled}
                      {...register('sodiumContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="saturatedfatcontent" className={labelStyles}> saturatedfatcontent</label>
                  <input
                      type="number"
                      placeholder='saturatedfatcontent'
                      id='saturatedfatcontent'
                      disabled={data.isDisabled}
                      {...register('saturatedFatContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
              <div className={divstyles}>
                  <label htmlFor="sugarcontent" className={labelStyles}> sugarcontent</label>
                  <input
                      type="number"
                      placeholder='sugarcontent'
                      id='sugarcontent'
                      disabled={data.isDisabled}
                      {...register('sugarContent' , {min: 0})}
                      className={inputStyles}
                      />
                </div>
            <div className={divstyles}>
                <label htmlFor="conditionname" className={labelStyles}> conditionname</label>
                <input 
                    type="text" 
                    placeholder='conditionname' 
                    id='conditionname'
                    disabled={data.isDisabled}
                    {...register('condition_name')}
                    className={inputStyles}
                    />
              </div>
            <input type="submit" value='Submit' 
            className='rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 w-1/3' 
            hidden={data.isDisabled} />
      </form>
    </div>
  )
}

export default HealthDataForm