angular.module('eliteApp', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider

      .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'app/home/home.html'
      })

      .state('home.leagues', {
        url: '/leagues',
        views: {
          'tab-leagues': {
            templateUrl: 'app/home/leagues.html',
            controller: 'LeaguesController',
            controllerAs: 'leaguesCtrl'
          }
        }
      })

      .state('home.myteams', {
        url: '/myteams',
        views: {
          'tab-myteams': {
            templateUrl: 'app/home/myteams.html'
          }
        }
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/layout/menu-layout.html'
      })

      .state('app.teams', {
        url: '/teams',
        views: {
          'menuContent': {
            templateUrl: 'app/teams/teams.html'
          }
        }
      })

      .state('app.team-detail', {
        url: '/teams/:id',
        views: {
          'menuContent': {
            templateUrl: 'app/teams/team-detail.html',
            controller: 'TeamDetailController',
            controllerAs: 'teamDetailCtrl'
          }
        }
      })

      .state('app.game', {
        url: '/game/:id',
        views: {
          'menuContent': {
            templateUrl: 'app/game/game.html'
          }
        }
      })

      .state('app.standings', {
        url: '/standings',
        views: {
          'menuContent': {
            templateUrl: 'app/standings/standings.html'
          }
        }
      })

      .state('app.locations', {
        url: '/locations',
        views: {
          'menuContent': {
            templateUrl: 'app/locations/locations.html',
            controller: 'LocationsController',
            controllerAs: 'locationsCtrl'
          }
        }
      })

      .state('app.rules', {
        url: '/rules',
        views: {
          'menuContent': {
            templateUrl: 'app/rules/rules.html'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/teams');
  });
