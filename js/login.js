var jid = sessionStorage.getItem("jid");
var password = sessionStorage.getItem("password");
var $body = $("body");

if (jid && password) {
	$body.load('camera.html');
} else {
	var doLogin = function() {
		jid = $(".bc_jid").val() + "@" + domain;
		password = $(".bc_password").val();

		var loginOpt = {
			url: apiUrl + "/subscribed",
			type: "GET",
			beforeSend: function (xhr) { 
				xhr.setRequestHeader("Authorization", "Basic " + btoa(jid + ':' + password)); 
			},
			success: function() {
				sessionStorage.setItem("jid", jid);
				sessionStorage.setItem("password", password);
				$body.load('camera.html');
			},
			error: function() {
				alert("Wrong name or password!");
			}
		};
		$.ajax(loginOpt);
	};

	$("#submit").on("click", doLogin);
	// FIXME: workround to bad html template
	$(document).keypress(function(e) {
		if (e.which == 13) {
			doLogin();
		}
	});
}
