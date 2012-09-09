var video = document.getElementById("live");

navigator.webkitGetUserMedia({video: true},
  function(stream) {
    showCamera();
  	document.stream = stream;
    video.src = window.webkitURL.createObjectURL(stream);
  },
  function(err) {
    console.log("Unable to get video stream!");
  }
);

function getImg() {

	var canvas = document.createElement("canvas").getContext("2d");
	var liveness = document.getElementById("live");

	canvas.width = liveness.clientWidth;
	canvas.height = liveness.clientHeight;

	canvas.drawImage(liveness, 0, 0, canvas.width, canvas.height)

	var img = document.createElement("img")
    img.src = canvas.toDataURL("image/png")
    img.width = canvas.width
    img.height = canvas.height

    canvas.appendChild(img)


}