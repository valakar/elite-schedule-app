(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('StandingsController', StandingsController);

  function StandingsController(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();

    angular.extend(vm, {
      standings: data.standings
    });
  }
})();
