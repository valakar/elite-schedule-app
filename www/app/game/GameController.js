(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('GameController', GameController);

  function GameController($stateParams, leagueData) {
    var vm = this;

    var gameId = Number($stateParams.id);

    angular.extend(vm, {
      game: _.find(leagueData.games, { 'id': gameId })
    });
  }
})();
