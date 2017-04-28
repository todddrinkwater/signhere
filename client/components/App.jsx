import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import NavBar from './NavBar'
import ContractList from '../containers/ContractList'
import Login from './Login'
import UserProfile from './UserProfile'
import Contract from './Contract'

function App (props) {
  return (
    <div className='app-container'>
      <NavBar />
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/myContracts' component={ContractList} />
          <Route path='/contracttosign' component={Contract} />
          <Route path='/userprofile' component={UserProfile} />
        </div>
      </Router>
    </div>
  )
}

export default App
