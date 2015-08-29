var app = angular.module("app");

var modifierDirigeantController = function($http, $stateParams) {
  var $this = this;
  $this.dirigeants = {};
  // FETCH THE NAMEPROJET WITH ID_STATE **********************************
  $http.get('data/achats/dirigeants.json').then(function(response) {
    $this.dirigeants = response.data;
    angular.forEach($this.dirigeants, function(dirigeant) {
      if (dirigeant.id == $stateParams.id) {
        $this.dirigeantId = {
          "name" : dirigeant.name,
          "email" : dirigeant.email,
          "fonction": dirigeant.fonction,
          "tel": dirigeant.tel
        }
        $this.selected = { "id": dirigeant.id_client };
        $http.get("data/achats/clients.json").then(function(response){
          $this.clients = response.data;

        })
      }
    })
  })

}
app.controller("modifierDirigeantController", modifierDirigeantController);
