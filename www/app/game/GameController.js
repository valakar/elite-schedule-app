(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('GameController', GameController);

  function GameController($stateParams, eliteApi) {
    var vm = this;

    var gameId = Number($stateParams.id);
    var data = eliteApi.getLeagueData();

    angular.extend(vm, {
      game: _.find(data.games, { 'id': gameId })
    });
  }
})();
