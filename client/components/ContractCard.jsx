import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
var Parser = require('html-react-parser')

import { getContract } from '../actions/index'

class ContractCard extends React.Component {

  render () {
    const { contract_header, contract_desc } = this.props.contract
    return (
      <div className="contractCard" onClick={(e) => this.props.dispatch(getContract(this.props.contract))}>
        <Router>
          <Link to="/contracttosign">
            <div>
              <h1>{contract_header}</h1>
              {Parser(contract_desc)}
            </div>
          </Link>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ContractCard)
