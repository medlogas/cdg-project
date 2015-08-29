var app = angular.module('app');

var modifierController = function($http, $stateParams) {
  var $this = this;

  $this.secteurs = [];
  $this.allsecteurs = [];
  $this.allsousprojets = [];
  $this.sousprojets = [];

  // FETCH ALL SECTEURS **********************************
  $http.get('data/secteurs.json').then(function(response) {
    $this.secteurs = response.data;
    angular.forEach($this.secteurs, function(secteur) {
      $this.allsecteurs.push(secteur.name);
    })
  })


  // FETCH ALL SOUSPROJETS **********************************
  $http.get('data/sous-projets.json').then(function(response) {
    $this.sousprojets = response.data;
    angular.forEach($this.sousprojets, function(sousprojet) {
      $this.allsousprojets.push(sousprojet.name);
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
            $this.secteurs.push(secteur.name);
          }
        })
        // FETCH SOUSPROJETS APPARTENANT AU PROJET
        angular.forEach($this.sousprojets, function(sousprojet) {
          if (projet.id_projet == sousprojet.id_projet) {
            $this.sousprojets.push(sousprojet.name);
          }
        })
      } // END IF
    })
  })
}

app.controller('modifierController', modifierController);
