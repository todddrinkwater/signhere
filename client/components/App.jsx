import React from 'react'

import NavBar from './NavBar'
import Contract from './Contract'
import Login from './Login'
import UserProfile from './UserProfile'

function App (props) {
  return (
    <div className='app-container'>
      <NavBar />
      <Contract />
      <Login />
      <UserProfile />
    </div>
  )
}

export default App
