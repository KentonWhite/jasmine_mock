var mock = {}

mock.register = function(matcher, result) {
	mock.matchers.push(matcher);
	mock.results.push(result);
}

mock.ajax = function(block) {
	spyOn($, 'ajax');
	block();
	$.each(
			$.ajax.argsForCall,
			function(intIndex, objValue) {
				ajaxCallArgs = objValue[0];
				$.each(
					mock.matchers,
					function(intMatcherIndex, objMatcher) {
						if (ajaxCallArgs['url'] == objMatcher) {
							completeFn = ajaxCallArgs['complete']; 
							completeFn(mock.results[intMatcherIndex]);
						}
					}
				)
			}
		);	
}

mock.clear = function() {
	mock.matchers = [];
	mock.results = [];
}

mock.matchers = [];

mock.results = [];