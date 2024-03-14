import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
  const {userid} = useParams();
  return (
    <div className=' bg-gray-900 p-4 text-white font-medium'>User : {userid}</div>
  )
}

export default User