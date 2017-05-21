import React from 'react'

class WriteContract extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

  }



  render() {
    return (
      <div className="WriteContract">
        <form method="post" onSubmit={ (e) => { submitNewContract(e) } } >
        <h3>Signee Details</h3>
          <label>First Name: </label><input type="text" name="fName" /><br />
          <label>Last Name: </label><input type="text" name="lName" /><br />
          <label>Email Address: </label><input type="text" name="email" /><br />
          <label>Contract Title: </label><input type="text" name="contract_header" /><br />
          <label>Contract Details:</label><br /><textarea id="contractDetails" name="contract_desc" cols="1" rows="50"></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )}



}

function submitNewContract(e){
  e.preventDefault(e)
  var writeContractForm = {
    fName: e.target.elements.fName.value,
    lName: e.target.element.lName.value,
    email: e.target.elements.email.value,
    contract_header: e.target.elements.contract_header.value,
    contract_desc: e.target.elements.contract_desc.value
  }
  console.log(e.target.elements.contractDetails.value, "submitNewContract")
}


export default WriteContract
