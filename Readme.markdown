# Jasmine Mock #

A simple, lightweight native-Jasmine ajax mocking system

# Installation #

Put jasmine_mock.js in the Jasmine helpers folder

# Usage #

## Register ##

Register the URLs you want to listen to and the JSON response

	mock.register('my/url1/', {status: 200, responseText; 'OK'});
	mock.register('my/url2/', {status: 404, responseText; 'Error'});
	
## Run the Code ##

Send a block of code with ajax calls to listen for

	mock.ajax(
		function() {
			poll_the_server(args);
			do_some_more_stuff(args);
		};		
	);

## Cleanup ##

Remove the url's you are listening on

	mock.clear();
	
# Caveats #

Jasmine Mock only works with jQuery ajax calls that use $.ajax.  The only callback function Jasmine Mock is listening to is the complete function.  Make ajax calls like this:

	$.ajax( { 
		type: "GET",
		url: "my/url",
		complete: function(transport) {
			... stuff to do on complete ...
		}
	} )
