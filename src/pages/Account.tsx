import React from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import { AddHeader } from '../utils/AxiosHeader'
import { AuthContext } from '../context/AuthContext'
import { ErrorResponse } from '../models/responses'
import { BasicOrder } from '../models/Order'
import { Table } from '../components/Table'
import HealthProfile from './HealthProfile'
import HealthProfilePage from './HealthProfile'

const Account:React.FC = () => {

  const { token } = React.useContext(AuthContext)
  const [ ordersList , setOrdersList ] = React.useState<BasicOrder[]>([])
  const [ showHelathDetails , setShowHelathDetails ] = React.useState<boolean>(false)



  React.useEffect(() => {
      
      const axiosInstance = AddHeader(token , API_ROUTES.listOrder)
      axiosInstance.get('')
        .then((res : AxiosResponse<BasicOrder[]>) => {
          setOrdersList(res.data)
        })
        .catch((err : AxiosError<ErrorResponse>) => {
          console.log(err.response?.data)
        })
    
    }, [])

  function showHelathDetailsCOmp(): void {
    setShowHelathDetails(!showHelathDetails)
  }

  return (
      <div>
          {showHelathDetails ? (
            <div>
              <HealthProfilePage onViewOrdersClick={showHelathDetailsCOmp}/>
            </div>
            ) : (
              <div>
                <Table ordersList={ordersList} onViewHealthClick={showHelathDetailsCOmp} />
              </div>
            )}
      </div>
  )
}

export default Account