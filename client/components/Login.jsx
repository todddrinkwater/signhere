import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { loggedInUser } from '../actions/index'
import { getUserContracts } from '../actions/index'

class Login extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="login">
      <div className="logo">signhere</div>
        <form className="loginForm" onSubmit={ (e) => { LogInUser(e, this.props.dispatch) } } action="/myContracts">
            <label>Email:</label><br /><input type="text" name="email" /><br />
            <label>Password:</label><br /><input type="password" name="password" /><br />
            { this.props.passwordFailure.passwordFailure === false ? ( <p>Incorrect Password</p> ) : "" }
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

function LogInUser(e, dispatch){
  e.preventDefault(e)
  var userLogin = {
    email: e.target.elements.email.value,
    password: e.target.elements.password.value
  }
  loggedInUser(userLogin, dispatch)
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch,
    user: state.user,
    passwordFailure: state.incorrectPassword
  }
}

export default connect(mapStateToProps)(Login)
