(function () {
  'use strict';

  angular
    .module('eliteApp')
    .controller('teamDetailController', teamDetailController);

  function teamDetailController($stateParams) {

    var vm = this;

    console.log('test');
    console.log('$stateParams', $stateParams);
  }
})();
