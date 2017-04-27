import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

class NavBar extends React.Component {

  render () {
    return (
      <div className="navBar">
      <Router>
        <ul className="nav-ul">
          <li><a href="#" className="menu-button">x</a></li>
          <li><Link to='/'><a href="#" className="nav-logo">SignHere - Home</a></Link></li>
          <li><Link to='/signcontract'><a href="#" className="nav-contract">Contract</a></Link></li>
          <li><Link to='/userprofile'><a href="#" className="nav-profile">Profile</a></Link></li>
        </ul>
        </Router>
      </div>
    )
  }
}

export default NavBar
