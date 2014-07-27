$(document).ready(function(){
	
	var cody_username = 'cnorm35';
	var useruri = 'https://api.github.com/users/' + cody_username;
	var cody_repouri = useruri + '/repos';

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

	$.getJSON(cody_repouri, function(data){
		if(data.length == 0)
		{
			no_results = '<h3>No repos listed.</h3>';
		}
		else
		{
			$.each(data, function(index){
				// var link = data[index].html_url;
				// var name = data[index].name;
				var output = '<ul>'
				output =  output + '<li><a href="'+data[index].html_url +'" class="btn btn-primary btn-md">' + data[index].name + '</a></li>';
				output = output + '</ul>'
				// console.log(output);
				$('#cody-repos').append(output);
			});
				
				
		}
	})


//------------matt inital info request--------------

	var matt_username = 'mattlambdin';
	var useruri = 'https://api.github.com/users/' + matt_username;
	var matt_repouri = useruri + '/repos'; 
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

		//-------------------Matt Repo Request--------------------//


		$.getJSON(matt_repouri, function(data){
		if(data.length == 0)
		{
			var output = '<h3>No repos listed.</h3>';
			$('#search-results').append(output);
		}
		else
		{
			$.each(data, function(index){
				// var link = data[index].html_url;
				// var name = data[index].name;
				var output = '<ul>'
				output =  output + '<li><a href="'+data[index].html_url +'" class="btn btn-primary btn-md" target="_blank" >' + data[index].name + '</a></li>';
				output = output + '</ul>'
				// console.log(output);
				$('#matt-repos').append(output);
			});
				
				
		}
	})


//-----------Curtis profile Request--------///////

		var curtis_username = 'handcold';
		var curtis_useruri = 'https://api.github.com/users/' + curtis_username;
		var curtis_repouri = curtis_useruri + '/repos';
		$.getJSON(curtis_useruri, function(results){
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

		//-----------Curtis Repo Requests------------
		$.getJSON(curtis_repouri, function(data)
		{
			if(data.length == 0)
			{
				var output = '<h3>No repos listed.</h3>';
				$('#search-results').append(output);
			}
			else
			{
				$.each(data, function(index){
					// var link = data[index].html_url;
					// var name = data[index].name;
					var output = '<ul>'
					output =  output + '<li><a href="'+data[index].html_url +'" class="btn btn-primary btn-md" target="_blank" >' + data[index].name + '</a></li>';
					output = output + '</ul>'
					// console.log(output);
					$('#curtis-repos').append(output);
				});
			}
			
		});	
			
});