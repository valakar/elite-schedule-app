(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('StandingsController', StandingsController);

  function StandingsController(leagueData) {
    var vm = this;

    angular.extend(vm, {
      standings: leagueData.standings
    });
  }
})();
