import React from 'react'
import { connect } from 'react-redux'

class UserProfile extends React.Component {

  render (props) {
    console.log(props)
    return (
      <div className="userProfile">
        <h1>Name:{this.props.fname} {this.props.lname}</h1>
        <ul>
          <li>Org:{this.props.organisation}</li>
          <li>Email:{this.props.email}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state);
  return {
    currentState: state
  }
}


export default connect(mapStateToProps)(UserProfile)
