import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }

  render () {
    var userDetails = this.props.userDetails
    return (
      <div className="userProfile">
        <h1>My Profile</h1>
        <img className="userProfile-img" src={userDetails.user_image_url} />
        <h1>{userDetails.fName} {userDetails.lName}</h1>
        <ul>
          <li><strong>Organisation:</strong> {userDetails.organisation}</li>
          <li><strong>Email:</strong> {userDetails.email}</li>
          <li><strong>Phone:</strong> {userDetails.phone}</li>
          <li><strong>Street Address:</strong> {userDetails.street_address}</li>
          <li><strong>Suburb:</strong> {userDetails.suburb}</li>
          <li><strong>City:</strong> {userDetails.city}</li>
          <li><strong>Country:</strong> {userDetails.country}</li>
        </ul>
      </div>
    )
  }
}

UserProfile.propTypes = {
  userDetails: PropTypes.object
}

function mapStateToProps(state){
  return {
    userDetails: state.user
  }
}


export default connect(mapStateToProps)(UserProfile)
