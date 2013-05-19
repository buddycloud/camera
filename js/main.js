var video = document.getElementById("live");
var jid = sessionStorage.getItem("jid");
var password = sessionStorage.getItem("password");

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
  if (jid && password) {  
  	var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
  	var liveness = document.getElementById("live");

  	canvas.width = liveness.clientWidth;
  	canvas.height = liveness.clientHeight;

  	ctx.drawImage(liveness, 0, 0, canvas.width, canvas.height);

    var image = canvas.toDataURL("image/png").substring(22);

    // show screenshot
    $('.preview').append(canvas);
    setTimeout(removeScreenshot, 1000);

    var mediaUrl = apiUrl + "/" + jid + "/media"
    $.ajax(mediaUrl, {
      type: "POST",
      beforeSend: function (xhr) { 
        xhr.setRequestHeader("Authorization", "Basic " + btoa(jid + ':' + password)); 
      },
      data: {"data": image,
             "filename": "camphoto.png",
             "content-type": "image/png"},
      success: function() {
        alert("Photo successfully posted into your channel!");
      }
    });
  }

}

function removeScreenshot(){
  $('.preview canvas').remove();
}