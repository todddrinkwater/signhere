import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './NavBar'
import Contract from './Contract'
import Login from './Login'
import UserProfile from './UserProfile'

function App (props) {
  return (
    <div className='app-container'>
      <NavBar />
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/signcontract' component={Contract} />
          <Route path='/userprofile' component={UserProfile} />
        </div>
      </Router>
    </div>
  )
}

export default App
