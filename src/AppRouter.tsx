import React from 'react'
import { Routes ,  Route } from 'react-router-dom'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Login from './pages/Login'
import Account from './pages/Account'
import { AuthContext } from './context/AuthContext'
import HomeWithoutLogin from './pages/HomeWithoutLogin'
import ProtectedRoute from './utils/ProtectedRoute'
import ExtendedMeal from './pages/ExtendedMeal'
import MealsAddingPage from './pages/MealsAddingPage'
import CartView from './cartComponents/CartiView'
import OrderPage from './pages/OrderPage'
import Layout from './utils/Layout'
import Review from './pages/Review'
import AllOrderPage from './pages/AllOrderPage'

const AppRouter:React.FC = () => {

  const { token } = React.useContext(AuthContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <ProtectedRoute><Layout><Home/></Layout></ProtectedRoute> : <Layout><HomeWithoutLogin/></Layout>}/>
        <Route path="/meals" element={<ProtectedRoute><Meals/></ProtectedRoute>}/>
        <Route path="/meals/new/:id" element={<ProtectedRoute><MealsAddingPage/></ProtectedRoute>}/>
        <Route path="/meals/new/" element={<ProtectedRoute><MealsAddingPage/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<ProtectedRoute><Layout><Account/></Layout></ProtectedRoute>}/>
        <Route path="/extendmeal/:id" element={<ProtectedRoute><Layout><ExtendedMeal/></Layout></ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute><Layout><CartView/></Layout></ProtectedRoute>}/>
        <Route path="/order/:id" element={<ProtectedRoute><Layout><OrderPage/></Layout></ProtectedRoute>}/>
        <Route path="/order" element={<ProtectedRoute><Layout><OrderPage/></Layout></ProtectedRoute>}/>
        <Route path="/allorder" element={<ProtectedRoute><Layout><AllOrderPage/></Layout></ProtectedRoute>}/>
        <Route path="/review" element={<Layout><Review/></Layout>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default AppRouter