var app = angular.module('app');

var modifierSecteursController = function($http, $stateParams) {
    var $this = this;

    $http.get('data/secteurs.json').then(function(response) {
      $this.datasecteurs = response.data;
      console.log($this.datasecteurs[0].allsousecteurs);

      $this.allsoussecteurs = $this.datasecteurs[0].allsousecteurs;

      angular.forEach($this.datasecteurs[0].secteurs, function(secteur) {
        // console.log(secteur.id);

          if (secteur.id == $stateParams.contactId) {
            $this.name = secteur.name;
            $this.soussecteurs = secteur.soussecteurs;
            console.log(secteur.soussecteurs);
          }
        })
    })



    }

    app.controller('modifierSecteursController', modifierSecteursController);
