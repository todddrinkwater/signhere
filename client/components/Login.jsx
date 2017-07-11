import React from 'react'
import { connect } from 'react-redux'

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
        <form className="loginForm" onSubmit={ (e) => { LogInUser(e, this.props.dispatch) } }>
            <label>ID:</label><br /><input type="text" name="id" /><br />
            <label>Password:</label><br /><input type="text" name="password" /><br />
        <input type='submit' value='Log In' />
        </form>
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
    id: e.target.elements.id.value
  }
  loggedInUser(userLogin, dispatch)
  getUserContracts(userLogin, dispatch)
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Login)
