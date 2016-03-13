'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('siteTrackerApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
		when('/', {
			templateUrl: 'templates/tracker/tracker.html',
			controller: 'trackersCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
});

app.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

/* Controllers */

app.controller('trackersCtrl', function($scope, trackersService) {
  init();

	function init() {
		trackersService.getData()
      .then(function(response) {
        $scope.tabs = response.data.categories;
        $scope.sites = response.data.sites;

        $scope.selectedTab = 0; //set selected tab to the 1st by default.
      });
	}

  /** Function to set selectedTab **/
	$scope.selectTab = function(index){
		$scope.selectedTab = index;
	}
});

/* Services */

app.service('trackersService', function($http) {
	this.getData = function() {
		return $http.get("assets/downloads/resources.json");
	}
});
