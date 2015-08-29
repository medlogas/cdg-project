var app = angular.module('app');

var dirigeantsController = function($http, $location) {

  var $this = this;
  $this.clientnames = [];
  // DATA FOT PROJECTS
  $http.get('data/achats/dirigeants.json').then(function(response) {
    $this.dirigeants = response.data;

    $http.get('data/achats/clients.json').then(function(response) {
      $this.clients = response.data;

      angular.forEach($this.dirigeants, function(dirigeant) {

        angular.forEach($this.clients, function(client) {
          if (client.id == dirigeant.id_client) {
            $this.clientnames.push({
              "id" : client.id,
              "name": client.client_name
            });
          }
        })
      })
    })
  })
  console.log($this.clientnames);

  $this.modifier = function() {
      angular.forEach($this.dirigeants, function(dirigeant) {
        if (dirigeant.check === true) {
          var id = dirigeant.id;
          $location.path("achats/dirigeants/modifier/" + id);
        }

      })
    }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.dirigeants, function(dirigeant) {
        dirigeant.check = true;
      })
    } else {
      angular.forEach($this.dirigeants, function(dirigeant) {
        dirigeant.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.dirigeants, function(dirigeant) {
      if (dirigeant.check) {
        count = count + 1;
      }
    })

    if (count === 1) {
      $this.voir = false;
      $this.delete = false;
    }

    if (count > 1) {
      $this.voir = true;
      $this.delete = false;
    }
  }
}

app.controller('dirigeantsController', dirigeantsController);
