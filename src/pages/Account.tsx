import React from 'react'
import HealthDataForm from '../components/forms/HealthDataForm'
import { HealthProfile } from '../models/healthprofile'
import { AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import { AddHeader } from '../utils/AxiosHeader'
import { AuthContext } from '../context/AuthContext'
import Loading from '../components/loading/Loading'

const Account:React.FC = () => {

  const { token } = React.useContext(AuthContext)
  const [ healthprofile , setHealthProfile] = React.useState<HealthProfile>()
  const [ isDisabled ,setDisabled] = React.useState<boolean>(true)

  React.useEffect(() => {

    getHealthData(token).then(
      res => {
        setHealthProfile(res)
      }
    )
    
    async function getHealthData(token: string) {
      const axiosInstance = AddHeader(token , API_ROUTES.health)
      const response : AxiosResponse<HealthProfile> = await axiosInstance.get("")
      return response.data
    }
  
  }, [])
  

  const onUpdateButtonClick = () => {
    setDisabled(false)
  }

    const onSubmit = (data : HealthProfile)  => {
            console.log(data)
    }
  return (
    <div>

        {healthprofile ? 
        <div className='w-1/2'>
        <HealthDataForm onSubmit={onSubmit} values={healthprofile} isDisabled={isDisabled}/>
        </div> :
        <Loading/>
        }
        <button type="button" onClick={() => onUpdateButtonClick()}>Update</button>
    </div>


  )
}

export default Account