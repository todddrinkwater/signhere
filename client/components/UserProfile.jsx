import React from 'react'
import { connect } from 'react-redux'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.userDetails)
    return (
      <div className="userProfile">
        <h1>Name:{this.props.userDetails.fName} {this.props.userDetails.lName}</h1>
        <ul>
          <li>Org:{this.props.userDetails.organisation}</li>
          <li>Email:{this.props.userDetails.email}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userDetails: state.user[0].loggedInUserDetails
  }
}


export default connect(mapStateToProps)(UserProfile)
