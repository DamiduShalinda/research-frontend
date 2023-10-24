import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'
import { LoginData, RegisterData } from '../models/logindata'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { API_ROUTES } from '../apiroutes'
import { AuthContext } from '../context/AuthContext'
import { ErrorResponse, JWTResponse } from '../models/responses'
import { Navigate, useNavigate } from 'react-router-dom'
import { SignInCard } from '../components/cards/SignInCard'

const Login : React.FC = () => {

  const [showRegisterform, setShowRegisterForm] = React.useState<boolean>(false)
  const [ error , setError] = React.useState<ErrorResponse | null>( null)
  const navigate = useNavigate()
  const { updateToken , token } = React.useContext(AuthContext)

    const onSubmit = (data : LoginData) => {
        axios.post(API_ROUTES.login , data)
          .then((res : AxiosResponse<JWTResponse , ErrorResponse>) => {
            
            if (res.status === 200) {
              res.data.jwt && updateToken(res.data.jwt)
              navigate("/")
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
    <div>
        {showRegisterform ? (
            <RegisterForm onSubmit={onRegister}/>
        ) : (
            <SignInCard handleSignUp={() => setShowRegisterForm(!showRegisterform)} onSubmit={onSubmit}/>
        )}
    </div>
  )
}

export default Login