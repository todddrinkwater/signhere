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
        <div>
        <h1>Unsigned Contracts:</h1>
          {this.props.contracts.map( (contract) => {
            if ( (contract.signature_url == '') || (contract.signature_url == null)){
              return (
                <ContractCard key={contract.id} contract={contract} />
              )
            }
          })
          }
        </div>
        <div>
        <h1>Signed Contracts:</h1>
          {this.props.contracts.map( (contract) => {
            console.log(contract)
            if (contract.signature_url != '' && contract.signature_url != null){
              return (
                <ContractCard key={contract.id} contract={contract} />
              )
            }
          })
          }
        </div>
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
