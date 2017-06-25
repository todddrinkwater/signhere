import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

class NavBar extends React.Component {

  render () {
    return (
      <div>
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

          <div className="dropdown">
            <div className="dropbtn"><i className="fa fa-bars" aria-hidden="true"></i></div>
            <div className="dropdown-content">
              <Router>
                <div className="dropdown-content">
                  <Link to='/myContracts'>My Contracts</Link>
                  <Link to='/newContract'>Create a Contract</Link>
                  <Link to='/userprofile'>Profile</Link>
                </div>
              </Router>
            </div>
          </div>
      </div>
    )
  }
}

export default NavBar
