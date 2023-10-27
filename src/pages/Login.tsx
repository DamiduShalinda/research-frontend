import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import { RegisterData } from '../models/logindata'
import { AuthContext } from '../context/AuthContext'
import { SignInCard } from '../components/cards/SignInCard'

const Login : React.FC = () => {

  const [showRegisterform, setShowRegisterForm] = React.useState<boolean>(false)
  const { login } = React.useContext(AuthContext)


    const onRegister = (data : RegisterData) => {
      console.log(data)
    }

    
  return (
    <div>
        {showRegisterform ? (
            <RegisterForm onSubmit={onRegister}/>
        ) : (
            <SignInCard handleSignUp={() => setShowRegisterForm(!showRegisterform)} onSubmit={login}/>
        )}
    </div>
  )
}

export default Login