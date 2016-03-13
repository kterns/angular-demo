/* Services */

app.service('trackersService', function($http) {
	this.getData = function() {
		return $http.get("assets/downloads/resources.json");
	}
});
