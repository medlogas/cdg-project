var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/projets', {
		templateUrl: "views/projets.html",
		controller: "projetsController",
		controllerAs: "main"
	}).
	otherwise({redirectTo: '/projets'});

}]);