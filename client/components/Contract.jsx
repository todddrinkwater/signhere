import React from 'react'
import { connect } from 'react-redux'

class Contract extends React.Component {

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
        <h1>Contract</h1>
        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</p>
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
  console.log(state)
  return {
    
  }
}

export default connect(mapStateToProps)(Contract)
