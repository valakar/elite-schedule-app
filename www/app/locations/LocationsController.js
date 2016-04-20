(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('LocationsController', LocationsController);

  function LocationsController(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();

    angular.extend(vm, {
      locations: data.locations
    });
  }
})();
