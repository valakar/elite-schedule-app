(function () {
  'use strict';

  angular
    .module('eliteApp')
    .factory('eliteApi', eliteApi);

  function eliteApi($http, $ionicLoading) {

    var currentLeagueId;

    return {
      getLeagues: getLeagues,
      getLeagueData: getLeagueData,
      setLeagueId: setLeagueId
    };

    function getLeagues() {
      return $http.get('http://elite-schedule.net/api/leaguedata')
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log('Error while making HTTP call.', error);
        });
    }

    function getLeagueData() {

      console.log('currentLeagueId', currentLeagueId);
      $ionicLoading.show({ template: 'Loading... '});

      return $http.get('http://elite-schedule.net/api/leaguedata/' + currentLeagueId)
        .then(function (response, status) {
          console.log('Received schedule data via HTTP.', response, status);
          $ionicLoading.hide();
          return response.data;
        })
        .catch(function (error) {
          console.log('Error while making HTTP call.', error);
          $ionicLoading.hide();
        });
    }

    function setLeagueId(leagueId) {
      currentLeagueId = leagueId;
    }

  }
})();
