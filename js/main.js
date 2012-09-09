window.onload = function() {
video = document.getElementById("live")

navigator.webkitGetUserMedia({video: true},
  function(stream) {
  	document.stream = stream
    video.src = window.webkitURL.createObjectURL(stream)
  },
  function(err) {
    console.log("Unable to get video stream!")
  }
)
}	