import React from 'react'
import { Link } from 'react-router-dom'

const Navbar :React.FC= ()  => {
    
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
            </ul>
        </div> 
    </div>
  )
}

export default Navbar