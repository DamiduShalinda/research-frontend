import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import { RegisterData } from '../models/logindata'
import { AuthContext } from '../context/AuthContext'
import { SignInCard } from '../components/cards/SignInCard'
import { SignUpCard } from '../components/cards/SignUpCard'
import axios from 'axios'
import { API_ROUTES } from '../apiroutes'
import { useNavigate } from 'react-router-dom'

const Login : React.FC = () => {

  const [showRegisterform, setShowRegisterForm] = React.useState<boolean>(false)
  const { login } = React.useContext(AuthContext)
  const navigate = useNavigate();


    const onRegister = (data : RegisterData) => {
      axios.post(API_ROUTES.register, data).then((res) => {
        console.log(res)
        setShowRegisterForm(false)
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
      })
    }

    
  return (
    <div>
        {showRegisterform ? (
            <SignUpCard onSubmit={onRegister} handleClickSignIn={() => setShowRegisterForm(!showRegisterform)}/>
        ) : (
            <SignInCard handleSignUp={() => setShowRegisterForm(!showRegisterform)} onSubmit={login}/>
        )}
    </div>
  )
}

export default Login