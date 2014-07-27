$(document).ready(function(){
	
	var cody_username = 'cnorm35';
	var useruri = 'https://api.github.com/users/' + cody_username;
	var repouri = useruri + '/repos';

	$.getJSON(useruri, function(results){
		var profile_pic = results.avatar_url;
		var username = 	results.login;
		var gh_link = results.html_url;
		var email = results.email;
		var location = results.location;
		// console.log('Username: ' + username )
		// console.log('Link: ' + gh_link);
		// console.log('Email: ' + results.email);
		// console.log('Member Since :' + member_since);
		// console.log(profile_pic);
		$('#cody-profile.pic').attr('src', profile_pic);
		$('#cody-username').append(username);
		$('#cody-link').append(gh_link);
		$('#cody-email').append(email);
		$('#cody-location').append(location);	
	});

	$.getJSON(repouri, function(data){
		if(data.length == 0)
		{
			no_results = 'No repos listed.';
		}
		else
		{
			$.each(data, function(index){
				// var link = data[index].html_url;
				// var name = data[index].name;
				var output = '<ul>'
				output =  output + '<li><a href="'+data[index].html_url +'">' + data[index].name + '</a></li>';
				output = output + '</ul>'
				console.log(output);
				$('#search-results').append(output);
			});
				
				
		}
	})




	var matt_username = 'mattlambdin';
	var useruri = 'https://api.github.com/users/' + matt_username;
		$.getJSON(useruri, function(results){
		var profile_pic = results.avatar_url;
		var username = 	results.login;
		var gh_link = results.html_url;
		var email = results.email;
		var location = results.location;
		// console.log('Username: ' + username )
		// console.log('Link: ' + gh_link);
		// console.log('Email: ' + results.email);
		// console.log('Member Since :' + member_since);
		// console.log(profile_pic);
		$('#matt-profile-pic').attr('src', profile_pic);
		$('#matt-username').append(username);
		$('#matt-link').append(gh_link);
		$('#matt-email').append(email);
		$('#matt-location').append(location);	
	});
		var curtis_username = 'handcold';
		var useruri = 'https://api.github.com/users/' + curtis_username;
		$.getJSON(useruri, function(results){
		var profile_pic = results.avatar_url;
		var username = 	results.login;
		var gh_link = results.html_url;
		var email = results.email;
		var location = results.location;
		// console.log('Username: ' + username )
		// console.log('Link: ' + gh_link);
		// console.log('Email: ' + results.email);
		// console.log('Member Since :' + member_since);
		// console.log(profile_pic);
		$('#curtis-profile-pic').attr('src', profile_pic);
		$('#curtis-username').append(username);
		$('#curtis-link').append(gh_link);
		$('#curtis-email').append(email);
		$('#curtis-location').append(location);	
	});





})