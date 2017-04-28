import React from 'react'

class ContractCard extends React.Component {

  render () {
    console.log(this.props)
    return (
      <div className="contractCard">
        <h1>{this.props.contract_header}</h1>
        <p>{this.props.contract_desc}</p>
          <button>View</button>
      </div>
    )
  }
}


export default ContractCard
