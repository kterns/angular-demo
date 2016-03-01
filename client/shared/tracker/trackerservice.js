/* Services */

app.service('trackersService', function($http) {
	this.getData = function() {
		return $http.get("http://kterns.com/angular-demo/assets/downloads/resources.json");
	}
});
