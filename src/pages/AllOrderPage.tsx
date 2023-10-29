import { AxiosResponse, AxiosError } from 'axios';
import React from 'react'
import { useNavigate, ErrorResponse } from 'react-router-dom';
import { API_ROUTES } from '../apiroutes';
import { AuthContext } from '../context/AuthContext';
import { BasicOrder } from '../models/Order';
import { AddHeader } from '../utils/AxiosHeader';
import { Table } from '../components/Table';
import Loading from '../components/loading/Loading';

const AllOrderPage = () => {

    const { token } = React.useContext(AuthContext)
    const [ ordersList , setOrdersList ] = React.useState<BasicOrder[]>([])
    const [ loading , setLoading ] = React.useState<boolean>(true)
    const navigate = useNavigate();

    React.useEffect(() => {
      
        const axiosInstance = AddHeader(token , API_ROUTES.listOrder)
        axiosInstance.get('')
          .then((res : AxiosResponse<BasicOrder[]>) => {
            setOrdersList(res.data)
            setLoading(false)
          })
          .catch((err : AxiosError<ErrorResponse>) => {
            console.log(err.response?.data)
          })
      
      }, [])

      const showHelathDetailsCOmp = () => {
        navigate('/account')
      }



  return (
    <div className='mx-4'>
        {loading ? (
            <Loading />
        ) : (
          <Table ordersList={ordersList} onViewHealthClick={showHelathDetailsCOmp} />
        )}
    </div>
  )
}

export default AllOrderPage