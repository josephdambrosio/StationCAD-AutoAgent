document.addEventListener('DOMContentLoaded', function() {

    $("#optionsSaveStay").click(function() {

		chrome.runtime.sendMessage({

			function: "setOptions",
			username: $("#username").val(),
			password: $("#password").val()

		}, function(response) {

			$("#message").slideToggle("slow");

	        setTimeout(function() {

	          $("#message").slideToggle("slow");

	        }, 3000);

		});

	});

	$("#optionsSaveClose").click(function() {

		chrome.runtime.sendMessage({

			function: "setOptions",
			username: $("#username").val(),
			password: $("#password").val()

		}, function(response) {

			$("#message").slideToggle("slow");

	        setTimeout(function() {

	          window.close();

	        }, 3000);

		});

	});

	$("#optionsSaveTest").click(function() {

		chrome.runtime.sendMessage({

			function: "setOptions",
			username: $("#username").val(),
			password: $("#password").val()

		}, function(response) {

			$("#message").slideToggle("slow");

	        setTimeout(function() {

	          $("#message").slideToggle("slow");
	          window.location.href = "https://CADHOSTNAMEHERE";

	        }, 3000);

		});

	});

	chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

		$("#username").val(response.username);
		$("#password").val(response.password);

    });

	$("#agency").focus();

});
