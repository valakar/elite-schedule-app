(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('LeaguesController', LeaguesController);

  function LeaguesController($state, eliteApi) {
    var vm = this;

    angular.extend(vm, {
      leagues: eliteApi.getLeagues(),
      selectLeague: selectLeague
    });

    function selectLeague() {
      //TODO: select correct league
      $state.go('app.teams');
    }

  }
})();
