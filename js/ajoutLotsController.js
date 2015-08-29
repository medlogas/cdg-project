var app = angular.module('app');

var ajoutLotsController = function($http, $scope) {
  var $this = this;


$this.ajoutLots = function() {
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
app.controller('ajoutLotsController', ajoutLotsController);
