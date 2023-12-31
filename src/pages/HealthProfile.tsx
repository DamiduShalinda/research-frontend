import React from 'react'
import HealthDataForm from '../components/forms/HealthDataForm'
import { HealthProfile } from '../models/healthprofile'
import Loading from '../components/loading/Loading'
import { AxiosResponse, AxiosError } from 'axios'
import { ErrorResponse } from 'react-router-dom'
import { API_ROUTES } from '../apiroutes'
import { AddHeader } from '../utils/AxiosHeader'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';

interface Props {
  onViewOrdersClick: () => void
}

const HealthProfilePage = ({onViewOrdersClick} : Props) => {

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
        const axiosInstance = AddHeader(token , API_ROUTES.health)
        axiosInstance.post(API_ROUTES.health , data)
          .then((res : AxiosResponse<HealthProfile>) => {
            setHealthProfile(res.data)
            setDisabled(true)
            toast.success("Health profile updated successfully")
          })
          .catch((err : AxiosError<ErrorResponse>) => {
            if (err.response?.status === 500) {
              setDisabled(true)
              toast.success("Health profile updated successfully")
              window.location.reload()
            } else {
              console.log(err.response?.data)
            }
          }
          )
    }


  return (
    <div>
    {loading ? (
      <Loading />
    ) : healthprofile ? (
      <div>
        <HealthDataForm onSubmit={onSubmit} values={healthprofile} isDisabled={isDisabled} onClickViewOrders={onViewOrdersClick} onClickUpdate={onUpdateButtonClick}/>
      </div>
    ) : (
      <>
      <div className='font-medium text-center mt-4'>No health profile found</div>
      <HealthDataForm onSubmit={onSubmit} isDisabled={false}  onClickViewOrders={onViewOrdersClick} onClickUpdate={onUpdateButtonClick}/>
      </>
    )}
  </div>
  )
}

export default HealthProfilePage