import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

class NavBar extends React.Component {

  render () {
    return (
      <div className="navBar">
      <Router>
        <ul className="nav-ul">
          <li><Link to='/myContracts'>My Contracts</Link></li>
          <li><Link to='/newContract'>Create A Contract</Link></li>
          <li><Link to='/userprofile'>Profile</Link></li>
          <li className="nav-login"><Link to='/'>Login</Link></li>
        </ul>
        </Router>
      </div>
    )
  }
}

export default NavBar
