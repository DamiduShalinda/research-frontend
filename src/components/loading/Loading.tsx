import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading:React.FC = () => {
  return (
    <div className='flex items-center justify-center h-[70vh] w-full'>
        <BeatLoader color="#36d7b7" size={20} />
    </div>
  )
}

export default Loading
