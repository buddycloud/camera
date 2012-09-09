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

	var canvas = document.createElement("canvas")
  var ctx = canvas.getContext("2d");
	var liveness = document.getElementById("live");

	canvas.width = liveness.clientWidth;
	canvas.height = liveness.clientHeight;

	ctx.drawImage(liveness, 0, 0, canvas.width, canvas.height)

   var image = canvas.toDataURL("image/png")

   var param = $.param({
    "binaryfile": image
       })

    $.ajax("https://api.buddycloud.org/rodrigods@buddycloud.org/media?" + param, {
      type: "PUT"
    })


}