import React from 'react'
import { connect } from 'react-redux'

import ContractCard from '../components/ContractCard'

class ContractList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="contractList">

        {this.props.contracts.map( (contract) => {
          return (
            <ContractCard key={contract.id} contract={contract} />
          )
        })
        }

      </div>
      )
  }
}

function mapStateToProps(state){
  return {
    contracts: state.contracts[0].contractDetails
  }
}

export default connect(mapStateToProps)(ContractList)
