import React from 'react'

class NavBar extends React.Component {

  render () {
    return (
      <div className="navBar">
        <ul className="nav-ul">
          <li><a href="#" className="menu-button">x</a></li>
          <li><a href="#" className="nav-logo">SignHere - Home</a></li>
          <li><a href="#" className="nav-contact">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
