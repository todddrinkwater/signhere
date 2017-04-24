import React from 'react'

class NavBar extends React.Component {

  render () {
    return (
      <div className="NavBar">
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">SignHere - Home</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
