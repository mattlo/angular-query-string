(function () {
	angular.module('angular-query-string', ['ng']).service("UrlQueryString", ['$window', function ($window) {
		var output = {},
			i,
			pairFragments,
			keyValues;
		
		if ($window.location.search.length > 0) {
			pairFragments = $window.location.search.substr(1).split('&');
			
			for (i = 0; i < pairFragments.length; ++i) {
				// has key and value
				if (pairFragments[i].indexOf('=') > -1) {
					keyValues = pairFragments[i].split('=');
					
					output[keyValues[0]] = keyValues[1];
				} else { // only key
					output[pairFragments[i]] = null;
				}
			}
		}
		
		return output;
	}]);
}());