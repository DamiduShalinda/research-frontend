import React from 'react'
import HealthProfilePage from './HealthProfile'
import { useNavigate } from 'react-router-dom'

const Account:React.FC = () => {

  
  const navigate = useNavigate();


  const showHelathDetailsCOmp = () => {
    navigate('/allorder')
  }

  return (
      <div>
        <div className='mx-2'>
              <HealthProfilePage onViewOrdersClick={showHelathDetailsCOmp}/>
            </div>
      </div>
  )
}

export default Account