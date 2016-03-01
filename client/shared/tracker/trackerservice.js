/* Services */

app.service('trackersService', function($http) {
	this.getData = function() {
		return $http.get("http://localhost:8079/assets/downloads/resources.json");
		// return $http.get("http://192.168.0.23/sitetracker/assets/downloads/resources.json");
		// return $http.get("http://kterns.com/sitetracker/assets/downloads/resources.json");
	}
});
