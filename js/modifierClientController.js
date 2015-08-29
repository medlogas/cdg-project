var app = angular.module('app');

var modifierClientController = function($http, $stateParams) {
  var $this = this;

  $this.clientsObj = {};
  $this.dirigeantsArray = [];


  // FETCH ALL CLIENTS **********************************
  $http.get('data/achats/clients.json').then(function(response) {
    $this.clients = response.data;
    // FETCH SOUSPROJETS APPARTENANT AU PROJET
    angular.forEach($this.clients, function(client) {
      if (client.id == $stateParams.id) {
        $this.clientsObj = {
          "name": client.client_name,
          "email": client.email,
          "tel": client.tel,
          "ville": client.ville
        }
      }
    })
  })

}

app.controller('modifierClientController', modifierClientController);
