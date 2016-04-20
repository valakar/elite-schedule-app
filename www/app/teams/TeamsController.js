(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('TeamsController', TeamsController);

  function TeamsController(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();

    angular.extend(vm, {
      teams: data.teams
    });
  }
})();
