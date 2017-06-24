import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

class NavBar extends React.Component {

  render () {
    return (
      <div className="navBar">
      <Router>
        <ul className="nav-ul">
          <li className="nav-left-button"><Link to='/myContracts'>My Contracts</Link></li>
          <li className="nav-left-button"><Link to='/newContract'>Create A Contract</Link></li>
          <li className="nav-left-button"><Link to='/userprofile'>Profile</Link></li>
          <li className="nav-login"><Link to='/'>Login</Link></li>
        </ul>
        </Router>
      </div>
    )
  }
}

export default NavBar
