import React from 'react'
import { Link , Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const Navbar :React.FC= ()  => {

  const { token , logout } = React.useContext(AuthContext)
    
  return (
    <div className='w-full h-auto bg-slate-500'>
        <div className="flex flex-row justify-between items-center">
            <Link to='/'>
              <p className='text-2xl p-2'>Title Menu</p>
            </Link>
            <ul className='flex flex-row items-center justify-center p-2 gap-2
            '>
                <Link to={'/meals'}>
                  <li>Meals</li>
                </Link>
                {token ? (
                  <>
                  <Link to='/account'>
                    <li className='bg-slate-200 p-2 rounded-md'>Account</li>
                  </Link>
                  <li className='bg-slate-200 p-2 rounded-md' onClick={() => logout()}>Logout</li>
                  </>
                    

                ) : (
                  <Link to={'/login'}>
                    <li className='bg-slate-200 p-2 rounded-md'>Login</li>
                  </Link>
                )}
            </ul>
        </div> 
    </div>
  )
}

export default Navbar