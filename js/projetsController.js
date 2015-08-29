var app = angular.module('app');

var projetsController = function($http, $location) {

  var $this = this;

  // DATA FOT PROJECTS
  $http.get('data/data.json').then(function(response) {
    $this.projets = response.data;
  })

  $this.details = function() {
    angular.forEach($this.projets, function(projet) {
      if (projet.check === true) {
        var id = projet.id;
        $location.path("/projets/details/" + id);
      }
    })
  }

  $this.modifier = function() {
      angular.forEach($this.projets, function(projet) {
        if (projet.check === true) {
          var id = projet.id;
          $location.path("/projets/modifier/" + id);
        }

      })
    }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.projets, function(projet) {
        projet.check = true;
      })
    } else {
      angular.forEach($this.projets, function(projet) {
        projet.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.projets, function(projet) {
      if (projet.check) {
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

app.controller('projetsController', projetsController);
