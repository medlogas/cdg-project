var app = angular.module('app');

var ajoutClientController = function($http, $scope) {
  var $this = this;

  $http.get("data/achats/dirigeants.json").then(function(response) {
    $this.dirigeants = response.data;
  })


$this.ajoutClient = function() {
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
app.controller('ajoutClientController', ajoutClientController);
