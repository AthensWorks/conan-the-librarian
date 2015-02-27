var app = angular.module('app', []);

app.controller('ctrl', function($scope) {
	$scope.parse = function(input) {
		if(!input) {
			return = "";
		}
		
		var state = 0;
		for(var i = 0; i < input.length(); ++i) {
			switch(state) {
				case 0:

					break;
				case 1:

					break;
			}
		}

		return input.toUpperCase().split(" ");
	};	
});
