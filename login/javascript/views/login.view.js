
// a login form
Application.LoginView = Backbone.View.extend({

	template : _.template(Application.getTemplate("login.html")),

	events : {
		"click #btn_submit" : "login"
	},

	initialize : function() {
	},

	render : function() {
		var self = this;
		self.$el.html(self.template());
		return this;
	},

	// login
	login : function(event) {		
		var self = this, data;
		event.preventDefault(); // prevent form from reloading the page		
		$('.alert').hide(); // hide the alerts
		data = {
			"username" : $("#username").val(),
			"password" : $("#password").val()
		};
		
		// submit the form
		$.ajax({
			url : "login.php",
			type : "POST",
			dataType : "json",
			data : data,
			success : function(response) {
				// failure
				if (response.success != "1") {
					// reset form fields
					$("#username").val("").focus();
					$("#password").val("");
					$("#error").show();
				} 
				// success
				else {
					$("#success").show();
					// redirect user on successful login
					// window.location.replace("#");
				}
			}
		});

	}
});
