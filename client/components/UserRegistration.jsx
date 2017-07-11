import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { addNewUser } from '../actions/index'

class UserRegistration extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="WriteContract">
        <form method="post" onSubmit={ (e) => { registerNewUser(e) } } >
        <h3>New User Registration</h3>
          <label>First Name:</label><br /><input className="userRegField" type="text" name="fName" /><br />
          <label>Last Name:</label><br /><input className="userRegField" type="text" name="lName" /><br />
          <label>Organisation:</label><br /><input className="userRegField" type="text" name="organisation"></input><br />
          <label>Phone Number:</label><br /><input className="userRegField" type="text" name="phone"></input><br />
          <label>Email:</label><br /><input className="userRegField" type="text" name="email"></input><br />
          <label>Street Address:</label><br /><input className="userRegField" type="text" name="street"></input><br />
          <label>Suburb:</label><br /><input className="userRegField" type="text" name="suburb"></input><br />
              <button type="submit" className="newUser-submit" value="Sign Me Up!" name="submit">Submit</button>
        </form>
      </div>
    )}
}

function registerNewUser(e){
  e.preventDefault(e)
  var userRegistrationForm = {
    fName: e.target.elements.fName.value,
    lName: e.target.elements.lName.value,
    organisation: e.target.elements.organisation.value,
    phone: e.target.elements.phone.value,
    email: e.target.elements.email.value,
    street_address: e.target.elements.street.value,
    suburb: e.target.elements.suburb.value
  }
  addNewUser(userRegistrationForm, testCallback)
}

function testCallback (err, status) {
  if (err) {
    console.log(err)
  } else {
    console.log(status)
  }
}

function mapStateToProps(state){
    return {
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(UserRegistration)
