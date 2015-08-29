var app = angular.module('app');
var msg = "hello";

var lotsController = function($http, $location, data, $scope) {

  var $this = this;
  var arrayvendu = [];
  $http.get('data/achats/vente-achats.json').then(function(response) {
      $this.achats = response.data;
      angular.forEach($this.achats, function(achat) {
        arrayvendu.push(achat.id_lot);
      })

    })
    // DATA FOR PROJECTS
  $this.lots = data;
  $scope.itemvendu = function(item) {
    for (var i = 0; i <= arrayvendu.length; i++) {
      if (i == item) {
        return {
          "warning": true
        }

      }
    }

  }
  $this.details = function() {
    angular.forEach($this.lots, function(lot) {
      if (lot.check === true) {
        var id = lot.id;
        $location.path("achats/lots/details/" + id);
      }

    })
  }

  $this.modifier = function() {
      angular.forEach($this.lots, function(lot) {
        if (lot.check === true) {
          var id = lot.id;
          $location.path("achats/lots/modifier/" + id);
        }

      })
    }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.lots, function(lot) {
        lot.check = true;
      })
    } else {
      angular.forEach($this.lots, function(lot) {
        lot.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.lots, function(lot) {
      if (lot.check) {
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

app.controller('lotsController', lotsController);
