import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'
import { LoginData, RegisterData } from '../models/logindata'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import { AuthContext } from '../context/AuthContext'
import { ErrorResponse, JWTResponse } from '../models/responses'

const Login : React.FC = () => {

  const [showRegisterform, setShowRegisterForm] = React.useState<boolean>(false)
  const [ error , setError] = React.useState<ErrorResponse | null>( null)
  const { updateToken , token } = React.useContext(AuthContext)

    const onSubmit = (data : LoginData) => {
        axios.post(API_ROUTES.login , data)
          .then((res : AxiosResponse<JWTResponse , ErrorResponse>) => {
            
            if (res.status === 200) {
              {res.data.jwt && updateToken(res.data.jwt)}
            }
          })
          .catch((err : AxiosError<ErrorResponse>) => {
            setError(err.response?.data || null);
          })
    }


    const onRegister = (data : RegisterData) => {
      console.log(data)
    }



  return (
    <div className='flex flex-col items-center w-full justify-center gap-3'>
        {showRegisterform ? (
            <RegisterForm onSubmit={onRegister}/>
        ) : (
            <LoginForm onSubmit={onSubmit}/>
        )}
        <button className='bg-red-200 p-2 rounded-md' onClick={() => setShowRegisterForm(!showRegisterform)}>Add New User</button>
        <button className='bg-red-200 p-2 rounded-md'>Forget Password</button>

        <p>{token}</p>
        <p>{error?.detail}</p>
    </div>
  )
}

export default Login