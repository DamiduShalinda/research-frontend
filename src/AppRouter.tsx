import React from 'react'
import { Routes ,  Route } from 'react-router-dom'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Login from './pages/Login'
import Account from './pages/Account'

const AppRouter:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meals" element={<Meals/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default AppRouter