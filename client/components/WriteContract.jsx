import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'

import { writeNewContract } from '../actions/index'

class WriteContract extends React.Component {
  constructor(props){
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
   }

   handleChange(value) {
      this.setState({ text: value })
    }


  render() {
    return (
      <div className="WriteContract">
        <form method="post" className="newContractForm" onSubmit={ (e) => { submitNewContract(e,  this.props.dispatch, this.props.userId, this.state) } } >
        <h3>Write a new contract</h3>
          <label>Signee ID: </label><br /><input className="writeContract-id" type="text" name="signee_id" /><br />
          <label>Contract Title: </label><br /><input className="writeContract-title" type="text" name="contract_header" /><br />
          <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
          <button type="submit" className="writeContract-submit" value="Submit">Submit</button>
        </form>
      </div>
    )}
}

function submitNewContract(e, dispatch, userId, state){
  e.preventDefault(e)
  var writeContractForm = {
    id: userId,
    signee_id: e.target.elements.signee_id.value,
    contract_header: e.target.elements.contract_header.value,
    contract_desc: state.text
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

WriteContract.propTypes = {
  userId: PropTypes.number
}

function mapStateToProps(state){
    return {
      userId: state.user.id,
      dispatch: state.dispatch
    }
}

export default connect(mapStateToProps)(WriteContract)
