$(function() {

	var getInfo = function(callback) {
		Twitch.api({method: 'channel'}, function(error, channel) {
		  callback(channel);
		});
	}

	 Twitch.init({clientId: 'eg9h1ip6k85n8slq0ia88deew5af8ir'}, function(error, status) {

	 	console.log(status);

	 	if (status.authenticated) {
			$('#header').css("display", "block");
			$('#menu').css("display", "block");
			$('.hiddeniflogged').css("display", "none");
			$('.features').hide();
	 		getInfo(function(data) {
				// checks if logged in to show specified information
				$('#picture').attr('src',data.logo);
				$('.headerphoto').attr('src',data.logo);
	 			$('#visit').text(data.display_name).attr('href',data.url);
				$('#username').text(data.display_name);
				$('.partner').text("Partner:" + " " + data.partner);
	 		});
	 	} else {
			// hides all user information IF NOT logged in
	 		$('#login-info').hide();
			$('body').css("background", "#0d0d11");
	 	}

	 });

	 var login = function()
	 {
	 	Twitch.login({
			// reads API info from Twitch if logged in
		  scope: ['user_read', 'channel_read', 'channel_subscriptions']
		});
	 }

	 var logout = function() {
	     Twitch.logout(function(error) {
	         // redirects to root URL when logging Off
			 window.location = "https://bootcamp.pro";
			 // shows twitch connect button if logged out
		     $('strong').text('');
		     $('#picture').attr('src','');
		     $('#visit').text('').attr('href','#');
             // hides everything else if logged out
		     $('#login-info').hide();
		 });
	 }

	 $('.secondlogin').click(function(e) {
	 	e.preventDefault();

	 	login();
	 })

	 $('.twitch-disconnect').click(function(e) {
	 	e.preventDefault();

	 	logout();
	 })

})
