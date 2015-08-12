var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', function($stateProvider){

	$stateProvider
		.state("projets", { 
			url:"/projets", 
			templateUrl: "views/projets.html",
			controller: "projetsController",
			controllerAs: "main"
		})
		.state("add", {
				// parent: "projets",
			url: "/add_projet",
			templateUrl: "views/add.html",
			controller: "addController"	
		})

		.state("companies", {
			url:"/companies",
			template:"<h3>Companies</h3>"
		})

		.state("dashbord", {
			url:"/dashbord",
			template: "<h3><i class='fa fa-tachometer'></i> Dashboard</h3>"
		})


}]).run(function($rootScope, $state) {
      $rootScope.$state = $state;
      $rootScope.collapse = true;
    });