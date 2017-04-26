import React from 'react'
import { connect } from 'react-redux'

import loggedInUser from '../actions/index'

class Login extends React.Component {

  render () {
    return (
      <div className="login">
        <form onSubmit={ LogInUser }>
          ID: <input type="text" name="id" />
          <input type='submit' value='Log In' />
        </form>
      </div>
    )
  }
}

function LogInUser(e){
  e.preventDefault(e)
  var userLogin = {
    id: e.target.elements.id.value
  }
  dispatch(loggedInUser(userLogin))
}

export default Login
