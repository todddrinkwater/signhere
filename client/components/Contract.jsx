import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { updateUserContract } from '../actions/index'

class Contract extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    var wrapper1 = document.getElementById("signature-pad"),
        canvas1 = wrapper1.querySelector("canvas"),
        signaturePad;

        resizeCanvas(canvas1);
        signaturePad = new SignaturePad(canvas1);

        function resizeCanvas(canvas) {
           var ratio =  window.devicePixelRatio || 1;
           canvas.width = canvas.offsetWidth * ratio;
           canvas.height = canvas.offsetHeight * ratio;
           canvas.getContext("2d").scale(ratio, ratio);
       }

    this.clearSignature = function clear(){
      signaturePad.clear()
    }


    this.saveSignature = function save(){
      var dataUrl = signaturePad.toDataURL()
      var contractId = this.props.contractDetails.id
      var userId = this.props.id
      var dispatch = this.props.dispatch
      var signatureData = {
        signature_url: dataUrl,
        id: userId
      }
      updateUserContract(testCallback, contractId, signatureData, dispatch)
  }

  function testCallback (err, status) {
    if (err) {
      console.log(err)
    } else {
      console.log(status)
    }
  }

}

  render() {
    return (
      <div className="contract">
        <h1>{this.props.contractDetails.contract_header}</h1>
        <p>{this.props.contractDetails.contract_desc}</p>
        { this.props.contractDetails.signature_url == '' || this.props.contractDetails.signature_url == null  ?
        (
           <div id="signature-pad" className="m-signature-pad">
             <div className="m-signature-pad--body">
               <canvas></canvas>
             </div>

             <button className="signature-pad-btn" onClick={() => this.clearSignature()}>Clear</button>
             <Router>
              <Link to='/myContracts'><button className="signature-pad-btn" onClick={() => this.saveSignature(this.props.id)}>Save</button></Link>
             </Router>
           </div>
         )
         :
         ( <img src={this.props.contractDetails.signature_url} /> )}
      </div>
    )}
}

Contract.propTypes = {
  contractDetails: PropTypes.object,
  id: PropTypes.number
}

function mapStateToProps(state){
  return {
    contractDetails: state.contract[0].singleContractDetails,
    id: state.user.id,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(Contract)
