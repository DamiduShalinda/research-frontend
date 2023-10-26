import React from 'react'
import HealthDataForm from '../components/forms/HealthDataForm'
import { HealthProfile } from '../models/healthprofile'
import { AxiosError, AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import { AddHeader } from '../utils/AxiosHeader'
import { AuthContext } from '../context/AuthContext'
import Loading from '../components/loading/Loading'
import { ErrorResponse } from '../models/responses'

const Account:React.FC = () => {

  const { token } = React.useContext(AuthContext)
  const [ healthprofile , setHealthProfile] = React.useState<HealthProfile>()
  const [ isDisabled ,setDisabled] = React.useState<boolean>(true)
  const [ loading , setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {

    const axiosInstance = AddHeader(token , API_ROUTES.health)
    axiosInstance.get(API_ROUTES.health)
      .then((res : AxiosResponse<HealthProfile>) => {
        setHealthProfile(res.data)
        setLoading(false)
      })
      .catch((err : AxiosError<ErrorResponse>) => {
        if (err.response?.status === 404) {
          console.log("No health profile found")
          setLoading(false)
        } else {
          console.log(err.response?.data)
        }
      })
  
  
  }, [])
  

  const onUpdateButtonClick = () => {
    setDisabled(false)
  }

    const onSubmit = (data : HealthProfile)  => {
            console.log(data)
    }
  return (
    <div className='mx-3'>
    {loading ? (
      <Loading />
    ) : healthprofile ? (
      <div>
        <HealthDataForm onSubmit={onSubmit} values={healthprofile} isDisabled={isDisabled} />
        <button type='button' onClick={onUpdateButtonClick}>Update</button>
      </div>
    ) : (
      <>
      <div className='font-medium'>No health profile found</div>
      <HealthDataForm onSubmit={onSubmit} isDisabled={false} />
      </>
    )}
  </div>
  )
}

export default Account