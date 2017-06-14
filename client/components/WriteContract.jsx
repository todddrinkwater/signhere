import React from 'react'
import { connect } from 'react-redux'

import { writeNewContract } from '../actions/index'

class WriteContract extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="WriteContract">
        <form method="post" onSubmit={ (e) => { submitNewContract(e,  this.props.dispatch, this.props.userId) } } >
        <h3>Signee Details</h3>
          <label>Signee Address: </label><input type="text" name="signee_id" /><br />
          <label>Contract Title: </label><input type="text" name="contract_header" /><br />
          <label>Contract Details:</label><br /><textarea id="contractDetails" name="contract_desc" cols="1" rows="50"></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )}
}

function submitNewContract(e, dispatch, userId){
  e.preventDefault(e)
  var writeContractForm = {
    signee_id: e.target.elements.signee_id.value,
    contract_header: e.target.elements.contract_header.value,
    contract_desc: e.target.elements.contract_desc.value
  }
  writeNewContract(writeContractForm, dispatch, userId, testCallback)
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
      userId: state.user[0].loggedInUserDetails.id,
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(WriteContract)
