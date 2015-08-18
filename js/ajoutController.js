var app = angular.module('app');

var ajoutController = function($http) {
  var $this = this;

  $http.get("data/secteurs.json").then(function(response) {
    $this.secteurs = response.data;
  })

  $http.get("data/sous-projets.json").then(function(response) {
    $this.sousprojets = response.data;
  })
}

app.controller('ajoutController', ajoutController);
