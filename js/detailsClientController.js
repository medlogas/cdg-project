var app = angular.module('app');

var detailsClientController = function($http, $stateParams, dataclients) {
  var $this = this;

  $this.clientsObj = {};
  $this.dirigeantsArray = [];


  // FETCH ALL CLIENTS **********************************
    $this.clients = dataclients;
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

  $http.get("data/achats/dirigeants.json").then(function(response) {
    $this.dirigeants = response.data;

    angular.forEach($this.dirigeants, function(dirigeant) {
      if (dirigeant.id_client == $stateParams.id) {
        $this.dirigeantsArray.push(dirigeant.name);
      }
    })

  })


}

app.controller('detailsClientController', detailsClientController);
