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

function clear(){
  console.log('hit');
  document.signaturePad.clear()
}
