var app = angular.module('app');

var detailsController = function($http, $stateParams) {
    var $this = this;

    $http.get('data/data.json').then(function(response) {
      $this.projets = response.data;
      console.log($this.projets);

      angular.forEach($this.projets, function(projet) {
        console.log(projet.id);

          if (projet.id == $stateParams.contactId) {
            $this.theParams = {
              'name': projet.name,
              'secteurs': projet.secteurs,
              'sousprojets': projet.sousprojets
            }
          }
        })
    })



    }

    app.controller('detailsController', detailsController);