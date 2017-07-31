import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { loggedInUser } from '../actions/index'
import { getUserContracts } from '../actions/index'

class Login extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    return (
      <div className="login">
      <div className="logo">signhere</div>
        <form className="loginForm" onSubmit={ (e) => { LogInUser(e, this.props.dispatch) } }>
            <label>Email:</label><br /><input type="text" name="email" /><br />
            <label>Password:</label><br /><input type="text" name="password" /><br />
        <input type='submit' value='Log In' />
        </form>
        <div className="newUserLink">
          <Router>
            <Link to="/userRegistration">New user? Sign up here!</Link>
          </Router>
        </div>
        <div className="note">
            WORK IN PROGRESS:
            To use this demo, type in ID number as 1, and click on the login button. You can then go to the contracts page to view all contracts associated with this account or go the profile page to view user information.
        </div>
      </div>
    )
  }
}

function LogInUser(e, dispatch, userId){
  console.log(userId)
  e.preventDefault(e)
  var userLogin = {
    email: e.target.elements.email.value,
    password: e.target.password.value
  }
  loggedInUser(userLogin, dispatch)
}

function mapStateToProps(state){
  console.log(state)
  return {
    dispatch: state.dispatch,
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
