var app = angular.module('app');

var detailsSecController = function($http, $stateParams) {
  var $this = this;

  $this.soussecteursArray = [];

  // FETCH SECTEURS WITH ID SENDED **********************************
  $http.get('data/secteurs.json').then(function(response) {
    $this.secteurs = response.data;
    angular.forEach($this.secteurs, function(secteur) {
      if (secteur.id == $stateParams.contactId) {
        $this.name = secteur.name;

        $http.get('data/sous-secteurs.json').then(function(response) {
          $this.soussecteurs = response.data;
          // FETCH SOUSPROJETS APPARTENANT AU PROJET
          angular.forEach($this.soussecteurs, function(soussecteur) {
            if (soussecteur.id_soussecteur == $stateParams.contactId) {
              $this.soussecteursArray.push(soussecteur.name);
            }
          })
        })
        
      }
    })
  })



  // console.log($this.sousprojetsArray);
}

app.controller('detailsSecController', detailsSecController);
