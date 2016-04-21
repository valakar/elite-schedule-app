(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('LeaguesController', LeaguesController);

  function LeaguesController($state, eliteApi, leagues) {
    var vm = this;

    angular.extend(vm, {
      leagues: leagues,
      selectLeague: selectLeague
    });

    function selectLeague(id) {
      //TODO: select correct league
      eliteApi.setLeagueId(id);
      $state.go('app.teams', {leagueId: id}, {reload: true});
    }

  }
})();
