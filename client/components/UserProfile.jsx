import React from 'react'
import { connect } from 'react-redux'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    console.log(props);
  }

  render () {
    return (
      <div className="userProfile">
        <h1>My Profile</h1>
        <h1>{this.props.userDetails.fName} {this.props.userDetails.lName}</h1>
        <ul>
          <li><strong>Organisation:</strong> {this.props.userDetails.organisation}</li>
          <li><strong>Email:</strong> {this.props.userDetails.email}</li>
          <li><strong>Phone:</strong> {this.props.userDetails.phone}</li>
          <li><strong>Street Address:</strong> {this.props.userDetails.street_address}</li>
          <li><strong>Suburb:</strong> {this.props.userDetails.suburb}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userDetails: state.user
  }
}


export default connect(mapStateToProps)(UserProfile)
