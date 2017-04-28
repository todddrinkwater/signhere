import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

class NavBar extends React.Component {

  render () {
    return (
      <div className="navBar">
      <Router>
        <ul className="nav-ul">
          <li><a href="#" className="menu-button">x</a></li>
          <li><Link to='/'>SignHere - Home</Link></li>
          <li><Link to='/signcontract'>Contract</Link></li>
          <li><Link to='/userprofile'>Profile</Link></li>
        </ul>
        </Router>
      </div>
    )
  }
}

export default NavBar
