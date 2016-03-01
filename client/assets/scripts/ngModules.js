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
