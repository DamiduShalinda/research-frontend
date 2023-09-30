import React from 'react'
import HealthDataForm from '../components/forms/HealthDataForm'
import { HealthProfile } from '../models/healthprofile'

const Account:React.FC = () => {

    const onSubmit = (data : HealthProfile)  => {
            console.log(data)
    }
  return (
    <div>

        <div className='w-1/2'>
          <HealthDataForm onSubmit={onSubmit}/>
        </div>
    </div>


  )
}

export default Account