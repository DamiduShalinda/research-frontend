import React from 'react'
import { HealthProfile } from '../../models/healthprofile'
import { useForm } from 'react-hook-form'

interface HealthDataFormProps {
  onSubmit: (data : HealthProfile) => void
}


const HealthDataForm:React.FC<HealthDataFormProps> = (data : HealthDataFormProps) => {

  const { register, handleSubmit, errors } = useForm<HealthProfile>()
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
                      {...register('carbohydratecontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="cholesterolcontent" className='mb-1'> cholesterolcontent</label>
                  <input
                      type="number"
                      placeholder='cholesterolcontent'
                      id='cholesterolcontent'
                      {...register('cholesterolcontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="fatcontent" className='mb-1'> fatcontent</label>
                  <input
                      type="number"
                      placeholder='fatcontent'
                      id='fatcontent'
                      {...register('fatcontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="fibercontent" className='mb-1'> fibercontent</label>
                  <input
                      type="number"
                      placeholder='fibercontent'
                      id='fibercontent'
                      {...register('fibercontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="proteincontent" className='mb-1'> proteincontent</label>
                  <input
                      type="number"
                      placeholder='proteincontent'
                      id='proteincontent'
                      {...register('proteincontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="sodiumcontent" className='mb-1'> sodiumcontent</label>
                  <input
                      type="number"
                      placeholder='sodiumcontent'
                      id='sodiumcontent'
                      {...register('sodiumcontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="saturatedfatcontent" className='mb-1'> saturatedfatcontent</label>
                  <input
                      type="number"
                      placeholder='saturatedfatcontent'
                      id='saturatedfatcontent'
                      {...register('saturatedfatcontent')}
                      className="p-2 border rounded"
                      />
                </div>
              <div className="flex flex-col w-full">
                  <label htmlFor="sugarcontent" className='mb-1'> sugarcontent</label>
                  <input
                      type="number"
                      placeholder='sugarcontent'
                      id='sugarcontent'
                      {...register('sugarcontent')}
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
                    {...register('conditionname')}
                    className="p-2 border rounded"
                    />
              </div>
            <input type="submit" value='Submit' className='bg-slate-300 border rounded-md w-full'/>
      </form>
    </div>
  )
}

export default HealthDataForm