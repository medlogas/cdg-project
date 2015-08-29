var app = angular.module('app');

var ajoutDirigeantController = function($http, $scope) {
  var $this = this;
$http.get("data/achats/clients.json").then(function(response){
  $this.clients = response.data;
})

$this.ajoutDirigeant = function() {
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
app.controller('ajoutDirigeantController', ajoutDirigeantController);
