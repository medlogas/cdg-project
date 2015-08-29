var app = angular.module('app');

var modifierSecteursController = function($http, $stateParams) {
  var $this = this;
  var car = "dkjhfhd";
 
  $this.soussecteur = [];
  $this.allsoussecteurs = [];

  $http.get('data/secteurs.json').then(function(response) {
    $this.datasecteurs = response.data;

    $http.get('data/sous-secteurs.json').then(function(response) {
      $this.datasoussecteurs = response.data;
      angular.forEach($this.datasoussecteurs, function(soussecteur) {
          if (soussecteur.id_soussecteur == $stateParams.contactId) {
            $this.soussecteur.push(soussecteur.name);
          }
          $this.allsoussecteurs.push(soussecteur.name);
      })
    })

    angular.forEach($this.datasecteurs, function(secteur) {
      if (secteur.id == $stateParams.contactId) {
        $this.name = secteur.name;
      }
    })
  })
}

app.controller('modifierSecteursController', modifierSecteursController);
