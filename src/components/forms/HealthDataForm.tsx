import React from 'react'
import { HealthProfile } from '../../models/healthprofile'
import { useForm } from 'react-hook-form'

interface HealthDataFormProps {
  onSubmit: (data : HealthProfile) => void
  isDisabled : boolean
  values : HealthProfile
}


const HealthDataForm:React.FC<HealthDataFormProps> = (data : HealthDataFormProps) => {

  const { register, handleSubmit, setValue , reset } = useForm<HealthProfile>()

React.useEffect(() => {

  reset(data.values)

}, [])

  

  
  return (
    <div>
      <form onSubmit={handleSubmit(data.onSubmit)} className='flex flex-col gap-2'>
            <div className='grid grid-cols-2 gap-2'>
              <div className="flex flex-col w-full">
                  <label htmlFor="calories" className='mb-1'> calories</label>
                  <input
                      type="number"
                      placeholder='calories'
                      id='username'
                      disabled={data.isDisabled}
                      {...register('calories' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="carbohydratecontent" className='mb-1'> carbohydratecontent</label>
                  <input
                      type="number"
                      placeholder='carbohydratecontent'
                      id='carbohydratecontent'
                      disabled={data.isDisabled}
                      {...register('carbohydrateContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="cholesterolcontent" className='mb-1'> cholesterolcontent</label>
                  <input
                      type="number"
                      placeholder='cholesterolcontent'
                      id='cholesterolcontent'
                      disabled={data.isDisabled}
                      {...register('cholesterolContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="fatcontent" className='mb-1'> fatcontent</label>
                  <input
                      type="number"
                      placeholder='fatcontent'
                      id='fatcontent'
                      disabled={data.isDisabled}
                      {...register('fatContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="fibercontent" className='mb-1'> fibercontent</label>
                  <input
                      type="number"
                      placeholder='fibercontent'
                      id='fibercontent'
                      disabled={data.isDisabled}
                      {...register('fiberContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="proteincontent" className='mb-1'> proteincontent</label>
                  <input
                      type="number"
                      placeholder='proteincontent'
                      id='proteincontent'
                      disabled={data.isDisabled}
                      {...register('proteinContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="sodiumcontent" className='mb-1'> sodiumcontent</label>
                  <input
                      type="number"
                      placeholder='sodiumcontent'
                      id='sodiumcontent'
                      disabled={data.isDisabled}
                      {...register('sodiumContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="saturatedfatcontent" className='mb-1'> saturatedfatcontent</label>
                  <input
                      type="number"
                      placeholder='saturatedfatcontent'
                      id='saturatedfatcontent'
                      disabled={data.isDisabled}
                      {...register('saturatedFatContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="sugarcontent" className='mb-1'> sugarcontent</label>
                  <input
                      type="number"
                      placeholder='sugarcontent'
                      id='sugarcontent'
                      disabled={data.isDisabled}
                      {...register('sugarContent' , {min: 0})}
                      className="p-2 border rounded"
                      />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="conditionname" className='mb-1'> conditionname</label>
                <input 
                    type="text" 
                    placeholder='conditionname' 
                    id='conditionname'
                    disabled={data.isDisabled}
                    {...register('condition_name')}
                    className="p-2 border rounded"
                    />
              </div>
            <input type="submit" value='Submit' className='bg-slate-300 border rounded-md w-full' hidden={data.isDisabled}/>
      </form>
    </div>
  )
}

export default HealthDataForm