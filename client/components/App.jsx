import React from 'react'

import NavBar from './NavBar'
import Contract from './Contract'
import Login from './Login'

function App (props) {
  return (
    <div className='app-container'>
      <NavBar />
      <Contract />
      <Login />
    </div>
  )
}

export default App
