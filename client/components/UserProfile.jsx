import React from 'react'

class UserProfile extends React.Component {

  render () {
    return (
      <div className="userProfile">
        <h1>{this.props.fname} {this.props.lname}</h1>
        <ul>
          <li>{this.props.organisation}</li>
          <li>{this.props.email}</li>
        </ul>
      </div>
    )
  }
}

export default UserProfile
