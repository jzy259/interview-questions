window.Application = {
	// synchronously load a template
	getTemplate : function(name) {
		var self = this, url;

		self.assert(_.isUndefined(name) || name == "", "Template name is required");
		template = "<h1 class='red'>Failed to load template" + name + "</h1>";
		url = "templates/" + name;
		$.ajax({
			async : false,
			url : url,
			success : function(response) {
				template = response;
			}
		});
		return template;
	},
	
	// assert
	assert : function(test, message) {
		var self = this;
		
		if(test){
			console.log(message);
			return false;
		}
		
		return true;
	}
};

Application.Router = Backbone.Router.extend({

	routers : {
		"login" : "login"
	},
	
	// setup main page to load when application starts
	initialize: function(){
		var self = this;
		self.LoginView = $("#main").html(new Application.LoginView().render().el);
	},
	
	
	login : function() {
		var self = this;
		if(self.Loginview){
			self.LoginView.login("#");
		} else {
			self.LoginView = $("#main").html(new Application.LoginView().render().el);
			self.LoginView.login("#");
		}

	}
});


