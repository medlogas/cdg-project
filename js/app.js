var app = angular.module('app', ['ui.router', 'metismenu', 'localytics.directives']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// $urlRouterProvider.otherwise('/dashbord');

	$stateProvider
		.state("projets", {
			url:"/projets",
			templateUrl: "views/projets.html",
			controller: "projetsController",
			controllerAs: "main"
		})

			.state("ajout", {
				parent: "projets",
				url:"/ajout",
				templateUrl: "views/ajout.html",
				controller: "ajoutController",
				controllerAs: "sec"
			})

			.state("details", {
				parent: "projets",
				url:"/details/:contactId",
				templateUrl: "views/details.html",
				controller: "detailsController",
				controllerAs: "det"
			})

			.state("modifier", {
				parent: "projets",
				url: "/modifier/:contactId",
				templateUrl: "views/modifier.html",
				controller: "modifierController",
				controllerAs: "mod"
			})




		// ********************* SECTEURS STATES  ******************
		.state("secteurs", {
			url: "/secteurs",
			templateUrl: "views/secteurs.html",
			controller: "secteursController",
			controllerAs: "sec"
		})

		.state("modifiersec", {
			parent: "secteurs",
			url: "/modifier/:contactId",
			templateUrl: "views/modifierSecteurs.html",
			controller: "modifierSecteursController",
			controllerAs: "mod"
		})




		// ********************* ACHATS  ******************
		.state("achats", {
			url: "/achats",
			templateUrl: "views/achats/achats.html",

		})

			.state("achats.lots", {
				url: "/lots",
				templateUrl: "views/achats/lots.html",
				controller: "lotsController",
				controllerAs: "lot"
			})







		// .state("add", {
		// 		// parent: "projets",
		// 	url: "/add_projet",
		// 	templateUrl: "views/add.html",
		// 	controller: "addController"
		// })
		//
		// .state("companies", {
		// 	url:"/companies",
		// 	template:"<h3>Companies</h3>"
		// })
		//
		// .state("dashbord", {
		// 	url:"/dashbord",
		// 	template: "<h3><i class='fa fa-tachometer'></i> Dashboard</h3>"
		// })
		.state("login", {
			url: "/login",
			templateUrl: "views/login.html",
			controller: "loginController"
		})


}]).run(function($rootScope, $state) {
      $rootScope.$state = $state;
    });
