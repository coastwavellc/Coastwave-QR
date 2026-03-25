function generateQR() {

  const url = document.getElementById("linkInput").value;

  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");



  ctx.clearRect(0, 0, canvas.width, canvas.height);



  QRCode.toCanvas(canvas, url, { width: 300 }, function () {

    const frame = new Image();

    frame.src = document.getElementById("frameSelect").value;



    frame.onload = function () {

      ctx.drawImage(frame, 0, 0, 300, 300);

    };

  });

}
