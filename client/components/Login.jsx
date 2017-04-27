import React from 'react'
import { connect } from 'react-redux'

import { loggedInUser } from '../actions/index'
class Login extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    console.log(this.props)
    return (
      <div className="login">
        <form onSubmit={ (e) => { LogInUser(e, this.props.dispatch) } }>
          ID: <input type="text" name="id" />
          <input type='submit' value='Log In' />
        </form>
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
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch
}
}

export default connect(mapStateToProps)(Login)
