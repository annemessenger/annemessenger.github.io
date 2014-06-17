function displayLogo(c2, ctx2) {

  // Display logo with radial gradient and name

  // Get width and height 
  var width = 240;
  var height = 100;
  if (c2.hasAttribute("width") ) {
    var width = c2.getAttribute("width");
  }
  if (c2.hasAttribute("height")) {
    var height = c2.getAttribute("height") - 1;
  }

  // Create gradient
  var grd2=ctx2.createRadialGradient(125, 52, 7, 128, 63, 140);
  grd2.addColorStop(0,"blue");
  grd2.addColorStop(1,"cyan");
  ctx2.fillStyle=grd2;
  ctx2.fillRect(0, 0, width, height);

  // Add "M"
  var halfX = width / 2;
  var disp = 40;
  var x1 = halfX - disp;
  var x2 = halfX + disp;
  var xDelta = ((x1 + x2) / 2) - x1;

  ctx2.lineWidth = 5;
  ctx2.strokeStyle = "#68d0ff";

  ctx2.moveTo(x1, -1);
  ctx2.lineTo(x1 - xDelta, height + 1);
  ctx2.moveTo(x1, -1);
  ctx2.lineTo(x1 + xDelta, height + 1);
  ctx2.moveTo(x2,-1);
  ctx2.lineTo(x2 - xDelta,height + 1);
  ctx2.moveTo(x2, -1);
  ctx2.lineTo(x2 + xDelta,height + 1);

  // Overlay "A"
  ctx2.moveTo(x1 + xDelta, -1);
  ctx2.lineTo(x1, height + 1);
  ctx2.moveTo(x1 + xDelta, -1);
  ctx2.lineTo(x2, height + 1);

  ctx2.stroke();

  // Make the bottom edge a straight line
  ctx2.clearRect(0, height, width, 2);

  // Add name
  var textBaseline = height - 13;
  var textMargin = 3;
  ctx2.font = "600 29px Arial";
  ctx2.fillStyle = "#ffffff";
  ctx2.fillText("Anne Messenger", textMargin, textBaseline);
}