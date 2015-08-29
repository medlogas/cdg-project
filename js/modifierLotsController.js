var app = angular.module('app');

var modifierLotsController = function($http, $stateParams, data, dataclients, datadirigeants) {
  var $this = this;
  $this.vendu = false;
  $this.allclients = [];
  var count = 0;
  var i;
  $this.lots = data
  $this.clients = dataclients;

  $this.dirigeants = datadirigeants;

  angular.forEach($this.clients, function(client) {
    angular.forEach($this.dirigeants, function(dirigeant) {
      if (client.id == dirigeant.id_client) {
        for (i = 0; i <= $this.allclients.length; i++) {
          if ($this.allclients[i] == client.client_name) {
            count++;
          }


        }
        if (count == 0) {
          $this.allclients.push(client.client_name);
        }
        count = 0;      console.log($this.allclients);
      }

    })
  })

  // console.log($this.lots);

  angular.forEach($this.lots, function(lot) {
    // console.log(lot.id);

    if (lot.id == $stateParams.id) {
      $this.name = lot.lot_name;
      $this.superficie = lot.superficie;

      $http.get('data/achats/vente-achats.json').then(function(response) {
        $this.achats = response.data;
        angular.forEach($this.achats, function(achat) {
          if (lot.id == achat.id_lot) {
            $this.vendu = true;

            angular.forEach($this.clients, function(client) {
              if (achat.id_client == client.id) {
                $this.clientvend = client.client_name;
              }
            })
          }
        })

      })
    }
  })



}

app.controller('modifierLotsController', modifierLotsController);
