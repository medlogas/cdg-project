var app = angular.module('app');

var clientsController = function($http, $location, datadirigeants, dataclients) {

  var $this = this;
  $this.dirigeants = datadirigeants;
  $this.clients = dataclients;
  $this.hasDirigeant = [];
  var count;

  angular.forEach($this.clients, function(client) {
      count = 0;
    angular.forEach($this.dirigeants, function(dirigeant) {
      if (client.id == dirigeant.id_client) {
        count++;
      }
    })
    if (count == 0) {
      $this.hasDirigeant.push(true);
    }else {
      $this.hasDirigeant.push(false);
    }
  })
console.log($this.hasDirigeant);
  // DATA FOT PROJECTS




  $this.details = function() {
    angular.forEach($this.clients, function(client) {
      if (client.check === true) {
        var id = client.id;
        $location.path("achats/clients/details/" + id);
      }
    })
  }

  $this.modifier = function() {
      angular.forEach($this.clients, function(client) {
        if (client.check === true) {
          var id = client.id;
          $location.path("achats/clients/modifier/" + id);
        }

      })
    }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.clients, function(client) {
        client.check = true;
      })
    } else {
      angular.forEach($this.clients, function(client) {
        client.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.clients, function(client) {
      if (client.check) {
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

app.controller('clientsController', clientsController);
