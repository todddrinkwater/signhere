import React from 'react'
import { connect } from 'react-redux'

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
      console.log('hit');
      signaturePad.clear()
    }
  }

  render () {
    return (
      <div className="contract">
        <h1>{this.props.contractDetails.contract_header}</h1>
        <p>{this.props.contractDetails.contract_desc}</p>
        <div id="signature-pad" className="m-signature-pad">
          <div className="m-signature-pad--body">
            <canvas></canvas>
          </div>
          <button onClick={() => this.clearSignature()}>Clear</button>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    contractDetails: state.contract[0].singleContractDetails
  }
}

export default connect(mapStateToProps)(Contract)
