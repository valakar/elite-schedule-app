(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('TeamsController', TeamsController);

  function TeamsController(eliteApi, leagueData) {
    var vm = this;
    
    angular.extend(vm, {
      teams: leagueData.teams
    });
  }
})();
