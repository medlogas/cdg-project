var app = angular.module('app');

var secteursController = function($http, $location) {

  var $this = this;


  // DATA FOT PROJECTS
  $http.get('data/secteurs.json').then(function(response) {
    $this.datasecteurs= response.data;
    // console.log($this.datasecteurs.secteurs);
  })

$this.details= function() {
  angular.forEach($this.datasecteurs[0].secteurs, function(secteur) {
    if (secteur.check === true) {
      var id = secteur.id;
       $location.path("/secteurs/details/"+id);
    }

  })
}

$this.modifier= function() {
  angular.forEach($this.datasecteurs[0].secteurs, function(secteur) {
    if (secteur.check === true) {
      var id = secteur.id;
       $location.path("/secteurs/modifier/"+id);
    }

  })
}
  // HANDLE CHECKED LINES IN PROJECTS TABLE
  // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.datasecteurs[0].secteurs, function(secteur) {
        secteur.check = true;
      })
    } else {
      angular.forEach($this.datasecteurs[0].secteurs, function(secteur) {
        secteur.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.datasecteurs[0].secteurs, function(secteur) {
      if (secteur.check) {
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

app.controller('secteursController', secteursController);
