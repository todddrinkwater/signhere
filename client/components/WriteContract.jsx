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
          <label>Contract Details:</label><br /><textarea id="contractDetails" name="contractDetails" cols="1" rows="50"></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )}



}

function submitNewContract(e){
  e.preventDefault(e)
  console.log(e.target.elements.contractDetails.value, "submitNewContract")
}


export default WriteContract
