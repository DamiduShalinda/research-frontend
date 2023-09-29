import React from 'react'
import { Routes ,  Route } from 'react-router-dom'
import Home from './Home'
import Meals from './Meals'

const AppRouter:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meals" element={<Meals/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter