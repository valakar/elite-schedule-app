(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('LocationsController', LocationsController);

  function LocationsController(leagueData) {
    var vm = this;

    angular.extend(vm, {
      locations: leagueData.locations
    });
  }
})();
