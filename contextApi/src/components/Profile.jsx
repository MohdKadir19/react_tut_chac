import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
  if (!user) return <div>  <p>Please Log in</p></div>
  
  return <div className=''> Welcome : {user.username}</div>
}

export default Profile