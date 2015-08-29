var app = angular.module('app');

var ajoutSecController = function($http, $scope) {
  var $this = this;


  $http.get("data/sous-secteurs.json").then(function(response) {
    $this.soussecteurs = response.data;
  })


$this.ajoutSecteur = function() {
  $this.data = {
    "secteurs" : $scope.secteur,
    "sousprojets" : $scope.sousprojet
  }
  $http({
    method: 'POST',
    url: 'data',
    data: $this.data,
    headers: {'Content-Type': 'application/json'}
}).then(function(data) {
  $this.dataserv = $this.data;
  console.log($this.dataserv);
});
}
}
app.controller('ajoutSecController', ajoutSecController);
