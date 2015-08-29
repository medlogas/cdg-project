var app = angular.module('app');

var detailsController = function($http, $stateParams) {
  var $this = this;

  $this.secteursArray = [];
  $this.allsecteurs = [];
  $this.allsousprojets = [];
  $this.sousprojetsArray = [];

  // FETCH ALL SECTEURS **********************************
  $http.get('data/secteurs.json').then(function(response) {
    $this.secteurs = response.data;
  })


  // FETCH ALL SOUSPROJETS **********************************
  $http.get('data/sous-projets.json').then(function(response) {
    $this.sousprojets = response.data;
    // FETCH SOUSPROJETS APPARTENANT AU PROJET
    angular.forEach($this.sousprojets, function(sousprojet) {
      if (sousprojet.id_projet == $stateParams.contactId) {
        $this.sousprojetsArray.push(sousprojet.name);
      }
    })
  })

  // FETCH THE NAMEPROJET WITH ID_STATE **********************************
  $http.get('data/data.json').then(function(response) {
    $this.dataps = response.data;
    angular.forEach($this.dataps, function(datap) {
      if (datap.id == $stateParams.contactId) {
        $this.name = datap.name;
      }
    })
  })


  // FETCH SECTEURS AND SOUSPROJETS APPARTENANT AU PROJET WITH ID_STATE **********************************
  $http.get('data/secteurs-projets.json').then(function(response) {
    $this.projets = response.data;
    angular.forEach($this.projets, function(projet) {
      if (projet.id_projet == $stateParams.contactId) {

        // FETCH SECTEURS APPARTENANT AU PROJET
        angular.forEach($this.secteurs, function(secteur) {
          if (projet.id_secteur == secteur.id) {
            $this.secteursArray.push(secteur.name);
          }
        })

      } // END IF
    })
  })

  console.log($this.sousprojetsArray);
}

app.controller('detailsController', detailsController);
