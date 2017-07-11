import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

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
        <h3>Write a new contract</h3>
          <label>Signee ID: </label><br /><input className="writeContract-id" type="text" name="signee_id" /><br />
          <label>Contract Title: </label><br /><input className="writeContract-title" type="text" name="contract_header" /><br />
          <label>Contract Details:</label><br /><textarea className="writeContract-details" id="contractDetails" name="contract_desc" cols="1" rows="50"></textarea><br />
              <button type="submit" className="writeContract-submit" value="Submit">Submit</button>
        </form>
      </div>
    )}
}

function submitNewContract(e, dispatch, userId){
  e.preventDefault(e)
  var writeContractForm = {
    id: userId,
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
      userId: state.user.id,
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(WriteContract)
